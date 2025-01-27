import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import netlifyOffers from '../data/netlify_offers.json';
import { termsConditions } from '../data/termsConditions';
import CategoryHeader from './CategoryHeader';
import OfferCard from './OfferCard';
import OfferDialog from './OfferDialog';
import babyKids from '../data/latest/babyKids.json';
import electronicsHouseholdAppliances from '../data/latest/electronicsHouseholdAppliances.json';
import fashion from '../data/latest/fashion.json';
import financeBanking from '../data/latest/financeBanking.json';
import homeLiving from '../data/latest/homeLiving.json';
import onlineServices from '../data/latest/onlineServices.json';
import travelHospitality from '../data/latest/travelHospitality.json';
import healthFoodFitness from "../data/latest/healthFoodFitness.json";
import personalCareBeautyWellness from "../data/latest/personalCareBeautyWellness.json";

const toSentenceCase = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const getCategoryData = (category) => {
  switch (category?.toLowerCase()) {
    case 'baby & kids':
      return babyKids;
    case 'electronics & household appliances':
      return electronicsHouseholdAppliances;
    case 'fashion':
      return fashion;
    case 'finance & banking':
      return financeBanking;
    case 'home & living':
      return homeLiving;
    case 'online services':
      return onlineServices;
    case 'travel & hospitality':
      return travelHospitality;
    case 'health, food & fitness':
      return healthFoodFitness;
    case 'personal care, beauty & wellness':
      return personalCareBeautyWellness;
    default:
      return [];
  }
};

const formatLatestOffer = (offer) => ({
  name: offer.COMPANY,
  logo: offer["LOGO LINK"],
  avg_money_transfer_time: offer["PAYMENT IN"],
  categories: {
    category: offer["SUB-CATEGORY"] || "General",
    subcategory: offer["SUB-CATEGORY"]
  },
  gotolink: offer.LINK,
  termsConditions: offer["T&C"],
  action_ranges: [{
    name: "Reward",
    reward: offer.Reward
  }]
});

const OfferCategoryPage = () => {
  const { category, subcategory } = useParams();
  const [selectedStore, setSelectedStore] = useState(null);

  const decodedCategory = category?.replace(/-/g, ' ');
  const decodedSubcategory = subcategory?.replace(/-/g, ' ');

  // First check if it's a Netlify offer
  const categoryOffers = netlifyOffers.filter(
    (offer) => offer.categories.category.toLowerCase() === decodedCategory?.toLowerCase()
  );

  const subcategoryOffers = categoryOffers.filter(
    (offer) => offer.categories.subcategory?.toLowerCase() === decodedSubcategory?.toLowerCase()
  );

  // If no Netlify offers found, check latest category data
  const latestCategoryData = getCategoryData(decodedCategory);
  const latestSubcategoryOffers = latestCategoryData
    .filter(offer => {
      if (!decodedSubcategory) return !offer["SUB-CATEGORY"];
      return offer["SUB-CATEGORY"]?.toLowerCase() === decodedSubcategory?.toLowerCase();
    })
    .map(formatLatestOffer);

  const displayOffers = subcategoryOffers.length > 0 ? subcategoryOffers : latestSubcategoryOffers;

  return (
    <div className="min-h-screen bg-[#ea384c]/10">
      <div className="container mx-auto px-4 py-8">
        <CategoryHeader title={toSentenceCase(decodedSubcategory || decodedCategory)} />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayOffers.map((offer) => (
            <OfferCard
              key={offer.name}
              offer={offer}
              onSelectStore={setSelectedStore}
            />
          ))}
        </div>

        <OfferDialog
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          termsConditions={termsConditions}
        />
      </div>
    </div>
  );
};

export default OfferCategoryPage;
