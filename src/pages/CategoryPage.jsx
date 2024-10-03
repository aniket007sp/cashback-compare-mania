import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BrandList from '../components/BrandList';
import TopDeals from '../components/TopDeals';
import ProductList from '../components/ProductList';
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  const { category } = useParams();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Button
          variant="ghost"
          className="mr-4"
          onClick={handleGoBack}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-3xl font-bold">{category}</h1>
      </div>
      <BrandList category={category} onSelectBrand={setSelectedBrand} />
      <TopDeals category={category} />
      <ProductList category={category} brand={selectedBrand} />
    </div>
  );
};

export default CategoryPage;