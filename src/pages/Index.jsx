import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import CashbackInfo from '../components/CashbackInfo';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Price Comparison & Cashback Platform</h1>
        <SearchBar />
        <CashbackInfo />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;