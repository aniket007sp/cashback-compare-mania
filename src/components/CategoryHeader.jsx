import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategoryHeader = ({ title }) => {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');

  return (
    <>
      <button
        onClick={handleBack}
        className="mb-4 text-black bg-gray-300 py-1 px-3 rounded-md hover:bg-gray-400 hover:text-black transition flex items-center"
      >
        <ChevronLeft className="h-4 w-4 mr-2" /> Back
      </button>

      <h1 className="text-2xl text-[crimson] font-bold text-center mb-6">
        {title}
      </h1>
    </>
  );
};

export default CategoryHeader;