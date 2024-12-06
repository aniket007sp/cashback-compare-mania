import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CategorySection from '../components/CategorySection';
import DealOfTheDay from '../components/DealOfTheDay';
import PopularStores from '../components/PopularStores';
import ExploreForeignBrands from '../components/ExploreForeignBrands';
import InstallAndEarnSection from '../components/InstallAndEarnSection';
import LootDealsSection from '../components/LootDealsSection';
import GiftCards from '../components/GiftCards';
import FlightSearch from '../components/FlightSearch';
import HotelSearch from '../components/HotelSearch';
import TrainSearch from '../components/TrainSearch';
import BusSearch from '../components/BusSearch';
import CabSearch from '../components/CabSearch';
import Footer from '../components/Footer';
import NetlifyOffersSection from '../components/NetlifyOffersSection';
import { Button } from "@/components/ui/button";
import { Plane, Hotel, Train, Bus, Car } from 'lucide-react';
import FinanceSection from '../components/FinanceSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('shopping');

  const renderContent = () => {
    switch (activeSection) {
      case 'shopping':
        return (
          <>
            <DealOfTheDay />
            <CategorySection />
            <PopularStores />
            <ExploreForeignBrands />
            <LootDealsSection />
            <FinanceSection />
            <InstallAndEarnSection />
            <NetlifyOffersSection />
            <GiftCards />
            <Footer/>
          </>
        );
      case 'flights':
        return <FlightSearch setActiveSection={setActiveSection} />;
      case 'hotels':
        return <HotelSearch setActiveSection={setActiveSection} />;
      case 'trains':
        return <TrainSearch setActiveSection={setActiveSection} />;
      case 'buses':
        return <BusSearch setActiveSection={setActiveSection} />;
      case 'cabs':
        return <CabSearch setActiveSection={setActiveSection} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start md:justify-center overflow-x-auto md:overflow-x-visible py-4 space-x-2 md:space-x-4">
          <Button
            variant={activeSection === 'shopping' ? 'default' : 'outline'}
            onClick={() => setActiveSection('shopping')}
            className="whitespace-nowrap"
          >
            Shopping
          </Button>
          <Button
            variant={activeSection === 'flights' ? 'default' : 'outline'}
            onClick={() => setActiveSection('flights')}
            className="whitespace-nowrap"
          >
            <Plane className="mr-2 h-4 w-4" />
            Flights
          </Button>
          <Button
            variant={activeSection === 'hotels' ? 'default' : 'outline'}
            onClick={() => setActiveSection('hotels')}
            className="whitespace-nowrap"
          >
            <Hotel className="mr-2 h-4 w-4" />
            Hotels
          </Button>
          <Button
            variant={activeSection === 'trains' ? 'default' : 'outline'}
            onClick={() => setActiveSection('trains')}
            className="whitespace-nowrap"
          >
            <Train className="mr-2 h-4 w-4" />
            Trains
          </Button>
          <Button
            variant={activeSection === 'buses' ? 'default' : 'outline'}
            onClick={() => setActiveSection('buses')}
            className="whitespace-nowrap"
          >
            <Bus className="mr-2 h-4 w-4" />
            Buses
          </Button>
          <Button
            variant={activeSection === 'cabs' ? 'default' : 'outline'}
            onClick={() => setActiveSection('cabs')}
            className="whitespace-nowrap"
          >
            <Car className="mr-2 h-4 w-4" />
            Cabs
          </Button>
        </div>
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
