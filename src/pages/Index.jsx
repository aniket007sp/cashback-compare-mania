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
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Left Section: Brand List - Sticky and responsive */}
        <div className="w-full md:w-1/4 lg:w-1/5 min-w-[200px] max-w-[300px] md:sticky md:top-0 md:h-screen md:overflow-y-auto border-r border-gray-200 shrink-0">
          <BrandList brands={netlifyOffers} />
        </div>
        {/* Main Content - Flexible width */}
        <div className="flex-1 overflow-x-hidden">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
