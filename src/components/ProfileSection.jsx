import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Grid, HelpCircle } from 'lucide-react';

const ProfileSection = ({ userData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="mb-6">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Mobile:</strong> {userData.mobile}</p>
      </div>
      <div className="space-y-4">
        <Link to="/orders" className="flex items-center text-blue-600 hover:underline">
          <ShoppingBag className="mr-2" size={20} />
          Past Orders
        </Link>
        <Link to="/categories" className="flex items-center text-blue-600 hover:underline">
          <Grid className="mr-2" size={20} />
          All Categories
        </Link>
        <Link to="/help" className="flex items-center text-blue-600 hover:underline">
          <HelpCircle className="mr-2" size={20} />
          Help Centre
        </Link>
      </div>
    </div>
  );
};

export default ProfileSection;