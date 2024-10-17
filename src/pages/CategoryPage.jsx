import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BrandList from '../components/BrandList';
import TopDeals from '../components/TopDeals';
import ProductList from '../components/ProductList';
import Advertisement from '../components/Advertisement';
import CashbackInfo from '../components/CashbackInfo';
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <CashbackInfo />
          <TopDeals category={category} />
          <Advertisement size="large" className="my-8" />
          <ProductList category={category} brand={selectedBrand} />
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <BrandList category={category} onSelectBrand={setSelectedBrand} />
            <Advertisement size="medium" className="mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;