import React, { useState } from 'react';
import { User, Wallet, Plane, Hotel, Train, Car, Bus, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { Button } from "@/components/ui/button";

const Header = ({ onDealsClick }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">PriceCompare</h1>
          <button onClick={toggleMenu} className="md:hidden">
            <Menu size={24} />
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-4 flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-blue-600 md:bg-transparent z-50`}>
            <Link to="/" className="block py-2 md:py-0 hover:text-blue-200">Home</Link>
            <Link to="/categories" className="block py-2 md:py-0 hover:text-blue-200">Categories</Link>
            <button onClick={onDealsClick} className="block py-2 md:py-0 hover:text-blue-200 text-left w-full md:w-auto">Deals</button>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="block py-2 md:py-0 hover:text-blue-200 flex items-center"
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
          </nav>
        </div>
        <div className="flex justify-center space-x-2 sm:space-x-4 mt-4 overflow-x-auto pb-2">
          <Link to="/flights">
            <Button variant="outline" className="flex flex-col items-center bg-white text-blue-600 hover:bg-blue-100 p-2">
              <Plane className="mb-1" size={20} />
              <span className="text-xs">Flights</span>
            </Button>
          </Link>
          <Link to="/hotels">
            <Button variant="outline" className="flex flex-col items-center bg-white text-blue-600 hover:bg-blue-100 p-2">
              <Hotel className="mb-1" size={20} />
              <span className="text-xs">Hotels</span>
            </Button>
          </Link>
          <Link to="/trains">
            <Button variant="outline" className="flex flex-col items-center bg-white text-blue-600 hover:bg-blue-100 p-2">
              <Train className="mb-1" size={20} />
              <span className="text-xs">Trains</span>
            </Button>
          </Link>
          <Link to="/cabs">
            <Button variant="outline" className="flex flex-col items-center bg-white text-blue-600 hover:bg-blue-100 p-2">
              <Car className="mb-1" size={20} />
              <span className="text-xs">Cabs</span>
            </Button>
          </Link>
          <Link to="/buses">
            <Button variant="outline" className="flex flex-col items-center bg-white text-blue-600 hover:bg-blue-100 p-2">
              <Bus className="mb-1" size={20} />
              <span className="text-xs">Buses</span>
            </Button>
          </Link>
        </div>
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