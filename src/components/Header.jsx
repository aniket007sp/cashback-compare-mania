import React, { useState } from 'react';
import { User, Wallet, Plane, Hotel, Train, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import FlightSearch from './FlightSearch';
import HotelSearch from './HotelSearch';
import TrainSearch from './TrainSearch';
import CabSearch from './CabSearch';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSearch, setActiveSearch] = useState(null);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const toggleSearch = (searchType) => {
    setActiveSearch(activeSearch === searchType ? null : searchType);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">PriceCompare</h1>
          <nav className="flex items-center space-x-4">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/categories" className="hover:text-blue-200">Categories</Link>
            <Link to="/deals" className="hover:text-blue-200">Deals</Link>
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
          </nav>
        </div>
        <div className="flex justify-center space-x-8">
          <button onClick={() => toggleSearch('flight')} className="flex flex-col items-center hover:text-blue-200">
            <Plane className="mb-1" size={24} />
            <span>Flights</span>
          </button>
          <button onClick={() => toggleSearch('hotel')} className="flex flex-col items-center hover:text-blue-200">
            <Hotel className="mb-1" size={24} />
            <span>Hotels</span>
          </button>
          <button onClick={() => toggleSearch('train')} className="flex flex-col items-center hover:text-blue-200">
            <Train className="mb-1" size={24} />
            <span>Trains</span>
          </button>
          <button onClick={() => toggleSearch('cab')} className="flex flex-col items-center hover:text-blue-200">
            <Car className="mb-1" size={24} />
            <span>Cabs</span>
          </button>
        </div>
      </div>
      {activeSearch === 'flight' && <FlightSearch />}
      {activeSearch === 'hotel' && <HotelSearch />}
      {activeSearch === 'train' && <TrainSearch />}
      {activeSearch === 'cab' && <CabSearch />}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </header>
  );
};

export default Header;