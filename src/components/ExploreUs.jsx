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
import CategoryCarousel from "./CategoryCarousel";

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

  const renderBrandCard = (brand) => {
    const brandData = {
      name: brand.COMPANY,
      image: brand["LOGO LINK"],
      description: brand["T&C"],
      reward: brand.Reward,
      link: brand.LINK,
    };
    return (
      <CategoryCarousel
        title={`Brand: ${brand.COMPANY}`}
        items={[brandData]}
      />
    );
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

                  const imageUrl = logos[subcategory] || logos[category] || "/images/categories/home.svg";
                  return (
                    <Link
                      key={subcategory}
                      to={`/offers/${formatUrl(category)}/${formatUrl(subcategory)}`}
                      className="flex flex-col items-center hover:scale-105 transition-transform"
                    >
                      <div className="w-16 h-16 sm:w-24 sm:h-24 mb-2 overflow-hidden rounded-full bg-gray-100">
                        <img
                          src={imageUrl}
                          alt={subcategory}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <span className="text-xs md:text-sm text-center text-gray-700">
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
                    <div className="w-16 h-16 sm:w-24 sm:h-24 mb-2 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src={brand["LOGO LINK"]}
                        alt={brand.COMPANY}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <span className="text-xs md:text-sm text-center text-gray-700">
                      {brand.COMPANY}
                    </span>
                  </button>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      {/* Render selected brand card */}
      {selectedBrand && renderBrandCard(selectedBrand)}
    </section>
  );
};

export default ExploreUs;
