import React, { useRef } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import Advertisement from '../components/Advertisement';
import TrendingDeals from '../components/TrendingDeals';
import CategoryCarousel from '../components/CategoryCarousel';
import FinanceSection from '../components/FinanceSection';

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
];

const electronicsData = [
  {
    name: "Smartphone Deals",
    description: "Up to 30% off on latest smartphones",
    reward: "Extra 5% cashback",
    image: "/images/categories/electronics.svg"
  },
  {
    name: "Laptop Offers",
    description: "Discounts up to ₹20,000 on laptops",
    reward: "Free accessories worth ₹2000",
    image: "/images/categories/electronics.svg"
  },
  // Add more electronics deals
];

const beautyData = [
  {
    name: "Skincare Bundle",
    description: "Buy 2 Get 1 Free on all skincare products",
    reward: "Free sample kit with every purchase",
    image: "/images/categories/beauty.svg"
  },
  {
    name: "Makeup Bonanza",
    description: "50% off on premium makeup brands",
    reward: "Loyalty points doubled",
    image: "/images/categories/beauty.svg"
  },
  // Add more beauty deals
];

const Index = () => {
  const dealsRef = useRef(null);

  const scrollToDeals = () => {
    dealsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onDealsClick={scrollToDeals} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <SearchBar />
        <Advertisement size="large" className="my-8" />
        <CategoryCarousel title="BEST CARDS FOR FESTIVE SHOPPING" items={creditCardData} />
        <CategoryCarousel title="TOP ELECTRONICS DEALS" items={electronicsData} />
        <CategoryCarousel title="BEAUTY & PERSONAL CARE OFFERS" items={beautyData} />
        <FinanceSection />
        <div ref={dealsRef}>
          <TrendingDeals />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
