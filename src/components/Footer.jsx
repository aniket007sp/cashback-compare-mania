import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#8B5CF6]">About Us</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Welcome to the SavvyZi Family! 🎉 We're excited to introduce you to a smarter way to shop, where your 
              purchases come with exclusive Cash Rewards and incredible deals on your favourite brands. 💸
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#8B5CF6]">Connect with Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chat.whatsapp.com/Bl1IqZQocew8Ef8qhuNJU3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png"
                    alt="WhatsApp Icon"
                    className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <span className="text-sm sm:text-base">Join Our WhatsApp Group</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/savvyzi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Connect on LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://forms.gle/yWa4vtRBjhNzpdfL7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Feedback Form</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm sm:text-base">&copy; 2024 SavvyZi. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;