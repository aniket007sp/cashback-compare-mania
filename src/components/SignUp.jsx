import React from "react";
import logo from "../logo-png.png"; // Replace with your logo path
import banner from "../logo-png.png"; // Replace with your banner path

function Login() {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-red-500 flex flex-col items-center justify-center text-white p-10">
        <img src={logo} alt="SavvyZi Logo" className="w-1/3 mb-4" />
        <h1 className="text-4xl font-bold">SavvyZi</h1>
        <p className="mt-2 text-lg">Shop Smart, Live Savvy</p>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-white">
        <img src={banner} alt="Cashback Banner" className="w-3/4 mb-6" />
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">
            Earn cashbacks and rewards with SavvyZi!
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Your Phone Number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">
                  I agree with SavvyZi's terms & Conditions
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign Up
              </button>
            </div>
          </form>
          <a
            href="/login"
            className="block text-center text-sm font-medium text-red-500 hover:underline mt-4"
          >
            I already have an account
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
