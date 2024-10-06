import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PaymentGateways from '../components/PaymentGateways';
import { getUserData } from '../utils/userUtils';

const AccountPage = () => {
  const userData = getUserData();

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
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Mobile:</strong> {userData.mobile}</p>
      </div>
      <PaymentGateways />
    </div>
  );
};

export default AccountPage;