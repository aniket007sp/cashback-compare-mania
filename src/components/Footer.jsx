import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">PriceCompare is your go-to platform for finding the best deals and earning cashback on your purchases.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Fashion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home & Garden</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Travel</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest deals and cashback offers.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-gray-800" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2023 PriceCompare. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;