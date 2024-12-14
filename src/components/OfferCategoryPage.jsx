import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import netlifyOffers from '../data/netlify_offers.json';
import { termsConditions } from '../data/termsConditions';
import CategoryHeader from './CategoryHeader';
import OfferCard from './OfferCard';
import OfferDialog from './OfferDialog';

const toSentenceCase = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const OfferCategoryPage = () => {
  const { category, subcategory } = useParams();
  const [selectedStore, setSelectedStore] = useState(null);

  const decodedCategory = category?.replace(/-/g, ' ');
  const decodedSubcategory = subcategory?.replace(/-/g, ' ');

  const categoryOffers = netlifyOffers.filter(
    (offer) => offer.categories.category.toLowerCase() === decodedCategory?.toLowerCase()
  );

  const subcategoryOffers = categoryOffers.filter(
    (offer) => offer.categories.subcategory?.toLowerCase() === decodedSubcategory?.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <CategoryHeader title={toSentenceCase(decodedSubcategory)} />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {subcategoryOffers.map((offer) => (
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