import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';
import Footer from '../components/Footer';
import Advertisement from '../components/Advertisement';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Price Comparison Platform</h1>
        <p className="text-center text-gray-600 mb-8">Find the best deals across multiple e-commerce platforms!</p>
        <SearchBar />
        <Advertisement size="large" />
        <div className="my-8 flex flex-wrap justify-between">
          <div className="w-full lg:w-3/4">
            <CategoryList onSelectCategory={handleCategorySelect} />
          </div>
          <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
            <Advertisement size="medium" />
          </div>
        </div>
        <ProductList selectedCategory={selectedCategory} />
        <Advertisement size="small" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;