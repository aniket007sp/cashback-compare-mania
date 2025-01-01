import React from 'react';

const BrandList = ({ brands }) => {
  return (
    <aside className="w-1/4 bg-white shadow-md p-4 h-screen overflow-y-auto">
      <h2 className="text-xl font-semibold text-center bg-crimson text-white py-2">Brands</h2>
      <ul className="space-y-4">
        {brands.map((brand, index) => (
            <li key={index} className="flex items-center space-x-3">
              {/* Brand Logo */}
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-15 h-12 rounded"
              />
              {/* Brand Name with Link */}
              <a
                href={brand.gotolink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-xs"
              >
                {brand.categories.subcategory}
              </a>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default BrandList;
