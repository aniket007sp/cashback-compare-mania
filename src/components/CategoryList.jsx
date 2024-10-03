import React from 'react';
import { Button } from "@/components/ui/button";

const categories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Beauty",
  "Sports & Outdoors",
  "Toys & Games",
  "Automotive",
];

const CategoryList = ({ onSelectCategory }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            onClick={() => onSelectCategory(category)}
            className="text-sm"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;