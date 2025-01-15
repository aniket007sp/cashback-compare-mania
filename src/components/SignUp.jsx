import React, { useState } from "react";
import { Mail, Phone, Lock } from "lucide-react";
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
      const response = await fetch("http://localhost:8000/api/initiate-signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
        }),
      });

      if (response.ok) {
        toast({
          title: "OTP Sent",
          description: "Check your email and phone for the OTP.",
        });
        setStep(2);
      } else {
        const data = await response.json();
        toast({
          title: "Error",
          description: data.error || "Failed to send OTP.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to connect to the server.",
        variant: "destructive",
      });
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/verify-otp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        localStorage.setItem("token", data.token);
        window.location.href = "/";
      } else {
        toast({
          title: "Error",
          description: data.error || "OTP verification failed.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to verify OTP.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-wrap lg:flex-nowrap">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[crimson] to-[#7E69AB] text-white flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold">SavvyZi</h1>
          <p>Join our smart shopping community!</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center">
        <form
          onSubmit={step === 1 ? handleInitialSubmit : handleOtpVerification}
          className="space-y-4"
        >
          {step === 1 ? (
            <>
              <Input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                icon={<Mail />}
              />
              <Input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                icon={<Phone />}
              />
            </>
          ) : (
            <>
              <Input
                name="emailOtp"
                placeholder="Email OTP"
                value={formData.emailOtp}
                onChange={handleInputChange}
                required
              />
              <Input
                name="phoneOtp"
                placeholder="Phone OTP"
                value={formData.phoneOtp}
                onChange={handleInputChange}
                required
              />
              <Input
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                type="password"
                icon={<Lock />}
              />
            </>
          )}
          <Button type="submit">
            {step === 1 ? "Send OTP" : "Verify and Create Account"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
