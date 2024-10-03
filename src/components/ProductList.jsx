import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ category, brand }) => {
  // This is a mock list of products. In a real application, you would fetch this data based on the category and brand.
  const products = [
    { id: 1, name: 'Product 1', lowestPrice: 599, image: '/placeholder.svg', platform: 'Amazon', link: 'https://amazon.com', category: 'Electronics', brand: 'Brand A' },
    { id: 2, name: 'Product 2', lowestPrice: 1299, image: '/placeholder.svg', platform: 'Best Buy', link: 'https://bestbuy.com', category: 'Electronics', brand: 'Brand B' },
    { id: 3, name: 'Product 3', lowestPrice: 129, image: '/placeholder.svg', platform: 'Walmart', link: 'https://walmart.com', category: 'Electronics', brand: 'Brand C' },
    { id: 4, name: 'Product 4', lowestPrice: 249, image: '/placeholder.svg', platform: 'Target', link: 'https://target.com', category: 'Electronics', brand: 'Brand A' },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === category && (!brand || product.brand === brand)
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        {brand ? `${brand} Products` : 'All Products'}
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