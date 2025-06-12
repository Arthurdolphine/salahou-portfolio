import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import Button from './common/Button';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTemplatesOpen, setMobileTemplatesOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-900/90 backdrop-blur-sm border-b border-gray-800 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-primary font-bold text-2xl tracking-tight">Salahou</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="text-light hover:text-primary transition"
            >
              Home
            </a>
            
            <div className="dropdown relative group">
              <button className="flex items-center text-light hover:text-primary transition">
                Templates <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-48 bg-dark-800 rounded-lg shadow-lg py-2 z-50 border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300">
                <a 
                  href="#templates" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('templates'); }}
                  className="block px-4 py-2 text-light hover:bg-dark-700"
                >
                  All Templates
                </a>
                <a href="#" className="block px-4 py-2 text-light hover:bg-dark-700">Portfolio</a>
                <a href="#" className="block px-4 py-2 text-light hover:bg-dark-700">E-Commerce</a>
                <a href="#" className="block px-4 py-2 text-light hover:bg-dark-700">Mobile App</a>
                <a href="#" className="block px-4 py-2 text-light hover:bg-dark-700">SAAS</a>
              </div>
            </div>
            
            <a 
              href="#skills" 
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              className="text-light hover:text-primary transition"
            >
              Skills
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              className="text-light hover:text-primary transition"
            >
              Testimonials
            </a>
            
            <div className="dropdown relative group">
              <button className="flex items-center text-light hover:text-primary transition">
                Contact <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-48 bg-dark-800 rounded-lg shadow-lg py-2 z-50 border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300">
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  className="block px-4 py-2 text-light hover:bg-dark-700"
                >
                  Contact Form
                </a>
                <a href="#" className="block px-4 py-2 text-light hover:bg-dark-700">Support</a>
                <a href="#" className="block px-4 py-2 text-light hover:bg-dark-700">Custom Request</a>
              </div>
            </div>
            
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-light hover:text-primary transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            id="mobileMenuButton" 
            className="md:hidden text-light focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          id="mobileMenu" 
          className={`md:hidden bg-dark-800 rounded-lg mt-2 overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'
          }`}
        >
          <div className="px-4 py-3 space-y-3">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="block text-light hover:text-primary"
            >
              Home
            </a>
            
            <div className="mb-2">
              <button 
                onClick={() => setMobileTemplatesOpen(!mobileTemplatesOpen)}
                className="flex items-center justify-between w-full text-light hover:text-primary"
              >
                <span>Templates</span>
                {mobileTemplatesOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div 
                className={`pl-4 mt-1 space-y-2 transition-all duration-300 ${
                  mobileTemplatesOpen ? 'block' : 'hidden'
                }`}
              >
                <a 
                  href="#templates" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('templates'); }}
                  className="block text-light hover:text-primary"
                >
                  All Templates
                </a>
                <a href="#" className="block text-light hover:text-primary">Portfolio</a>
                <a href="#" className="block text-light hover:text-primary">E-Commerce</a>
                <a href="#" className="block text-light hover:text-primary">Mobile App</a>
              </div>
            </div>
            
            <a 
              href="#skills" 
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              className="block text-light hover:text-primary"
            >
              Skills
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              className="block text-light hover:text-primary"
            >
              Testimonials
            </a>
            
            <div className="mb-2">
              <button 
                onClick={() => setMobileContactOpen(!mobileContactOpen)}
                className="flex items-center justify-between w-full text-light hover:text-primary"
              >
                <span>Contact</span>
                {mobileContactOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div 
                className={`pl-4 mt-1 space-y-2 transition-all duration-300 ${
                  mobileContactOpen ? 'block' : 'hidden'
                }`}
              >
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  className="block text-light hover:text-primary"
                >
                  Contact Form
                </a>
                <a href="#" className="block text-light hover:text-primary">Support</a>
                <a href="#" className="block text-light hover:text-primary">Custom Request</a>
              </div>
            </div>
            
            <button 
              onClick={toggleTheme}
              className="flex items-center text-light hover:text-primary"
            >
              {darkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
