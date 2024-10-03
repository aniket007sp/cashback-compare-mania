import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center max-w-3xl mx-auto bg-white rounded-full overflow-hidden shadow-lg">
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-grow px-6 py-3 text-gray-700 focus:outline-none"
        />
        <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors">
          <Search className="inline-block" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;