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

const fashionData = [
  {
    name: "Summer Collection",
    description: "Trendy outfits for the season",
    features: [
      "Lightweight fabrics",
      "Vibrant colors",
      "Versatile styles"
    ],
    ctaText: "Shop Now",
    badge: "New Arrivals"
  },
  {
    name: "Formal Wear",
    description: "Elegant suits and dresses",
    features: [
      "Premium materials",
      "Classic designs",
      "Perfect fit guarantee"
    ],
    ctaText: "Explore Collection"
  },
  {
    name: "Activewear",
    description: "High-performance sportswear",
    features: [
      "Moisture-wicking fabric",
      "Flexible and durable",
      "Stylish designs"
    ],
    ctaText: "Get Active"
  }
];

const homeAppliancesData = [
  {
    name: "Smart Refrigerator",
    description: "Keep your food fresh and organized",
    features: [
      "AI-powered temperature control",
      "Built-in touchscreen",
      "Energy-efficient"
    ],
    ctaText: "Learn More",
    badge: "Smart Home"
  },
  {
    name: "Robot Vacuum",
    description: "Effortless cleaning for your home",
    features: [
      "Self-emptying bin",
      "Multi-surface cleaning",
      "App control"
    ],
    ctaText: "Add to Cart"
  },
  {
    name: "Air Purifier",
    description: "Breathe cleaner, healthier air",
    features: [
      "HEPA filtration",
      "Quiet operation",
      "Real-time air quality monitor"
    ],
    ctaText: "Breathe Better"
  }
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