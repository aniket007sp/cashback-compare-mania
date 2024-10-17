import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ category, brand }) => {
  // This is a mock list of products. In a real application, you would fetch this data based on the category and brand.
  const products = [
    { 
      id: 1, 
      name: 'Product 1', 
      lowestPrice: 599, 
      image: '/placeholder.svg', 
      cashback: 5,
      category: 'Electronics', 
      brand: 'Brand A',
      links: [
        { platform: 'Amazon', url: 'https://amazon.com' },
        { platform: 'Best Buy', url: 'https://bestbuy.com' },
        { platform: 'Walmart', url: 'https://walmart.com' },
      ]
    },
    { 
      id: 2, 
      name: 'Product 2', 
      lowestPrice: 1299, 
      image: '/placeholder.svg', 
      cashback: 3,
      category: 'Electronics', 
      brand: 'Brand B',
      links: [
        { platform: 'Amazon', url: 'https://amazon.com' },
        { platform: 'Target', url: 'https://target.com' },
        { platform: 'Newegg', url: 'https://newegg.com' },
      ]
    },
    // ... Add more mock products with similar structure
  ];

  const filteredProducts = products.filter(
    (product) => (!category || product.category === category) && (!brand || product.brand === brand)
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