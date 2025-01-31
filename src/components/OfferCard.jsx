import React from 'react';
import { Info } from 'lucide-react';

const OfferCard = ({ offer, onSelectStore }) => {
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

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
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
        {(offer.action_ranges || []).map((action, index) => (
          <div
            key={index}
            className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-md"
          >
            <span>CashBack:</span>
            <span className="font-semibold truncate ml-1">{action.reward}</span>
          </div>
        ))}
      </div>

      {offer.gotolink && (
        <>
          <button
            className="mt-2 text-xs bg-[crimson] text-white py-1 px-3 rounded-md hover:bg-gray-400 hover:text-black transition"
            onClick={(e) => {
              e.stopPropagation();
              window.open(offer.gotolink, '_blank', 'noopener,noreferrer');
            }}
          >
            Go to Store
          </button>
          <button
            className="mt-2 text-xs text-blue-600 flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              onSelectStore(offer);
            }}
          >
            <Info className="w-3 h-3" />
            Terms & Conditions
          </button>
        </>
      )}
    </div>
  );
};

export default OfferCard;
