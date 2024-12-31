import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';


const BrandList = ({brands}) => {
  return (
    <h2 className="text-xl text-white font-semibold mb-4 sm:text-2xl bg-[crimson] w-full py-2 text-center">Brands <h2>
    <aside className="w-1/4 bg-white shadow-md p-4 h-screen overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Brands</h2>
      <ul className="space-y-4">
        {brands
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((brand, index) => (
            <li key={index} className="flex items-center space-x-3">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-8 h-8 rounded"
              />
              <a
                href={brand.gotolink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {brand.name}
              </a>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default BrandList;
