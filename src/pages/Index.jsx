import React, { useState } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import NetlifyOffersSection from '../components/NetlifyOffersSection';
import ExclusiveStores from '../components/ExclusiveStores';
import BrandList from '../components/BrandList';
import netlifyOffers from '../data/netlify_offers.json';

const Index = () => {
  const [activeSection, setActiveSection] = useState('shopping');

  const renderContent = () => (
    <div className="flex flex-col w-full">
      <ExclusiveStores />
      <NetlifyOffersSection />
      <Footer />
    </div>
  );

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section: Brand List */}
        <div className="w-full md:w-1/4 md:sticky md:top-0 md:h-screen">
          <BrandList brands={netlifyOffers} />
        </div>
        {/* Main Content */}
        <div className="flex-1 max-w-[100vw] overflow-x-hidden px-2 sm:px-4 md:px-6 lg:px-8">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
};

export default Index;