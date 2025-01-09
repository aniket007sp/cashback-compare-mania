import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import netlifyOffers from '../data/netlify_offers.json';
import { subcategoryImages } from '../data/subcategoryImages';

// Fallback image URL
const FALLBACK_IMAGE = "https://via.placeholder.com/150";

// Category images
const categoryImages = {
  "Fashion, Clothing & Accessories": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  "Health, Wellness & Beauty": "",
  "Home & Living": "",
  "Financial Programs": "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  "Travel & Tourism": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  "Online Services": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  "Online Games": "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
};

// Utility function to format URLs
const formatUrl = (str) => str.toLowerCase().replace(/\s+/g, '-');

const NetlifyOffersSection = () => {
  // Categorize offers by category and subcategory
  const categorizedOffers = useMemo(() => {
    const categories = {};
    netlifyOffers.forEach((offer) => {
      const { category, subcategory } = offer.categories;
      if (!categories[category]) {
        categories[category] = {
          subcategories: new Set(),
          offers: [],
        };
      }
      if (subcategory) categories[category].subcategories.add(subcategory);
      categories[category].offers.push(offer);
    });
    return categories;
  }, []);

  return (
    <section id="featured-offers" className="container mx-auto px-4 py-8">
      <header>
        <h2 className="text-xl text-white font-semibold mb-4 sm:text-xl bg-[crimson] w-full py-2 text-center">
          Featured Offers
        </h2>
      </header>

      <div className="space-y-6">
        {Object.entries(categorizedOffers).map(([category, data]) => (
          <article key={category}>
            <div className="flex items-center space-x-4 mb-4">
              <h3 className="text-lg sm:text-md text-black font-semibold bg-gray-200 bg-opacity-30 w-full py-2 text-center">
                {category}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[...data.subcategories].map((subcategory) => {
                const imageUrl = subcategoryImages[subcategory] || FALLBACK_IMAGE;
                return (
                  <Link
                    key={subcategory}
                    to={`/offers/${formatUrl(category)}/${formatUrl(subcategory)}`}
                    className="flex flex-col items-center hover:scale-105 transition-transform"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mb-2 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src={imageUrl}
                        alt={subcategory}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = FALLBACK_IMAGE; // Fallback if image fails to load
                        }}
                      />
                    </div>
                    <span className="text-sm text-center text-gray-700">{subcategory}</span>
                  </Link>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NetlifyOffersSection;
