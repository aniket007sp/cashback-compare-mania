import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo-png.png';

const Navbar = () => {
  const orderFormUrl = "https://forms.gle/Ag57FdWGnsuWAsP56";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="SavvyZi" className="h-10 sm:h-12 w-auto" />
          </Link>

          {/* Tagline Section - Hidden on mobile */}
          <div className="hidden sm:block text-center">
            <div className="text-[#8B5CF6] text-lg font-semibold">
              SavvyZi - <span className="text-gray-600">Shop Smart, Live Savvy</span>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => window.open(orderFormUrl, '_blank', 'noopener,noreferrer')}
              className="bg-[#8B5CF6] text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md hover:bg-[#7C3AED] transition-colors"
            >
              Confirm Order
            </button>
            <Link
              to="/login"
              className="bg-white text-[#8B5CF6] border border-[#8B5CF6] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md hover:bg-[#8B5CF6] hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;