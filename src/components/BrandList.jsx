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
    <aside className="w-full h-full bg-white p-2">
      <h2 className="text-base sm:text-sm font-semibold text-center bg-[crimson] text-white py-2 mb-3 rounded-md shadow-sm">
        Featured Brands
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`flex flex-col h-full bg-white rounded-lg transition-all duration-300 
                ${hoveredIndex === index ? 'shadow-lg ring-2 ring-[crimson]/20' : 'shadow-sm'}
                p-2 space-y-1.5`}
            >
              {/* Logo Container */}
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 sm:w-15 sm:h-15 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain p-1"
                  />
                </div>
              </div>

              {/* Brand Name */}
              <h3 className="text-xs font-medium text-center text-gray-800 line-clamp-1">
                {brand.name}
              </h3>

              {/* Action Ranges - Visible on hover/tap */}
              {hoveredIndex === index && (
                <div className="space-y-1 flex-1 w-full">
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
              )}

              {/* Buttons - Visible on hover/tap */}
              {hoveredIndex === index && brand.gotolink && (
                <div className="space-y-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(brand.gotolink, '_blank', 'noopener,noreferrer');
                    }}
                    className="w-full text-[10px] bg-[crimson] hover:bg-[#7E69AB] text-white py-1 px-2 rounded-md transition-colors duration-200"
                  >
                    Visit Store
                  </button>
                  <button
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
