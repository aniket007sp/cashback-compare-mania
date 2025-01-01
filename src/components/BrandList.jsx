import React, { useState } from 'react';
import { Info } from 'lucide-react';

const BrandList = ({ brands }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
    <aside className="w-full bg-white shadow-md p-2 sm:p-4 max-h-[50vh] md:h-screen overflow-y-auto">
      <h2 className="text-lg sm:text-xl font-semibold text-center bg-[crimson] text-white py-2 mb-4 rounded">Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2 sm:gap-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? (
              // Hovered state - Show OfferCard style
              <div className="flex flex-col items-center p-2 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-center mb-2 sm:mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-xl">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm font-medium text-center mb-2 text-gray-800">
                  {brand.name}
                </h3>

                <div className="space-y-1 sm:space-y-2 flex-1 w-full">
                  {(brand.action_ranges || []).map((action, actionIndex) => (
                    <div
                      key={actionIndex}
                      className="text-xs text-gray-700 bg-gray-100 px-2 sm:px-3 py-1 rounded-md"
                    >
                      <span>{action.name}:</span>
                      <span className="font-semibold truncate ml-1">{formatRange(action)}</span>
                    </div>
                  ))}
                </div>

                {brand.gotolink && (
                  <>
                    <button
                      className="mt-2 text-xs bg-[crimson] text-white py-1 px-3 rounded-md hover:bg-gray-400 hover:text-black transition w-full sm:w-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(brand.gotolink, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      Go to Store
                    </button>
                    <button
                      className="mt-2 text-xs text-blue-600 flex items-center gap-1 justify-center w-full sm:w-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add terms & conditions functionality if needed
                      }}
                    >
                      <Info className="w-3 h-3" />
                      Terms & Conditions
                    </button>
                  </>
                )}
              </div>
            ) : (
              // Normal state - Simple brand card
              <div className="flex flex-col items-center p-2 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-12 h-12 sm:w-20 sm:h-16 object-contain rounded"
                />
                <h3 className="text-xs sm:text-sm font-medium mt-2 text-gray-800 text-center">
                  {brand.name}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default BrandList;