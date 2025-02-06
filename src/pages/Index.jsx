import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import NetlifyOffersSection from '../components/NetlifyOffersSection';
import ExclusiveStores from '../components/ExclusiveStores';
import InstallUseEarn from '../components/InstallUseEarn';
import ExploreUs from '../components/ExploreUs';
import BrandList from '../components/BrandList';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const S3_BRANDS_URL = "https://savvyzibrandimages.s3.ap-south-1.amazonaws.com/data/brands.json";

const Index = () => {
  const [showBrandList, setShowBrandList] = useState(false);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(S3_BRANDS_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch brands dataaa");
        }
        const data = await response.json();
        setBrands(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        {/* Toggle button for small screens */}
        <div className="md:hidden fixed top-[70px] left-2 z-50">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowBrandList(!showBrandList)}
            className="bg-white shadow-md"
          >
            {showBrandList ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        <div className="flex flex-row flex-grow">
          {/* BrandList for small screens */}
          {showBrandList && (
            <div className="fixed inset-0 bg-white z-40 md:hidden overflow-y-auto pt-16">
              <div className="p-4">
                {loading ? <p>Loading brands...</p> : error ? <p>Error: {error}</p> : <BrandList brands={brands} />}
              </div>
            </div>
          )}

          {/* BrandList for medium and larger screens */}
          <div className="hidden md:block w-[120px] sm:w-[200px] min-w-[70px] sticky top-0 h-[calc(100vh-64px)] overflow-y-auto border-r border-gray-200 shrink-0 bg-[#7E69AB] shadow-md">
            {loading ? <p className="text-white text-center">Loading...</p> : error ? <p className="text-white text-center">{error}</p> : <BrandList brands={brands} />}
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
