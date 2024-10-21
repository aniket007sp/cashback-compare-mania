import React from 'react';
import { Button } from "@/components/ui/button";

const FinanceCategoryGrid = ({ categories, onCategoryClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Button
          key={category.name}
          onClick={() => onCategoryClick(category)}
          className="flex flex-col items-center justify-center p-4 h-32"
          variant="outline"
        >
          <category.icon className="h-8 w-8 mb-2" />
          <span>{category.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default FinanceCategoryGrid;