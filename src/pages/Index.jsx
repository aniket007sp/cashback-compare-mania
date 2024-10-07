import React, { useRef } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import Advertisement from '../components/Advertisement';
import TrendingDeals from '../components/TrendingDeals';
import CategoryCarousel from '../components/CategoryCarousel';

const creditCardData = [
  {
    name: "HDFC Swiggy Card",
    description: "Save upto ₹36,000/year on Swiggy & Online Spends",
    reward: "+ Upto ₹1000 Rewards",
    image: "/images/logos/hdfc.png"
  },
  {
    name: "Flipkart Axis Card",
    description: "Upto 5% Cashback",
    reward: "+ Flat ₹750 Rewards",
    image: "/images/logos/axis.png"
  },
  {
    name: "SBI SimplyCLICK Card",
    description: "Get 10x Rewards on",
    reward: "+ Flat ₹1200 Rewards",
    image: "/images/logos/sbi.png"
  },
  {
    name: "HSBC Lite+ Card",
    description: "10% Cashback Dining, Food Delivery & Grocery",
    reward: "+ Flat ₹2200 Rewards",
    image: "/images/logos/hsbc.png"
  },
  // Add more credit card data as needed
];

const Index = () => {
  const dealsRef = useRef(null);

  const scrollToDeals = () => {
    dealsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onDealsClick={scrollToDeals} />
      <main className="flex-grow">
        <SearchBar />
        <Advertisement size="large" className="my-8" />
        <CategoryCarousel title="BEST CARDS FOR FESTIVE SHOPPING" items={creditCardData} />
        <div ref={dealsRef}>
          <TrendingDeals />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;