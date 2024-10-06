import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const paymentGateways = [
  { name: 'Razorpay', url: 'https://razorpay.com/' },
  { name: 'PayU', url: 'https://payu.in/' },
  { name: 'CCAvenue', url: 'https://www.ccavenue.com/' },
  { name: 'Paytm Payment Gateway', url: 'https://business.paytm.com/payment-gateway' },
  { name: 'Cashfree', url: 'https://www.cashfree.com/' },
];

const PaymentGateways = () => {
  const [amount, setAmount] = useState('');
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);

  const handleWithdraw = () => {
    // Simulate withdrawal process
    alert(`Withdrawal of ₹${amount} initiated. In a real application, this would connect to a payment gateway.`);
    setIsWithdrawDialogOpen(false);
    setAmount('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Cash Withdrawal</h3>
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
        <div>
          <h3 className="text-lg font-medium mb-2">Popular Payment Gateways</h3>
          <ul className="space-y-2">
            {paymentGateways.map((gateway) => (
              <li key={gateway.name}>
                <a
                  href={gateway.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {gateway.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateways;