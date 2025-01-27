import React, { useState } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import NetlifyOffersSection from '../components/NetlifyOffersSection';
import ExclusiveStores from '../components/ExclusiveStores';
import InstallUseEarn from '../components/InstallUseEarn';
import ExploreUs from '../components/ExploreUs';
import BrandList from '../components/BrandList';
import brands from '../data/latest/brands.json';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Index = () => {
  const [showBrandList, setShowBrandList] = useState(false);

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        {/* Toggle button for small screens */}
        <div className="md:hidden fixed top-[70px] left-2 z-50">
          <button
            onClick={() => setShowBrandList(!showBrandList)}
            className="bg-[crimson] text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-500 transition-colors text-sm"
          >
            Shop By Brand
          </button>
        </div>

        <div className="flex flex-row flex-grow">
          {/* BrandList for small screens */}
          {showBrandList && (
            <div className="fixed inset-0 bg-white z-40 md:hidden overflow-y-auto pt-16">
              <div className="p-4">
                <BrandList brands={brands} />
              </div>
            </div>
          )}

          {/* BrandList for medium and larger screens */}
          <div className="hidden md:block w-[120px] sm:w-[200px] min-w-[70px] sticky top-0 h-[calc(100vh-64px)] overflow-y-auto border-r border-gray-200 shrink-0 bg-[#7E69AB] shadow-md">
            <BrandList brands={brands} />
          </div>

          <div className="flex-1 overflow-x-hidden">
            <ExclusiveStores />
            <InstallUseEarn />
            <ExploreUs />
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
