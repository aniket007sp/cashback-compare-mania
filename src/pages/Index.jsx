import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import NetlifyOffersSection from '../components/NetlifyOffersSection';
import ExclusiveStores from '../components/ExclusiveStores';
import BrandList from '../components/BrandList';
import netlifyOffers from '../data/netlify_offers.json';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-row flex-grow">
          {/* Left Section: Brand List - Always on left */}
          <div className="w-[120px] sm:w-[200px] min-w-[70px] sticky top-0 h-[calc(100vh-64px)] overflow-y-auto border-r border-gray-200 shrink-0 bg-white shadow-md">
            <BrandList brands={netlifyOffers} />
          </div>
          {/* Main Content - Flexible width */}
          <div className="flex-1 overflow-x-hidden">
            <ExclusiveStores />
            <NetlifyOffersSection />
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;