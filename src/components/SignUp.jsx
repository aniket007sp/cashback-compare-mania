import React from "react";
import logo from "../logo-png.png"; // Replace with your logo path
import banner from "../logo-png.png"; // Replace with your banner path

function SignUp() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section: Brand Introduction */}
      <div className="w-full md:w-1/2 bg-[crimson] flex flex-col items-center justify-center text-white p-6 md:p-10">
        <img
          src={logo}
          alt="SavvyZi Logo"
          className="w-1/2 md:w-1/3 mb-4 md:mb-6"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          SavvyZi
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-center">
          Shop Smart, Live Savvy
        </p>
      </div>

      {/* Right Section: Sign-Up Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-10 bg-white">
        <img
          src={banner}
          alt="Cashback Banner"
          className="w-full max-w-md mb-6 md:mb-8"
        />
        <div className="w-full max-w-md">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Earn cashbacks and rewards with SavvyZi!
          </h2>
          <form className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[crimson] focus:border-[crimson] sm:text-sm"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@email.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[crimson] focus:border-[crimson] sm:text-sm"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Your Phone Number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[crimson] focus:border-[crimson] sm:text-sm"
              />
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="focus:ring-[crimson] h-4 w-4 text-[crimson] border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm sm:text-base">
                <label htmlFor="terms" className="font-medium text-gray-700">
                  I agree with SavvyZi's terms & Conditions
                </label>
              </div>
            </div>

            {/* Sign-Up Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[crimson] hover:bg-[#a31621] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[crimson]"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Login Link */}
          <a
            href="/login"
            className="block text-center text-sm sm:text-base font-medium text-[crimson] hover:underline mt-4"
          >
            I already have an account
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
