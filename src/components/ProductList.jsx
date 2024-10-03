import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Smartphone X', lowestPrice: 599, image: '/placeholder.svg', platform: 'Amazon', link: 'https://amazon.com' },
    { id: 2, name: 'Laptop Pro', lowestPrice: 1299, image: '/placeholder.svg', platform: 'Best Buy', link: 'https://bestbuy.com' },
    { id: 3, name: 'Wireless Earbuds', lowestPrice: 129, image: '/placeholder.svg', platform: 'Walmart', link: 'https://walmart.com' },
    { id: 4, name: 'Smart Watch', lowestPrice: 249, image: '/placeholder.svg', platform: 'Target', link: 'https://target.com' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;