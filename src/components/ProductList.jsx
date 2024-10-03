import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ selectedCategory }) => {
  const products = [
    { id: 1, name: 'Smartphone X', lowestPrice: 599, image: '/placeholder.svg', platform: 'Amazon', link: 'https://amazon.com', category: 'Electronics' },
    { id: 2, name: 'Laptop Pro', lowestPrice: 1299, image: '/placeholder.svg', platform: 'Best Buy', link: 'https://bestbuy.com', category: 'Electronics' },
    { id: 3, name: 'Wireless Earbuds', lowestPrice: 129, image: '/placeholder.svg', platform: 'Walmart', link: 'https://walmart.com', category: 'Electronics' },
    { id: 4, name: 'Smart Watch', lowestPrice: 249, image: '/placeholder.svg', platform: 'Target', link: 'https://target.com', category: 'Electronics' },
    { id: 5, name: 'Men\'s T-Shirt', lowestPrice: 19.99, image: '/placeholder.svg', platform: 'Amazon', link: 'https://amazon.com', category: 'Clothing & Accessories' },
    { id: 6, name: 'Women\'s Jeans', lowestPrice: 49.99, image: '/placeholder.svg', platform: 'Target', link: 'https://target.com', category: 'Clothing & Accessories' },
    { id: 7, name: 'Coffee Maker', lowestPrice: 79.99, image: '/placeholder.svg', platform: 'Best Buy', link: 'https://bestbuy.com', category: 'Home & Kitchen' },
    { id: 8, name: 'Bestselling Novel', lowestPrice: 14.99, image: '/placeholder.svg', platform: 'Amazon', link: 'https://amazon.com', category: 'Books' },
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;