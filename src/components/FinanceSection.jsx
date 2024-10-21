import React from 'react';
import { CreditCard, Banknote, ShieldCheck, Phone, DollarSign, Package } from 'lucide-react';
import FinanceCategoryGrid from './FinanceCategoryGrid';

const categories = [
  { name: "Credit Card", icon: CreditCard },
  { name: "Insurance", icon: ShieldCheck },
  { name: "Loan", icon: Banknote },
  { name: "Telecom", icon: Phone },
  { name: "Finance", icon: DollarSign },
  { name: "Others", icon: Package },
];

const FinanceSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Finance</h2>
      <FinanceCategoryGrid categories={categories} />
    </div>
  );
};

export default FinanceSection;