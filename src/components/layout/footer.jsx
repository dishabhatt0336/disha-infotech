import React from "react";
import { Globe } from "lucide-react";
import logo from "/Logo.png";

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-15 h-15  rounded-lg flex items-center justify-center">
                 <img src = {logo} alt = "Logo" />
                {/* <Globe className="w-6 h-6 text-white" /> */}
              </div>
              {/* <span className="text-2xl font-bold">Disha Infotech</span> */}
            </div>
            <p className="text-gray-300">
              Smart Solutions For Secure Living.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">C.C.T.V System</li>
              <li className="hover:text-white cursor-pointer">Fire Alarm System</li>
              <li className="hover:text-white cursor-pointer">P.A. System</li>
              <li className="hover:text-white cursor-pointer">Home Automation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>dishainfotech303@gmail.com</li>
              <li>+91 7600006288</li>
              <li className="flex gap-3 mt-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">f</div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">in</div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">𝕏</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2026 Disha Infotech. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
