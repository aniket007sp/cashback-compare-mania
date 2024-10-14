import React from 'react';
import ProductCard from './ProductCard';

const TopDeals = ({ category, merchants }) => {
  const topDeals = merchants.slice(0, 3); // Get the first 3 merchants for top deals

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Top Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topDeals.map((merchant, index) => (
          <ProductCard key={index} product={{
            id: index,
            name: merchant.brand,
            lowestPrice: merchant.earning,
            image: merchant.image || '/placeholder.svg',
            platform: merchant.category,
            link: merchant.link,
            category: merchant.category
          }} />
        ))}
      </div>
    </div>
  );
};

export default TopDeals;