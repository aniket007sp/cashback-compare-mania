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
    <aside className="w-full h-full bg-white shadow-md p-2">
      <h2 className="text-base sm:text-md font-semibold text-center bg-[crimson] text-white py-1.5 sm:py-2 mb-3 rounded">
        Brands
      </h2>
      <div className="grid grid-cols-1 gap-2 sm:gap-3">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? (
              <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-xl">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm font-medium text-center mb-1 text-gray-800">
                  {brand.name}
                </h3>

                <div className="space-y-1 flex-1 w-full">
                  {(brand.action_ranges || []).map((action, actionIndex) => (
                    <div
                      key={actionIndex}
                      className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md"
                    >
                      <span>{action.name}:</span>
                      <span className="font-semibold truncate ml-1">{formatRange(action)}</span>
                    </div>
                  ))}
                </div>

                {brand.gotolink && (
                  <>
                    <button
                      className="mt-2 text-xs bg-[crimson] text-white py-1 px-3 rounded-md hover:bg-gray-400 hover:text-black transition w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(brand.gotolink, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      Go to Store
                    </button>
                    <button
                      className="mt-1 text-xs text-blue-600 flex items-center gap-1 justify-center w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Info className="w-3 h-3" />
                      Terms & Conditions
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default BrandList;
