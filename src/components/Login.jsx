import React, { useState } from "react";
import { User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refresh);
        
        toast({
          title: "Success",
          description: "Logged in successfully!",
        });
        
        // Redirect to home page
        navigate('/');
      } else {
        toast({
          title: "Error",
          description: data.error || "Login failed",
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

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Left Section - Brand */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[crimson] to-[#7E69AB] flex flex-col items-center justify-center p-6 lg:p-10 text-white">
          <div className="w-full max-w-md space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">SavvyZi</h1>
            <p className="text-xl md:text-2xl text-center text-white/90">
              Compare prices, save money, shop smarter
            </p>
            <div className="mt-8 space-y-4 text-center">
              <p className="text-lg">✓ Compare prices across multiple stores</p>
              <p className="text-lg">✓ Get exclusive deals and discounts</p>
              <p className="text-lg">✓ Track price history and alerts</p>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-6 lg:p-10">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
              <p className="text-gray-600 mt-2">Please sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@example.com"
                    className="pl-10 bg-white"
                  />
                </div>
              </div>

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
                    placeholder="••••••••"
                    className="pl-10"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full text-white bg-[crimson] hover:bg-gray-400"
              >
                Sign In
              </Button>
            </form>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="font-medium text-[crimson] hover:text-gray-700">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;