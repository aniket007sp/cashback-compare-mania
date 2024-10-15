import React, { useState, useEffect } from 'react';
import { User, Wallet, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { Button } from "@/components/ui/button";
import { getUserData } from '../utils/userUtils';

const Header = ({ onDealsClick }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedUserData = getUserData();
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleLoginSuccess = (newUserData) => {
    setUserData(newUserData);
    setIsLoginModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const travelOptions = [
    { name: 'Flights', icon: '/images/travel/flight.svg', path: '/flights' },
    { name: 'Hotels', icon: '/images/travel/hotel.svg', path: '/hotels' },
    { name: 'Trains', icon: '/images/travel/train.svg', path: '/trains' },
    { name: 'Cabs', icon: '/images/travel/cab.svg', path: '/cabs' },
    { name: 'Buses', icon: '/images/travel/bus.svg', path: '/buses' },
    { name: 'Malls', icon: '/placeholder.svg', path: '/malls' },
  ];

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
            {userData ? (
              <Link to="/account" className="block py-2 md:py-0 hover:text-blue-200 flex items-center">
                <User className="inline-block mr-1" />
                {userData.name}
                <Wallet className="inline-block ml-2" />
              </Link>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="block py-2 md:py-0 hover:text-blue-200 flex items-center"
              >
                <User className="inline-block mr-1" />
                Login/Signup
              </button>
            )}
          </nav>
        </div>
        <div className="flex justify-center space-x-2 sm:space-x-4 mt-4 overflow-x-auto pb-2">
          {travelOptions.map((option) => (
            <Link key={option.name} to={option.path}>
              <Button variant="outline" className="flex flex-col items-center bg-white text-blue-600 hover:bg-blue-100 p-2">
                <img src={option.icon} alt={option.name} className="w-6 h-6 mb-1" />
                <span className="text-xs">{option.name}</span>
              </Button>
            </Link>
          ))}
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