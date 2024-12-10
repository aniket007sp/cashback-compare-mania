import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Info, ChevronLeft } from "lucide-react";
import netlifyOffers from '../data/netlify_offers.json';
import { termsConditions } from '../data/termsConditions';

const toSentenceCase = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const OfferCategoryPage = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [selectedOffer, setSelectedOffer] = useState(null);

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
    <section className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={handleBack} className="mb-4 bg-gray-300">
        <ChevronLeft className="h-4 w-4 mr-2" />
        Back
      </Button>
      <h2 className="text-xl text-white font-semibold mb-6 sm:text-2xl bg-[crimson] w-full py-2 text-center">
        {toSentenceCase(decodedSubcategory)}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {subcategoryOffers.map((offer) => (
          <div
            key={offer.name}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedOffer(offer)}
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

            <h3 className="text-sm font-medium text-center mb-2">{offer.name}</h3>

            <p className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md flex justify-center items-center gap-1">
              {offer.action_ranges.map((action, index) => (
                <span key={index}>
                  {action.name}: {action.max_fixed_rate ? `₹${action.max_fixed_rate}` : `${action.max_percentage_rate}%`}
                </span>
              ))}
            </p>

            <button
              className="mt-2 text-xs bg-[crimson] text-white py-1 px-3 rounded-md hover:bg-gray-400 hover:text-black transition"
              onClick={(e) => {
                e.stopPropagation();
                window.open(offer.gotolink, "_blank", "noopener,noreferrer");
              }}
            >
              Go to Store
            </button>

            <button
              className="mt-2 text-xs text-blue-600 flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedOffer(offer);
              }}
            >
              <Info className="w-3 h-3" />
              Terms & Conditions
            </button>
          </div>
        ))}
      </div>

      {/* Dialog for Offer Details */}
      <Dialog open={!!selectedOffer} onOpenChange={() => setSelectedOffer(null)}>
        <DialogContent className="max-w-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">
              {selectedOffer?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-2">
              <h4 className="text-sm text-gray-800">Cash Reward:</h4>
              <p className="text-sm font-semibold text-gray-800">
                {selectedOffer?.action_ranges.map(
                  (action) => action.max_fixed_rate && `₹${action.max_fixed_rate}`
                )}
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <h4 className="text-sm text-gray-800">Payout in:</h4>
              <p className="text-sm font-semibold text-gray-800">
                {selectedOffer?.avg_money_transfer_time} days
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-2">Terms & Conditions</h4>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {selectedOffer
                  ? termsConditions[selectedOffer.name] || "No specific terms available."
                  : ""}
              </p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setSelectedOffer(null)}
                className="w-1/2 py-2 text-black hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedOffer(null);
                  window.open(selectedOffer?.gotolink, "_blank", "noopener,noreferrer");
                }}
                className="bg-[crimson] text-white w-1/2 py-2 hover:bg-gray-400 hover:text-black"
              >
                Go to Store
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default OfferCategoryPage;
