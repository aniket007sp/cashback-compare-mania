import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left side (60% empty space) */}
      <div className="w-3/5 bg-gray-100"></div>

      {/* Right side (40% content with light grey case) */}
      <div className="w-[40%] p-6 flex flex-col justify-center ml-auto">
        {/* Light Grey Case Container */}
       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Logo Section */}
          <div className="text-center mb-6">
            <img
              alt="SavvyZi Logo"
              className="mx-auto w-32 h-auto mb-4"
            />
            <h1 className="text-xl font-semibold text-red-600 dark:text-white">
              Welcome to SavvyZi
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose your login method.
            </p>
          </div>

          {/* Login Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => navigate("/form1")}
              className="w-full py-3 text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 rounded-lg font-medium transition"
            >
              Sign In
            </button>

            <button className="flex items-center justify-center w-full py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg font-medium transition">
              <span>Login with</span>
              <img
                alt="Google Logo"
                className="w-6 h-6 ml-2"
              />
            </button>

            <button className="flex items-center justify-center w-full py-3 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg font-medium transition">
              <span>Login with</span>
              <img
                alt="Facebook Logo"
                className="w-5 h-5 ml-2"
              />
            </button>
          </div>

          {/* Join the family link */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/form2")}
              className="text-red-600 font-medium cursor-pointer hover:underline"
            >
              Join the SavvyZi family
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
