import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CategoryList = ({ categories = [] }) => {
  if (categories.length === 0) {
    return null; // or return a loading indicator
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link key={category} to={`/category/${encodeURIComponent(category)}`}>
            <Button
              variant="outline"
              className="flex flex-col items-center justify-center p-4 h-auto text-center w-full"
            >
              <span className="text-sm">{category}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;