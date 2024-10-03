import React from 'react';
import { User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">PriceCompare</h1>
        <nav>
          <ul className="flex flex-wrap justify-center sm:space-x-4">
            <li><a href="#" className="hover:text-blue-200 px-2 py-1">Home</a></li>
            <li><a href="#" className="hover:text-blue-200 px-2 py-1">Categories</a></li>
            <li><a href="#" className="hover:text-blue-200 px-2 py-1">Deals</a></li>
            <li><a href="#" className="hover:text-blue-200 px-2 py-1"><User className="inline-block" /> Account</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;