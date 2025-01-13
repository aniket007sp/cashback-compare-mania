import React from "react";
import { User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Left Section - Brand */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[crimson] to-[#7E69AB] flex flex-col items-center justify-center p-6 lg:p-10 text-white">
          <div className="w-full max-w-md space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">SavvyZi</h1>
            <p className="text-xl md:text-2xl text-center text-white/90">
              Compare prices, save money, shop smarter
            </p>
            <div className="mt-8 space-y-4 text-center">
              <p className="text-lg">
                ✓ Compare prices across multiple stores
              </p>
              <p className="text-lg">
                ✓ Get exclusive deals and discounts
              </p>
              <p className="text-lg">
                ✓ Track price history and alerts
              </p>
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

            <form className="space-y-4">
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
                    required
                    placeholder="you@example.com"
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[crimson] focus:ring-[#7E69AB] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm font-medium text-grey-700 hover:text-[crimson]">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full bg-[crimson] hover:bg-gray-400 text-white transition-colors"
              >
                Sign In
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
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
