import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import NetlifyOffersSection from '../components/NetlifyOffersSection';
import ExclusiveStores from '../components/ExclusiveStores';
import InstallUseEarn from '../components/InstallUseEarn';
import ExploreUs from '../components/ExploreUs';
import BrandList from '../components/BrandList';
import brands from '../data/latest/brands.json';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-row flex-grow">
          <div className="w-[120px] sm:w-[200px] min-w-[70px] sticky top-0 h-[calc(100vh-64px)] overflow-y-auto border-r border-gray-200 shrink-0 bg-[#7E69AB] shadow-md">
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
