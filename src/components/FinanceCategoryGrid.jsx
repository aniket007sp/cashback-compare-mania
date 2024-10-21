import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FinanceCategoryGrid = ({ categories }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto space-x-4 pb-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={`/finance/${category.name.toLowerCase().replace(' ', '-')}`}
          className="flex-shrink-0"
        >
          <Button
            className="flex flex-col items-center justify-center p-4 h-32 w-32"
            variant="outline"
          >
            <category.icon className="h-8 w-8 mb-2" />
            <span className="text-sm text-center">{category.name}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default FinanceCategoryGrid;