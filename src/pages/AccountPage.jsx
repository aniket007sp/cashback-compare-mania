import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Wallet } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { getUserData } from '../utils/userUtils';
import ProfileSection from '../components/ProfileSection';
import WalletSection from '../components/WalletSection';

const AccountPage = () => {
  const userData = getUserData();
  const navigate = useNavigate();

  if (!userData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Account</h1>
        <p>Please log in to view your account details.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-block mb-4">
        <Button variant="outline" className="flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-4">Your Account</h1>
      <div className="flex space-x-4 mb-6">
        <Button onClick={() => navigate('/account/profile')} variant="outline">
          <User className="mr-2" size={20} />
          Profile
        </Button>
        <Button onClick={() => navigate('/account/wallet')} variant="outline">
          <Wallet className="mr-2" size={20} />
          Wallet
        </Button>
      </div>
      <Routes>
        <Route path="profile" element={<ProfileSection userData={userData} />} />
        <Route path="wallet" element={<WalletSection userData={userData} />} />
      </Routes>
    </div>
  );
};

export default AccountPage;