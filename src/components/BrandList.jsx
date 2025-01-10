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
    <aside className="w-full h-full bg-white shadow-md p-2 sm:p-4">
      <h2 className="text-base sm:text-lg font-semibold text-center bg-[#8B5CF6] text-white py-2 sm:py-3 mb-3 sm:mb-4 rounded-md">
        Featured Brands
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`flex flex-col items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>

              <h3 className="text-xs sm:text-sm font-medium text-center mb-1 text-gray-800">
                {brand.name}
              </h3>

              {hoveredIndex === index && (
                <div className="space-y-1.5 flex-1 w-full">
                  {(brand.action_ranges || []).map((action, actionIndex) => (
                    <div
                      key={actionIndex}
                      className="text-[10px] sm:text-xs text-gray-700 bg-gray-50 px-2 py-1 rounded"
                    >
                      <span>{action.name}:</span>
                      <span className="font-semibold ml-1">{formatRange(action)}</span>
                    </div>
                  ))}
                </div>
              )}

              {hoveredIndex === index && brand.gotolink && (
                <>
                  <button
                    className="mt-2 text-[10px] sm:text-xs bg-[#8B5CF6] text-white py-1 px-2 rounded hover:bg-[#7C3AED] transition-colors w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(brand.gotolink, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Visit Store
                  </button>
                  <button
                    className="mt-1 text-[10px] sm:text-xs text-[#8B5CF6] flex items-center gap-1 justify-center w-full hover:text-[#7C3AED]"
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
          </div>
        ))}
      </div>
    </aside>
  );
};

export default BrandList;