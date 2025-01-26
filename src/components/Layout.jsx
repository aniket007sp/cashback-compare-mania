import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#ea384c]/10 flex flex-col">
      <Navbar />
      <main className="flex-1 w-full mt-[64px] sm:mt-[80px] md:mt-[100px]">{children}</main>
    </div>
  );
};

export default Layout;