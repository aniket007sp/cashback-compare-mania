import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BrandList from '../components/BrandList';
import TopDeals from '../components/TopDeals';
import ProductList from '../components/ProductList';

const CategoryPage = () => {
  const { category } = useParams();
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category}</h1>
      <BrandList category={category} onSelectBrand={setSelectedBrand} />
      <TopDeals category={category} />
      <ProductList category={category} brand={selectedBrand} />
    </div>
  );
};

export default CategoryPage;