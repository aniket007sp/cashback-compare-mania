import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const OfferDetails = ({ offer, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
        <Button 
          variant="ghost" 
          className="absolute top-2 right-2"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <img src={offer.image} alt={offer.name} className="w-32 h-16 object-contain mb-4" />
        <h2 className="text-2xl font-bold mb-4">{offer.name}</h2>
        <p className="text-lg mb-4">{offer.description}</p>
        <p className="text-xl font-semibold mb-4">{offer.reward}</p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Terms and Conditions:</h3>
          <ul className="list-disc pl-5">
            <li>Valid for all users</li>
            <li>Offer valid until [End Date]</li>
            <li>Cannot be combined with other offers</li>
          </ul>
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          APPLY NOW
        </Button>
      </div>
    </div>
  );
};

export default OfferDetails;