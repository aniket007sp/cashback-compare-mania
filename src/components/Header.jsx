import React, { useState } from 'react';
import { User } from 'lucide-react';
import LoginModal from './LoginModal';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">PriceCompare</h1>
        <nav>
          <ul className="flex flex-wrap justify-center sm:space-x-4">
            <li><a href="#" className="hover:text-blue-200 px-2 py-1">Home</a></li>
            <li><a href="#" className="hover:text-blue-200 px-2 py-1">Categories</a></li>
            <li><a href="#" className="hover:text-blue-200 px-2 py-1">Deals</a></li>
            <li>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="hover:text-blue-200 px-2 py-1 flex items-center"
              >
                <User className="inline-block mr-1" /> Account
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </header>
  );
};

export default Header;