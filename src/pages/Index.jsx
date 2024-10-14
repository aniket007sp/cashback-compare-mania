import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import Advertisement from '../components/Advertisement';
import TrendingDeals from '../components/TrendingDeals';
import CategoryCarousel from '../components/CategoryCarousel';
import CategoryList from '../components/CategoryList';
import { fetchMerchantData, getAllCategories, getFilteredMerchants } from '../data/merchantData';

const Index = () => {
  const [merchants, setMerchants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchMerchantData();
        setMerchants(data);
        setCategories(getAllCategories(data));
      } catch (error) {
        console.error('Error fetching merchant data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onDealsClick={() => {}} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <SearchBar />
        <Advertisement size="large" className="my-8" />
        <CategoryList categories={categories} />
        {categories.map(category => (
          <CategoryCarousel 
            key={category}
            title={category.toUpperCase()}
            items={getFilteredMerchants(merchants, category).map(merchant => ({
              name: merchant.brand,
              description: `${merchant.subCategory} - ${merchant.type}`,
              reward: merchant.earning,
              image: merchant.image || '/placeholder.svg'
            }))}
          />
        ))}
        <TrendingDeals merchants={merchants} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;