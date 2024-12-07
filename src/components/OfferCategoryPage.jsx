import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import netlifyOffers from '../data/netlify_offers.json';
import {termsConditions} from '../data/termsConditions';

const toSentenceCase = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const getTermsForOffer = (offerName) => {
  const termEntry = termsConditions.find((term) => term.hasOwnProperty(offerName));
  return termEntry ? termEntry[offerName] : 'No specific terms available.';
};

const cleanData = (text) => {
  if (!text) return "";
  return text
    .replace(/\\u[\dA-F]{4}/gi, '') // Remove unicode characters like \u20b9
    .replace(/[\r\n]+/g, ' ')        // Replace newlines with spaces
    .replace(/\t+/g, ' ')            // Replace tabs with spaces
    .replace(/[^a-zA-Z0-9\s.,:;%&()/-]/g, '') // Remove other special characters
    .trim();                         // Trim leading/trailing whitespace
};

const formatRange = (action) => {
  if (!action) return '';
  if (action.max_percentage_rate && parseFloat(action.max_percentage_rate) > 0) {
    if (action.min_percentage_rate === action.max_percentage_rate) {
      return `${action.max_percentage_rate}%`;
    }
    return `${action.min_percentage_rate}% - ${action.max_percentage_rate}% off`;
  }
  if (action.max_fixed_rate) {
    return `₹${action.max_fixed_rate}`;
  }
  return '';
};

const OfferCategoryPage = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState(null);
  const [currentOfferName, setCurrentOfferName] = useState(null);

  const SubCategory = subcategory?.replace(/-/g, ' ');
  const decodedCategory = category?.replace(/-/g, ' ');
  const decodedSubcategory = subcategory?.replace(/-/g, ' ');

  const categoryOffers = netlifyOffers.filter(
    (offer) => offer.categories.category.toLowerCase() === decodedCategory?.toLowerCase()
  );

  const subcategoryOffers = categoryOffers.filter(
    (offer) => offer.categories.subcategory?.toLowerCase() === decodedSubcategory?.toLowerCase()
  );

  const handleBack = () => navigate('/');

  const openModal = (link, name) => {
    setCurrentLink(link);
    setCurrentOfferName(name);
    setModalOpen(true);
  };

  const navigateToStore = () => {
    if (currentLink) {
      window.open(currentLink, '_blank');
      setModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={handleBack} className="mb-4 bg-gray-300">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl text-[crimson] font-bold text-center mb-6">
          {toSentenceCase(SubCategory)}
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {subcategoryOffers.map((offer) => (
            <Card
              key={offer.name}
              className="w-full sm:w-[48%] lg:w-[23%] bg-white overflow-hidden shadow-md rounded-md flex flex-col justify-between"
            >
              <CardContent className="p-4 flex flex-col h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
                    <img
                      src={offer.logo}
                      alt={offer.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="font-bold text-base text-center text-gray-800 mb-3">
                  {offer.name}
                </h3>

                <div className="space-y-2 flex-1">
                  {offer.action_ranges.map((action, index) => (
                    <div key={index} className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-md">
                      <span className="font-medium">{action.name}:</span>
                      <span className="font-light ml-2">{formatRange(action)}</span>
                    </div>

                  ))}
                </div>

                {offer.avg_money_transfer_time && (
                  <div className="mt-3 text-sm text-gray-700 text-center">
                    Payout in <span className="font-semibold">{offer.avg_money_transfer_time} days</span>
                  </div>
                )}

                <div className="mt-3 text-sm text-gray-700 text-center">
                     Rewards will be validated within 3 days
                  </div>

                {offer.gotolink && (
                  <Button
                    className="bg-[crimson] text-white mt-4 w-full py-2 text-sm rounded-md hover:bg-gray-400 hover:text-black"
                    onClick={() => openModal(offer.gotolink, offer.name)}
                  >
                    Go to Store
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-96 text-center">
            <h2 className="text-xl font-semibold mb-4">Terms and Conditions</h2>
            <p className="text-sm text-gray-600 mb-6">
              {cleanData(termsConditions[currentOfferName])}
              <br></br>
              "Payout is calculated on order amount excluding taxes"
            </p>
            <div className="flex justify-between">
              <Button
                variant="ghost"
                onClick={() => setModalOpen(false)}
                className="w-1/2 mr-2 hover:bg-gray-400"
              >
                Cancel
              </Button>
              <Button
                className="bg-[crimson] text-white w-1/2 hover:bg-gray-400 hover:text-black"
                onClick={navigateToStore}
              >
                Go to Store
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferCategoryPage;
