import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900/80 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-emerald-400 font-bold text-xl mb-4 inline-block">Salahou</span>
            <p className="text-gray-400">Creating beautiful templates for developers and businesses.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-light font-bold mb-4">Templates</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">E-Commerce</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Mobile App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">SAAS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">All Templates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-light font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">License</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-light font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© {currentYear} Salahou. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
