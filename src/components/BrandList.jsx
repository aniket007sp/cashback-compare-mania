import React from 'react';
import { Info } from 'lucide-react';

const BrandList = ({ brands }) => {
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
    <aside className="w-full h-full bg-white p-2 animate-fade-in">
      <h2 className="text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-center bg-[crimson] text-white py-2 mb-3 rounded-md shadow-sm animate-scale-in">
        Featured Brands
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="relative group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col h-full bg-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg hover:ring-2 hover:ring-[crimson]/20 p-2 space-y-1.5">
              {/* Logo Container */}
              <div className="flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain p-1 rounded-lg shadow-sm"
                />
              </div>

              {/* Brand Name */}
              <h3 className="text-xs font-medium text-center text-gray-800 line-clamp-1">
                {brand.name}
              </h3>

              {/* Action Ranges - Visible on hover/tap */}
              <div className="space-y-1 flex-1 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {(brand.action_ranges || []).map((action, actionIndex) => (
                  <div
                    key={actionIndex}
                    className="text-[10px] text-gray-700 bg-gray-50 px-2 py-1 rounded"
                  >
                    <span className="font-medium">{action.name}:</span>
                    <span className="ml-1">{formatRange(action)}</span>
                  </div>
                ))}
              </div>

              {/* Buttons - Visible on hover/tap */}
              {brand.gotolink && (
                <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    aria-label="Visit Store"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(brand.gotolink, '_blank', 'noopener,noreferrer');
                    }}
                    className="w-full text-[10px] bg-[crimson] hover:bg-[#7E69AB] text-white py-1 px-2 rounded-md transition-colors duration-200"
                  >
                    Visit Store
                  </button>
                  <button
                    aria-label="Terms & Conditions"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full text-[10px] text-[crimson] hover:text-[#7E69AB] flex items-center justify-center gap-1 transition-colors duration-200"
                  >
                    <Info className="w-3 h-3" />
                    Terms & Conditions
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default BrandList;
