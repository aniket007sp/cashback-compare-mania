import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    emailOTP: '',
    mobileOTP: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      // TODO: Implement sending OTPs to email and mobile
      setStep(2);
    } else {
      // TODO: Implement OTP verification
      console.log('Login successful', formData);
      onLoginSuccess(); // Call the onLoginSuccess callback
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{step === 1 ? 'Login' : 'Verify OTP'}</DialogTitle>
          <Button variant="ghost" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 ? (
            <>
              <Input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                name="mobile"
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </>
          ) : (
            <>
              <Input
                name="emailOTP"
                placeholder="Email OTP"
                value={formData.emailOTP}
                onChange={handleInputChange}
                required
              />
              <Input
                name="mobileOTP"
                placeholder="Mobile OTP"
                value={formData.mobileOTP}
                onChange={handleInputChange}
                required
              />
            </>
          )}
          <Button type="submit" className="w-full">
            {step === 1 ? 'Send OTP' : 'Verify OTP'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;