import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NetlifyOffersSection from '../components/NetlifyOffersSection';
import { Button } from "@/components/ui/button";
import { Plane, Hotel, Train, Bus, Car } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('shopping');

  const renderContent = () => {
        return (
          <>
            <NetlifyOffersSection />
            <Footer/>
          </>
        );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
