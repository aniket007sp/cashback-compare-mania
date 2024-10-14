import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ category, brand, merchants }) => {
  const filteredMerchants = brand
    ? merchants.filter(merchant => merchant.brand === brand)
    : merchants;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        {brand ? `${brand} Products` : 'All Products'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredMerchants.map((merchant, index) => (
          <ProductCard key={index} product={{
            id: index,
            name: merchant.brand,
            lowestPrice: merchant.earning,
            image: merchant.image || '/placeholder.svg',
            platform: merchant.category,
            link: merchant.link,
            category: merchant.category,
            condition: merchant.condition
          }} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;