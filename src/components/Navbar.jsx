import React from 'react';
import logo from '../logo-png.png';

const Navbar = () => {
  const orderFormUrl = "https://forms.gle/Ag57FdWGnsuWAsP56";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section - Smaller on mobile */}
          <a href="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="SavvyZi" 
              className="h-12 w-auto sm:h-16" 
            />
          </a>

          {/* Tagline Section - Hidden on very small screens, visible on sm and up */}
          <div className="hidden sm:block text-center flex-grow">
            <div className="text-[crimson] text-sm sm:text-base lg:text-xl font-semibold whitespace-nowrap">
              SavvyZi - <span className="text-[crimson]">Shop Smart, Live Savvy</span>
            </div>
          </div>

          {/* Confirm Order Button - Smaller on mobile */}
          <div className="relative z-10">
            <button
              onClick={() => window.open(orderFormUrl, '_blank', 'noopener,noreferrer')}
              className="bg-[crimson] text-white px-2 sm:px-4 py-1 rounded-md hover:bg-gray-500 transition-colors text-xs sm:text-sm whitespace-nowrap"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;