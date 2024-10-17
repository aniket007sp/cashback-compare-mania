import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Electronics", image: "/images/categories/electronics.svg" },
  { name: "Clothing & Accessories", image: "/images/categories/clothing.svg" },
  { name: "Home & Kitchen", image: "/images/categories/home.svg" },
  { name: "Books", image: "/images/categories/books.svg" },
  { name: "Beauty & Personal Care", image: "/images/categories/beauty.svg" },
  { name: "Sports & Outdoors", image: "/images/categories/sports.svg" },
  { name: "Toys & Games", image: "/images/categories/toys.svg" },
  { name: "Automotive", image: "/images/categories/automotive.svg" },
  { name: "Health & Wellness", image: "/images/categories/health.svg" },
  { name: "Grocery & Gourmet", image: "/images/categories/grocery.svg" },
  { name: "Pet Supplies", image: "/images/categories/pet.svg" },
  { name: "Office Products", image: "/images/categories/office.svg" },
  { name: "Tools & Home Improvement", image: "/images/categories/tools.svg" },
  { name: "Baby", image: "/images/categories/baby.svg" },
  { name: "Jewelry", image: "/images/categories/jewelry.svg" },
  { name: "Garden & Outdoor", image: "/images/categories/garden.svg" },
  { name: "Furniture", image: "/images/categories/furniture.svg" },
  { name: "Arts, Crafts & Sewing", image: "/images/categories/arts.svg" },
  { name: "Musical Instruments", image: "/images/categories/music.svg" },
  { name: "Industrial & Scientific", image: "/images/categories/industrial.svg" },
];

const CategoryList = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link key={category.name} to={`/category/${encodeURIComponent(category.name)}`}>
            <Button
              variant="outline"
              className="flex flex-col items-center justify-center p-4 h-auto text-center w-full"
            >
              <img src={category.image} alt={category.name} className="w-12 h-12 mb-2" />
              <span className="text-sm">{category.name}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;