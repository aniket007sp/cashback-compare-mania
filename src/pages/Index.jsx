import React, { useState } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import NetlifyOffersSection from '../components/NetlifyOffersSection';
import ExclusiveStores from '../components/ExclusiveStores';
import BrandList from '../components/BrandList';
import netlifyOffers from '../data/netlify_offers.json'; // Import JSON

const Index = () => {
  const [activeSection, setActiveSection] = useState('shopping');

  const renderContent = () => (
    <>
      <ExclusiveStores />
      <NetlifyOffersSection />
      <Footer />
    </>
  );

  return (
    <Layout>
      {/* Left Section: Brand List */}
      <BrandList brands={netlifyOffers} />
      {/* Main Content */}
      <section className="flex-1 max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </section>
    </Layout>
  );
};

export default Index;
