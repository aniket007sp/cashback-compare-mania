import React from "react";
import logo from "../logo-png.png"; // Replace with your logo path
import banner from "../logo-png.png"; // Replace with your banner path

function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="w-full bg-red-500">
        <img
          src={banner}
          alt="Cashback Banner"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Left Section with Logo */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-6 lg:p-10">
          <img
            src={logo}
            alt="SavvyZi Logo"
            className="w-1/2 md:w-1/3 lg:w-1/3 mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold">SavvyZi</h1>
          <p className="mt-2 text-lg text-gray-600">Shop Smart, Live Savvy</p>
        </div>

        {/* Right Section with Login Form */}
        <div className="w-full lg:w-1/2 bg-gray-100 flex flex-col items-center justify-center p-6 lg:p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Welcome to SavvyZi!
          </h2>
          <form className="w-full max-w-md space-y-4">
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Log In
              </button>
            </div>
          </form>
          <button
            className="mt-4 w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Continue with Google
          </button>
          <p className="mt-4 text-sm text-gray-600">
            No account?{" "}
            <a
              href="/signup"
              className="font-medium text-red-500 hover:underline"
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
