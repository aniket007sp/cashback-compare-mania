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
      <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-50">
        {/* Left Section: Brand List - Now sticky and full height on larger screens */}
        <div className="w-full lg:w-1/4 lg:min-w-[250px] lg:max-w-[300px] lg:sticky lg:top-0 lg:h-screen overflow-y-auto border-r border-gray-200">
          <BrandList brands={netlifyOffers} />
        </div>
        {/* Main Content - Flexible width */}
        <div className="flex-1 overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <ExclusiveStores />
            <NetlifyOffersSection />
          </div>
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Index;