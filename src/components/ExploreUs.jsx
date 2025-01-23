import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logos } from '../data/latest/logos';
import babyKids from '../data/latest/babyKids.json';
import electronicsHouseholdAppliances from '../data/latest/electronicsHouseholdAppliances.json';
import fashion from '../data/latest/fashion.json';
import financeBanking from '../data/latest/financeBanking.json';
import gifting from '../data/latest/gifting.json';
import homeLiving from '../data/latest/homeLiving.json';
import onlineServices from '../data/latest/onlineServices.json';
import travelHospitality from '../data/latest/travelHospitality.json';
import CategoryCarousel from './CategoryCarousel';

// Utility function to format URLs
const formatUrl = (str) => str.toLowerCase().replace(/\s+/g, '-');

// Group offers by subcategory
const groupOffersBySubcategory = (offers) => {
  const grouped = {};
  offers.forEach((offer) => {
    const subcategory = offer["SUB-CATEGORY"] || "Other";
    if (!grouped[subcategory]) {
      grouped[subcategory] = [];
    }
    grouped[subcategory].push(offer);
  });
  return grouped;
};

const ExploreUs = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const categories = {
    "Baby & Kids": babyKids,
    "Electronics & Household Appliances": electronicsHouseholdAppliances,
    "Fashion": fashion,
    "Finance & Banking": financeBanking,
    "Gifting": gifting,
    "Home & Living": homeLiving,
    "Online Services": onlineServices,
    "Travel & Hospitality": travelHospitality
  };

  const handleSubcategoryClick = (category, subcategory) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
  };

  const renderBrands = (category, subcategory) => {
    if (!selectedCategory || !selectedSubcategory) return null;

    const offers = categories[category];
    const groupedOffers = groupOffersBySubcategory(offers);
    const subcategoryOffers = groupedOffers[subcategory] || [];

    const items = subcategoryOffers.map((offer) => ({
      name: offer.COMPANY,
      image: offer["LOGO LINK"],
      description: offer["T&C"],
      reward: offer.Reward,
      link: offer.LINK
    }));

    return (
      <CategoryCarousel
        title={`${subcategory} - ${category}`}
        items={items}
      />
    );
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <header>
        <h2 className="text-md text-white font-semibold mb-4 sm:text-md md:text-lg bg-[crimson] w-full py-2 text-center">
          Explore Us
        </h2>
      </header>

      <div className="space-y-6">
        {Object.entries(categories).map(([category, offers]) => {
          const groupedOffers = groupOffersBySubcategory(offers);

          // If there are offers without subcategories, include them under the "Other" subcategory
          if (groupedOffers.Other) {
            groupedOffers[category] = (groupedOffers[category] || []).concat(groupedOffers.Other);
            delete groupedOffers.Other;
          }

          return (
            <article key={category}>
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-md text-black font-semibold sm:text-md md:text-lg bg-gray-200 bg-opacity-30 w-full py-2 text-center">
                  {category}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {Object.entries(groupedOffers).map(([subcategory, subcategoryOffers]) => {
                  // Fetch logo for subcategory or fall back to category or default logo
                  const imageUrl = logos[subcategory] || logos[category] || "/images/categories/home.svg";

                  return (
                    <Link
                      key={subcategory}
                      to={`/offers/${formatUrl(category)}/${formatUrl(subcategory)}`}
                      className="flex flex-col items-center hover:scale-105 transition-transform"
                      onClick={() => handleSubcategoryClick(category, subcategory)}
                    >
                      <div className="w-16 h-16 sm:w-24 sm:h-24 mb-2 overflow-hidden rounded-full bg-gray-100">
                        <img
                          src={imageUrl}
                          alt={subcategory}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <span className="text-xs md:text-sm text-center text-gray-700">
                        {subcategory === category ? "Other" : subcategory}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {selectedCategory === category && selectedSubcategory &&
                renderBrands(category, selectedSubcategory)
              }
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreUs;
