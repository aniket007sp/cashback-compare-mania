import React, { useState } from 'react';
import { User, Wallet, Plane, Hotel, Train, Car } from 'lucide-react';
import LoginModal from './LoginModal';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">PriceCompare</h1>
        <nav className="flex flex-col sm:flex-row items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0 sm:mr-8">
            <a href="#" className="flex items-center hover:text-blue-200">
              <Plane className="mr-1" size={20} />
              <span>Flights</span>
            </a>
            <a href="#" className="flex items-center hover:text-blue-200">
              <Hotel className="mr-1" size={20} />
              <span>Hotels</span>
            </a>
            <a href="#" className="flex items-center hover:text-blue-200">
              <Train className="mr-1" size={20} />
              <span>Trains</span>
            </a>
            <a href="#" className="flex items-center hover:text-blue-200">
              <Car className="mr-1" size={20} />
              <span>Cabs</span>
            </a>
          </div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-200">Home</a></li>
            <li><a href="#" className="hover:text-blue-200">Categories</a></li>
            <li><a href="#" className="hover:text-blue-200">Deals</a></li>
            <li>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="hover:text-blue-200 flex items-center"
              >
                {isLoggedIn ? (
                  <>
                    <User className="inline-block mr-1" />
                    Account
                    <Wallet className="inline-block ml-2" />
                  </>
                ) : (
                  <>
                    <User className="inline-block mr-1" />
                    Login/Signup
                  </>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </header>
  );
};

export default Header;