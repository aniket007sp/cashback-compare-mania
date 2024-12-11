import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import netlifyOffers from '../data/netlify_offers.json';
import { termsConditions } from '../data/termsConditions';

const toSentenceCase = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const getTermsForOffer = (offerName) => {
  // Since termsConditions is an object, directly access the property
  return termsConditions[offerName] || 'No specific terms available.';
};

const cleanData = (text) => {
  if (!text) return "";
  return text
    .replace(/\\u[\dA-F]{4}/gi, '')
    .replace(/[\r\n]+/g, ' ')
    .replace(/\t+/g, ' ')
    .replace(/[^a-zA-Z0-9\s.,:;%&()/-]/g, '')
    .trim();
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
  const [selectedStore, setSelectedStore] = useState(null);

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

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={handleBack}
          className="mb-4 text-black bg-gray-300 py-1 px-3 rounded-md hover:bg-gray-400 hover:text-black transition flex items-center"
        >
          <ChevronLeft className="h-4 w-4 mr-2" /> Back
        </button>

        <h1 className="text-2xl text-[crimson] font-bold text-center mb-6">
          {toSentenceCase(SubCategory)}
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {subcategoryOffers.map((offer) => (
            <div
              key={offer.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-xl">
                  <img
                    src={offer.logo}
                    alt={offer.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h3 className="text-sm font-medium text-center mb-2 text-gray-800">
                {offer.name}
              </h3>

              <div className="space-y-2 flex-1">
                {offer.action_ranges.map((action, index) => (
                  <div
                    key={index}
                    className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-md"
                  >
                    <span>{action.name}:</span>
                    <span className="font-semibold truncate ml-1">{formatRange(action)}</span>
                  </div>
                ))}
              </div>

              {offer.gotolink && (
                <>
                  <button
                    className="mt-2 text-xs bg-[crimson] text-white py-1 px-3 rounded-md hover:bg-gray-400 hover:text-black transition"
                    onClick={() => window.open(offer.gotolink, '_blank', 'noopener,noreferrer')}
                  >
                    Go to Store
                  </button>
                  <button
                    className="mt-2 text-xs text-blue-600 flex items-center gap-1"
                    onClick={() => setSelectedStore(offer)}
                  >
                    <Info className="w-3 h-3" />
                    Terms & Conditions
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedStore} onOpenChange={() => setSelectedStore(null)}>
        <DialogContent className="max-w-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">
              {selectedStore?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-2">
              <p>
                <span className="text-sm text-gray-800">{selectedStore?.action_ranges[0]?.name}: </span>  
                <span className="text-sm font-semibold text-gray-800">{formatRange(selectedStore?.action_ranges[0])}</span>
              </p>
            </div>

            <div className="flex items-center gap-x-2">
              <h4 className="text-sm text-gray-800">Payout in</h4>
              <p className="text-sm font-semibold text-gray-800">
                {selectedStore?.avg_money_transfer_time} days
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-2">Terms & Conditions</h4>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {cleanData(termsConditions[selectedStore?.name])}
              </p>
              <br></br>
              Payout is calculated on order amount excluding taxes
              <br></br>
              Rewards will be validated within 3 days
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setSelectedStore(null)}
                className="w-1/2 py-2 text-black hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedStore(null);
                  window.open(selectedStore?.gotolink, "_blank", "noopener,noreferrer");
                }}
                className="bg-[crimson] text-white w-1/2 py-2 hover:bg-gray-400 hover:text-black"
              >
                Go to Store
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OfferCategoryPage;
