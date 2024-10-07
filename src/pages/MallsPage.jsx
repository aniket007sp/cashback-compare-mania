import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MallList from '../components/MallList';

const MallsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-block mb-4">
        <Button variant="outline" className="flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Button>
      </Link>
      <MallList />
    </div>
  );
};

export default MallsPage;