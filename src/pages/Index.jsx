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
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Fetching merchant data...');
        const data = await fetchMerchantData();
        console.log('Merchant data fetched:', data);
        setMerchants(data);
        const allCategories = getAllCategories(data);
        console.log('Categories:', allCategories);
        setCategories(allCategories);
      } catch (error) {
        console.error('Error in loadData:', error);
        setError(error.message || 'An unexpected error occurred. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onDealsClick={() => {}} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <SearchBar />
        <Advertisement size="large" className="my-8" />
        {categories.length > 0 && <CategoryList categories={categories} />}
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