import React from 'react';
import ProductCard from './ProductCard';

const TrendingDeals = () => {
  // Mock data for trending deals
  const trendingDeals = [
    { id: 1, name: 'Trending Deal 1', lowestPrice: 99.99, image: '/placeholder.svg', platform: 'Amazon', link: 'https://amazon.com' },
    { id: 2, name: 'Trending Deal 2', lowestPrice: 149.99, image: '/placeholder.svg', platform: 'Best Buy', link: 'https://bestbuy.com' },
    { id: 3, name: 'Trending Deal 3', lowestPrice: 79.99, image: '/placeholder.svg', platform: 'Walmart', link: 'https://walmart.com' },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Trending Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingDeals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingDeals;