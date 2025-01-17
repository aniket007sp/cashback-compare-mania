import React from 'react';
import logo from '../logo-png.png'; // Adjust the path if needed

const Navbar = () => {
  const orderFormUrl = "https://forms.gle/Ag57FdWGnsuWAsP56"; // Replace with your actual form URL

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Section */}
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="SavvyZi" className="h-16 w-auto sm:h-20" />
          </a>

          {/* Tagline Section - Centered */}
          <div className="text-center flex-grow">
            <div className="text-[crimson] text-sm sm:text-md md:text-lg lg:text-xl font-semibold">
              SavvyZi - <span className="text-[crimson]">Shop Smart, Live Savvy</span>
            </div>
          </div>

          {/* Confirm Order Button */}
          <div className="relative z-10">
          <button
            onClick={() => window.open(orderFormUrl, '_blank', 'noopener,noreferrer')}
            className="bg-[crimson] text-white px-5 py-2 rounded-md hover:bg-gray-500 transition-colors text-xs sm:text-sm md:text-base"
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
