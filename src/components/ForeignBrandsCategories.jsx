import React from 'react';
import { Gift, Shirt, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Gifts", icon: <Gift className="h-6 w-6" /> },
  { name: "Fashion", icon: <Shirt className="h-6 w-6" /> },
  { name: "Health & Beauty", icon: <Heart className="h-6 w-6" /> },
  // Add more categories as needed
];

const ForeignBrandsCategories = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Explore Foreign Brands & Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="outline"
            className="flex flex-col items-center justify-center p-4 h-auto"
          >
            {category.icon}
            <span className="mt-2">{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ForeignBrandsCategories;