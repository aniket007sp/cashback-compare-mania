import React, { useState } from "react";
import { Info } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import OfferDialog from "./OfferDialog";

const BrandList = ({ brands }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const formatRange = (reward) => {
    if (!reward) return "";
    if (reward.includes("%")) {
      return `${reward}`;
    }
    if (reward.includes("Rs")) {
      return `${reward}`;
    }
    return "";
  };

  return (
    <aside className="w-full h-full bg-[#A594C7]/5 p-2 animate-fade-in">
      <h2 className="text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-center bg-[crimson] text-white py-2 mb-3 rounded-md shadow-sm animate-scale-in">
        Our Brands
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="relative group"
            style={{
              animation: `fade-in 0.5s ease-out ${index * 0.1}s`,
              opacity: 0,
              animationFillMode: "forwards",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`flex flex-col h-full bg-white rounded-lg transition-all duration-300 
                ${
                  hoveredIndex === index
                    ? "shadow-lg ring-2 ring-[crimson]/20"
                    : "shadow-sm"
                }
                p-2 space-y-1.5`}
            >
              {/* Logo Container */}
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 sm:w-15 sm:h-15 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                  <img
                    src={brand["LOGO LINK"]}
                    alt={brand.COMPANY}
                    className="w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain p-1"
                  />
                </div>
              </div>

              {/* Brand Name */}
              <h3 className="text-xs font-medium text-center text-gray-800 line-clamp-1">
                {brand.COMPANY}
              </h3>

              {/* Reward - Visible on hover/tap */}
              {hoveredIndex === index && (
                <div className="space-y-1 flex-1 w-full">
                  <div className="text-[10px] text-gray-700 bg-gray-50 px-2 py-1 rounded">
                    <span className="font-medium">Reward:</span>
                    <span className="ml-1">{formatRange(brand.Reward)}</span>
                  </div>
                </div>
              )}

              {/* Buttons - Visible on hover/tap */}
              {hoveredIndex === index && brand.LINK && (
                <div className="space-y-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(brand.LINK, "_blank", "noopener,noreferrer");
                    }}
                    className="w-full text-[10px] bg-[crimson] hover:bg-[#7E69AB] text-white py-1 px-2 rounded-md transition-colors duration-200"
                  >
                    Visit Store
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBrand({
                        name: brand.COMPANY,
                        avg_money_transfer_time: brand["PAYMENT IN"],
                        termsConditions: brand["T&C"],
                        action_ranges: [
                          {
                            name: "Cash Reward",
                            reward: brand.Reward,
                          },
                        ],
                        gotolink: brand.LINK,
                      });
                    }}
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

      {/* Terms & Conditions Dialog */}
      <OfferDialog
        selectedStore={selectedBrand}
        setSelectedStore={setSelectedBrand}
      />
    </aside>
  );
};

export default BrandList;
