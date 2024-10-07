import React, { useRef } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import Advertisement from '../components/Advertisement';
import TrendingDeals from '../components/TrendingDeals';
import CategoryCarousel from '../components/CategoryCarousel';

const generateSampleData = (category, count) => {
  return Array.from({ length: count }, (_, i) => ({
    name: `${category} Item ${i + 1}`,
    description: `Description for ${category} Item ${i + 1}`,
    features: [
      `Feature 1 for ${category} ${i + 1}`,
      `Feature 2 for ${category} ${i + 1}`,
      `Feature 3 for ${category} ${i + 1}`,
    ],
    ctaText: "Learn More",
    badge: i === 0 ? "Featured" : undefined,
  }));
};

const creditCardData = generateSampleData("Credit Card", 6);
const electronicsData = generateSampleData("Electronics", 6);
const fashionData = generateSampleData("Fashion", 6);
const homeAppliancesData = generateSampleData("Home Appliances", 6);

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
        <CategoryCarousel title="Credit Cards" items={creditCardData} />
        <CategoryCarousel title="Electronics" items={electronicsData} />
        <CategoryCarousel title="Fashion" items={fashionData} />
        <CategoryCarousel title="Home Appliances" items={homeAppliancesData} />
        <div ref={dealsRef}>
          <TrendingDeals />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;