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
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Left Section: Brand List - Now sticky on desktop */}
        <div className="w-full md:w-1/4 md:min-w-[280px] md:max-w-[320px] md:sticky md:top-0 md:h-screen md:overflow-y-auto border-b md:border-r border-gray-200 shrink-0">
          <BrandList brands={netlifyOffers} />
        </div>
        {/* Main Content - Flexible width */}
        <div className="flex-1 overflow-x-hidden">
          <ExclusiveStores />
          <NetlifyOffersSection />
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Index;