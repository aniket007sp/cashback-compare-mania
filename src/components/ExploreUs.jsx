import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logos } from "../data/latest/logos";
import babyKids from "../data/latest/babyKids.json";
import electronicsHouseholdAppliances from "../data/latest/electronicsHouseholdAppliances.json";
import fashion from "../data/latest/fashion.json";
import financeBanking from "../data/latest/financeBanking.json";
import gifting from "../data/latest/gifting.json";
import homeLiving from "../data/latest/homeLiving.json";
import onlineServices from "../data/latest/onlineServices.json";
import travelHospitality from "../data/latest/travelHospitality.json";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Utility function to format URLs
const formatUrl = (str) => str.toLowerCase().replace(/\s+/g, "-");

// Group offers by subcategory or direct brands
const groupOffers = (offers) => {
  const grouped = { brandsWithoutSubcategory: [] };
  offers.forEach((offer) => {
    const subcategory = offer["SUB-CATEGORY"];
    if (!subcategory) {
      grouped.brandsWithoutSubcategory.push(offer);
    } else {
      if (!grouped[subcategory]) {
        grouped[subcategory] = [];
      }
      grouped[subcategory].push(offer);
    }
  });
  return grouped;
};

const ExploreUs = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const categories = {
    "Baby & Kids": babyKids,
    "Electronics & Household Appliances": electronicsHouseholdAppliances,
    "Fashion": fashion,
    "Finance & Banking": financeBanking,
    "Gifting": gifting,
    "Home & Living": homeLiving,
    "Online Services": onlineServices,
    "Travel & Hospitality": travelHospitality,
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <header>
        <h2 className="text-md text-white font-semibold mb-4 sm:text-md md:text-lg bg-[crimson] w-full py-2 text-center">
          Explore Us
        </h2>
      </header>

      <div className="space-y-6">
        {Object.entries(categories).map(([category, offers]) => {
          const groupedOffers = groupOffers(offers);

          return (
            <article key={category}>
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-md text-black font-semibold sm:text-md md:text-lg bg-gray-200 bg-opacity-30 w-full py-2 text-center">
                  {category}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {/* Subcategories */}
                {Object.entries(groupedOffers).map(([subcategory, subcategoryOffers]) => {
                  if (subcategory === "brandsWithoutSubcategory") return null;

                  const imageUrl = logos[subcategory] ?? logos[`${category}: ${subcategory}`] ?? "/images/categories/home.svg";
                  return (
                    <Link
                      key={subcategory}
                      to={`/offers/${formatUrl(category)}/${formatUrl(subcategory)}`}
                      className="flex flex-col items-center hover:scale-105 transition-transform"
                    >
                      <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-xl">
                        <img
                          src={imageUrl}
                          alt={subcategory}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs md:text-sm text-center text-gray-700 mt-2">
                        {subcategory}
                      </span>
                    </Link>
                  );
                })}

                {/* Brands Without Subcategory */}
                {groupedOffers.brandsWithoutSubcategory.map((brand) => (
                  <button
                    key={brand.COMPANY}
                    className="flex flex-col items-center hover:scale-105 transition-transform"
                    onClick={() => setSelectedBrand(brand)}
                  >
                    <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-xl">
                      <img
                        src={brand["LOGO LINK"]}
                        alt={brand.COMPANY}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs md:text-sm text-center text-gray-700 mt-2">
                      {brand.COMPANY}
                    </span>
                  </button>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      {/* Brand Dialog */}
      <Dialog open={!!selectedBrand} onOpenChange={() => setSelectedBrand(null)}>
        <DialogContent className="max-w-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">
              {selectedBrand?.COMPANY}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-6 space-y-6">
            <div className="space-y-2 flex-1">
              <div className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-md">
                <span className="text-sm text-gray-800">Reward: </span>
                <span className="text-sm font-semibold text-gray-800">{selectedBrand?.Reward}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-medium text-gray-800 mb-1 sm:mb-2">Terms & Conditions</h4>
              <div
                className="h-48 overflow-y-auto bg-gray-100 p-3 rounded-md shadow-inner"
                style={{ maxHeight: "12rem" }}
              >
                <p
                  className="text-[10px] sm:text-xs md:text-sm text-gray-700 whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: selectedBrand?.["T&C"] }}
                ></p>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setSelectedBrand(null)}
                className="w-1/2 py-2 text-black hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedBrand(null);
                  window.open(selectedBrand?.LINK, "_blank", "noopener,noreferrer");
                }}
                className="bg-[crimson] text-white w-1/2 py-2 hover:bg-gray-400 hover:text-black"
              >
                Visit Store
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExploreUs;
