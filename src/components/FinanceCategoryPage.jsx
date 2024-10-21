import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import FinanceSubcategory from './FinanceSubcategory';

const FinanceCategoryPage = () => {
  const { category } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/finance" className="mb-4 inline-block">
        <Button variant="outline" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </Link>
      <h2 className="text-3xl font-bold mb-6">{category.replace('-', ' ')}</h2>
      <FinanceSubcategory category={{ name: category.replace('-', ' ') }} />
    </div>
  );
};

export default FinanceCategoryPage;