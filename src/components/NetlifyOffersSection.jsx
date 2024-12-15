import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const NetlifyOffersSection = () => {
  return (
    <section id="featured-offers" className="container mx-auto px-4 py-8">
      <h2 className="text-xl text-white font-semibold mb-4 sm:text-2xl bg-[crimson] w-full py-2 text-center">
        Featured Offers
      </h2>
      <div className="space-y-6">
        {categories.map((categoryData) => (
          <div key={categoryData.category}>
            <div className="flex items-center space-x-4 mb-4">
              <h3 className="text-lg text-black font-semibold bg-[gray] bg-opacity-30 w-full py-2 text-center">
                {categoryData.category}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Object.entries(categoryData.subcategories).map(([subcategory, stores]) => (
                <Link
                  key={subcategory}
                  to={`/offers/${categoryData.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/${subcategory.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mb-2 overflow-hidden rounded-full bg-gray-100">
                    <img
                      src={`/images/categories/${subcategory.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.svg`}
                      alt={subcategory}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-center">{subcategory}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NetlifyOffersSection;