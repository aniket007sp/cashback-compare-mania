import React, { useRef } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import Advertisement from '../components/Advertisement';
import TrendingDeals from '../components/TrendingDeals';
import CategoryCarousel from '../components/CategoryCarousel';

const creditCardData = [
  {
    name: "SBI Cashback Card",
    description: "Flat 5% Cashback on all purchases",
    features: [
      "5% cashback on online shopping",
      "1% cashback on all other spends",
      "Zero annual fee for first year"
    ],
    ctaText: "Apply Now",
    badge: "Best Seller"
  },
  {
    name: "HDFC Swiggy Card",
    description: "Save up to ₹36,000/year on Swiggy & Online Spends",
    features: [
      "15% off on Swiggy orders",
      "5% cashback on Amazon",
      "1% cashback on all other spends"
    ],
    ctaText: "Get This Card"
  },
  {
    name: "Axis Bank Flipkart Card",
    description: "Unlimited 5% cashback on Flipkart & Myntra",
    features: [
      "5% unlimited cashback on Flipkart & Myntra",
      "4X rewards on other online spends",
      "1.5% fuel surcharge waiver"
    ],
    ctaText: "Apply Now"
  }
];

const electronicsData = [
  {
    name: "iPhone 13",
    description: "Latest iPhone with A15 Bionic chip",
    features: [
      "6.1-inch Super Retina XDR display",
      "Dual 12MP camera system",
      "5G capable"
    ],
    ctaText: "Buy Now",
    badge: "New Launch"
  },
  {
    name: "Samsung QLED TV",
    description: "4K Ultra HD Smart TV with Quantum Processor",
    features: [
      "55-inch QLED display",
      "Quantum HDR",
      "Alexa built-in"
    ],
    ctaText: "Check Price"
  },
  {
    name: "Sony WH-1000XM4",
    description: "Industry-leading noise cancelling headphones",
    features: [
      "30-hour battery life",
      "Touch sensor controls",
      "Speak-to-chat technology"
    ],
    ctaText: "Shop Now"
  }
];

const Index = () => {
  const dealsRef = useRef(null);

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
        <CategoryCarousel title="Best Credit Cards" items={creditCardData} />
        <div className="my-6 md:my-8">
          <Advertisement size="medium" />
        </div>
        <CategoryCarousel title="Top Electronics Deals" items={electronicsData} />
        <div ref={dealsRef} className="my-6 md:my-8">
          <TrendingDeals />
        </div>
        <div className="my-6 md:my-8">
          <Advertisement size="small" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;