import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const WalletSection = ({ userData }) => {
  const [amount, setAmount] = useState('');
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);
  
  // Simulated wallet data (replace with actual data in a real application)
  const walletData = {
    confirmedAmount: 1000,
    pendingAmount: 250,
  };

  const handleWithdraw = () => {
    // Simulate withdrawal process
    alert(`Withdrawal of ₹${amount} initiated. In a real application, this would connect to a payment gateway.`);
    setIsWithdrawDialogOpen(false);
    setAmount('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Wallet</h2>
      <div className="mb-6 space-y-2">
        <p><strong>Confirmed Amount:</strong> ₹{walletData.confirmedAmount.toFixed(2)}</p>
        <p><strong>Amount Yet to Confirm:</strong> ₹{walletData.pendingAmount.toFixed(2)}</p>
        <p><strong>Total Balance:</strong> ₹{(walletData.confirmedAmount + walletData.pendingAmount).toFixed(2)}</p>
      </div>
      <Dialog open={isWithdrawDialogOpen} onOpenChange={setIsWithdrawDialogOpen}>
        <DialogTrigger asChild>
          <Button>Withdraw Cash</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Withdraw Cash</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button onClick={handleWithdraw} className="mt-4 w-full">
              Confirm Withdrawal
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WalletSection;