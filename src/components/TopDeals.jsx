import React from 'react';
import ProductCard from './ProductCard';

const TopDeals = ({ category }) => {
  // This is a mock list of top deals. In a real application, you would fetch this data based on the category.
  const topDeals = [
    { id: 1, name: 'Top Deal 1', lowestPrice: 99.99, image: '/placeholder.svg', platform: 'Amazon', link: 'https://amazon.com', category: category },
    { id: 2, name: 'Top Deal 2', lowestPrice: 149.99, image: '/placeholder.svg', platform: 'Best Buy', link: 'https://bestbuy.com', category: category },
    { id: 3, name: 'Top Deal 3', lowestPrice: 79.99, image: '/placeholder.svg', platform: 'Walmart', link: 'https://walmart.com', category: category },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Top Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topDeals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopDeals;