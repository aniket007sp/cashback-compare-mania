import React from 'react';
import { Button } from "@/components/ui/button";

const BrandList = ({ category, onSelectBrand, merchants }) => {
  const brands = [...new Set(merchants.map(merchant => merchant.brand))];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Brands</h2>
      <div className="flex flex-wrap gap-2">
        {brands.map((brand) => (
          <Button
            key={brand}
            variant="outline"
            onClick={() => onSelectBrand(brand)}
          >
            {brand}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BrandList;