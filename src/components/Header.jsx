import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">PriceCompare</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-200">Home</a></li>
            <li><a href="#" className="hover:text-blue-200">Categories</a></li>
            <li><a href="#" className="hover:text-blue-200">Deals</a></li>
            <li><a href="#" className="hover:text-blue-200"><ShoppingCart className="inline-block" /> Cart</a></li>
            <li><a href="#" className="hover:text-blue-200"><User className="inline-block" /> Account</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;