import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BrandList from '../components/BrandList';
import TopDeals from '../components/TopDeals';
import ProductList from '../components/ProductList';
import Advertisement from '../components/Advertisement';
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
      <Advertisement size="large" />
      <div className="my-8 flex flex-wrap">
        <div className="w-full lg:w-3/4">
          <BrandList category={category} onSelectBrand={setSelectedBrand} />
        </div>
        <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
          <Advertisement size="medium" />
        </div>
      </div>
      <TopDeals category={category} />
      <Advertisement size="small" />
      <ProductList category={category} brand={selectedBrand} />
    </div>
  );
};

export default CategoryPage;