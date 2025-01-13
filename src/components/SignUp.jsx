import React, { useState } from "react";
import { User, Lock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

function SignUp() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    emailOtp: "",
    phoneOtp: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInitialSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/initiate-signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
        }),
      });

      if (response.ok) {
        toast({
          title: "OTP Sent",
          description: "Please check your email and phone for OTP verification codes.",
        });
        setStep(2);
      } else {
        const data = await response.json();
        toast({
          title: "Error",
          description: data.error || "Failed to send OTP",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to server",
        variant: "destructive",
      });
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/verify-otp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          email_otp: formData.emailOtp,
          phone_otp: formData.phoneOtp,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: "Account created successfully!",
        });
        // Store the token and redirect
        localStorage.setItem('token', data.token);
        window.location.href = '/';
      } else {
        toast({
          title: "Error",
          description: data.message || "Verification failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify OTP",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-wrap lg:flex-nowrap">
      {/* Left Section - Brand */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[crimson] to-[#7E69AB] flex flex-col items-center justify-center p-6 md:p-10 text-white">
        <div className="w-full max-w-lg space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">SavvyZi</h1>
          <p className="text-lg md:text-2xl text-white/90">
            Join our community of smart shoppers
          </p>
          <div className="mt-6 space-y-4">
            <p className="text-base md:text-lg">✓ Get personalized price alerts</p>
            <p className="text-base md:text-lg">✓ Save your favorite products</p>
            <p className="text-base md:text-lg">✓ Earn rewards on every purchase</p>
          </div>
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-lg space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {step === 1 ? "Create your account" : "Verify OTP"}
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              {step === 1 ? "Start your journey with us today" : "Enter the OTP sent to your email and phone"}
            </p>
          </div>

          <form onSubmit={step === 1 ? handleInitialSubmit : handleOtpVerification} className="space-y-4">
            {step === 1 ? (
              <>
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Phone Number"
                      className="pl-10"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Email OTP */}
                <div className="space-y-2">
                  <label htmlFor="emailOtp" className="block text-sm font-medium text-gray-700">
                    Email OTP
                  </label>
                  <Input
                    type="text"
                    id="emailOtp"
                    name="emailOtp"
                    value={formData.emailOtp}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Email OTP"
                  />
                </div>

                {/* Phone OTP */}
                <div className="space-y-2">
                  <label htmlFor="phoneOtp" className="block text-sm font-medium text-gray-700">
                    Phone OTP
                  </label>
                  <Input
                    type="text"
                    id="phoneOtp"
                    name="phoneOtp"
                    value={formData.phoneOtp}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Phone OTP"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      placeholder="Create Password"
                      className="pl-10"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[crimson] hover:bg-gray-400 text-white transition-colors"
            >
              {step === 1 ? "Send OTP" : "Create Account"}
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-[crimson] hover:text-gray-700">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;