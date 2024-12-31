import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NetlifyOffersSection from '../components/NetlifyOffersSection';
import ExclusiveStores from '../components/ExclusiveStores';
import InstallEarnStores from '../components/Install_and_earn';
import BrandList from '../components/BrandList'; // Import the BrandList component
import netlifyOffers from '../data/netlify_offers.json';

const brands = netlifyOffers;

const Index = () => {
  const [activeSection, setActiveSection] = useState('shopping');

  const renderContent = () => {
    return (
      <>
        <ExclusiveStores />
        <InstallEarnStores />
        <NetlifyOffersSection />
        <Footer />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navbar />
      <main className="flex w-full">
        {/* Left Section: BrandList */}
        <BrandList brands={brands} />

        {/* Main Content */}
        <section className="flex-1 max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </section>
      </main>
    </div>
  );
};

export default Index;
