import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-sm sm:text-sm md:text-md lg:text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm sm:text-sm md:text-md leading-relaxed">
              Welcome to the SavvyZi Family! 🎉 We’re excited to introduce you to a smarter way to shop, where your 
              purchases come with exclusive Cash Rewards and incredible deals on your favourite brands. 💸
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://chat.whatsapp.com/Bl1IqZQocew8Ef8qhuNJU3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png"
                    alt="WhatsApp Icon"
                    className="mr-2 w-5 h-5"
                  />
                  Join Our WhatsApp Group
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/savvyzi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white"
                >
                  <Linkedin className="mr-2" size={20} />
                  Connect on LinkedIn
                </a>
              </li>
              <li>
                <a href="https://forms.gle/yWa4vtRBjhNzpdfL7" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white" >
                Feedback Form
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2024 SavvyZi. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
