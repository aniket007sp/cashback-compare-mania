import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';
import Footer from '../components/Footer';
import Advertisement from '../components/Advertisement';
import TrendingDeals from '../components/TrendingDeals';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dealsRef = useRef(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const scrollToDeals = () => {
    dealsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header onDealsClick={scrollToDeals} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8">Price Comparison Platform</h1>
        <p className="text-center text-gray-600 mb-6 md:mb-8">Find the best deals across multiple e-commerce platforms!</p>
        <SearchBar />
        <div className="my-6 md:my-8">
          <Advertisement size="large" />
        </div>
        <div className="my-6 md:my-8">
          <CategoryList onSelectCategory={handleCategorySelect} />
        </div>
        <div className="my-6 md:my-8">
          <Advertisement size="medium" />
        </div>
        <div ref={dealsRef} className="my-6 md:my-8">
          <TrendingDeals />
        </div>
        <div className="my-6 md:my-8">
          <Advertisement size="small" />
        </div>
        <ProductList selectedCategory={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;