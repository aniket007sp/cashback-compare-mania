import React, { useState } from 'react';
import { User, Wallet, Plane, Hotel, Train, Car, Bus } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { Button } from "@/components/ui/button";

const Header = ({ onDealsClick }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">PriceCompare</h1>
          <nav className="flex items-center space-x-4">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/categories" className="hover:text-blue-200">Categories</Link>
            <button onClick={onDealsClick} className="hover:text-blue-200">Deals</button>
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
        <div className="flex justify-center space-x-8 mt-4">
          <Link to="/flights">
            <Button variant="outline" className="flex flex-col items-center bg-white text-blue-600 hover:bg-blue-100">
              <Plane className="mb-1" size={24} />
            </Button>
          </Link>
          <Link to="/hotels">
            <Button variant="outline" className="flex flex-col items-center bg-white text-blue-600 hover:bg-blue-100">
              <Hotel className="mb-1" size={24} />
            </Button>
          </Link>
          <Link to="/trains">
            <Button variant="outline" className="flex flex-col items-center bg-white text-blue-600 hover:bg-blue-100">
              <Train className="mb-1" size={24} />
            </Button>
          </Link>
          <Link to="/cabs">
            <Button variant="outline" className="flex flex-col items-center bg-white text-blue-600 hover:bg-blue-100">
              <Car className="mb-1" size={24} />
            </Button>
          </Link>
          <Link to="/buses">
            <Button variant="outline" className="flex flex-col items-center bg-white text-blue-600 hover:bg-blue-100">
              <Bus className="mb-1" size={24} />
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