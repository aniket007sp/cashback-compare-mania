import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Smartphone X', price: 599, image: '/placeholder.svg', cashback: 5 },
    { id: 2, name: 'Laptop Pro', price: 1299, image: '/placeholder.svg', cashback: 8 },
    { id: 3, name: 'Wireless Earbuds', price: 129, image: '/placeholder.svg', cashback: 3 },
    { id: 4, name: 'Smart Watch', price: 249, image: '/placeholder.svg', cashback: 4 },
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