import React from "react";
import { User, Lock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SignUp() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Brand */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] flex flex-col items-center justify-center p-6 lg:p-10 text-white">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">PriceCompare</h1>
          <p className="text-xl md:text-2xl text-center text-white/90">
            Join our community of smart shoppers
          </p>
          <div className="mt-8 space-y-4 text-center">
            <p className="text-lg">
              ✓ Get personalized price alerts
            </p>
            <p className="text-lg">
              ✓ Save your favorite products
            </p>
            <p className="text-lg">
              ✓ Earn rewards on every purchase
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-6 lg:p-10">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
            <p className="text-gray-600 mt-2">Start your journey with us today</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="pl-10"
                />
              </div>
            </div>

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
                  required
                  placeholder="you@example.com"
                  className="pl-10"
                />
              </div>
            </div>

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
                  required
                  placeholder="Your Phone Number"
                  className="pl-10"
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
                  required
                  placeholder="••••••••"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-[#9b87f5] focus:ring-[#7E69AB] border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-[#9b87f5] hover:text-[#7E69AB]">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white transition-colors"
            >
              Create Account
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
          >
            Continue with Google
          </Button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-[#9b87f5] hover:text-[#7E69AB]">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;