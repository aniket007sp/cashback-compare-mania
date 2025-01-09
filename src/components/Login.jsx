import React from "react";
import logo from "../logo-png.png"; // Replace with your logo path
import banner from "../logo-png.png"; // Replace with your banner path

function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-50 to-white">
      {/* Top Banner */}
      <div className="w-full bg-red-500 shadow-lg">
        <img
          src={banner}
          alt="Cashback Banner"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row items-center justify-center">
        {/* Left Section with Logo */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 lg:p-10">
          <img
            src={logo}
            alt="SavvyZi Logo"
            className="w-48 md:w-64 lg:w-72 mb-6 transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Section with Login Form */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg m-4 lg:m-10 p-8 max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Welcome Back!
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@email.com"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="********"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="mt-6">
            <button
              className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-600 text-center">
            No account?{" "}
            <a
              href="/signup"
              className="font-medium text-red-500 hover:text-red-600 hover:underline transition-all duration-200"
            >
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
