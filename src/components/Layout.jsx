import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar pinned to the top */}
      <Navbar className="fixed top-0 left-0 right-0 z-50" />
      
      {/* Main content with padding to avoid overlap with the fixed navbar */}
      <main className="flex-1 w-full pt-16 sm:pt-20">{children}</main>
    </div>
  );
};

export default Layout;
