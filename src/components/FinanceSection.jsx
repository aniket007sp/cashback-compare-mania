import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Banknote, ShieldCheck, Phone, DollarSign, Package } from 'lucide-react';
import { Button } from "@/components/ui/button";
import FinanceCategoryGrid from './FinanceCategoryGrid';
import FinanceSubcategory from './FinanceSubcategory';

const categories = [
  { name: "Credit Card", icon: CreditCard },
  { name: "Insurance", icon: ShieldCheck },
  { name: "Loan", icon: Banknote },
  { name: "Telecom", icon: Phone },
  { name: "Finance", icon: DollarSign },
  { name: "Others", icon: Package },
];

const FinanceSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Finance</h2>
      {selectedCategory ? (
        <>
          <Button onClick={handleBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <FinanceSubcategory category={selectedCategory} />
        </>
      ) : (
        <FinanceCategoryGrid categories={categories} onCategoryClick={handleCategoryClick} />
      )}
    </div>
  );
};

export default FinanceSection;