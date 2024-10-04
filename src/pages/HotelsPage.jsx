import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import HotelSearch from '../components/HotelSearch';

const HotelsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-block mb-4">
        <Button variant="outline" className="flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-6">Hotel Booking</h1>
      <HotelSearch />
    </div>
  );
};

export default HotelsPage;