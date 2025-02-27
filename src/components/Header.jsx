import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="py-2">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-4 text-sm">
          <a href="#contact" className="text-gray-600 hover:text-gray-900">CONTACT US</a>
          <span className="text-gray-300">|</span>
          <a href="#footer" className="text-gray-600 hover:text-gray-900">ENQUIRY</a>
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="ml-2 p-1 hover:bg-gray-200 rounded-full"
          >
            <Search className="w-4 h-4" />
          </button>
          {isSearchOpen && (
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="py-1 px-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <img className='h-14 w-auto pb-4' src="../src/assets/logo.png" alt="logo" />
            {/* <a href="../src/assets/logo.png" className="text-2xl font-bold">
            </a> */}
            <div className="flex flex-col">
              <span className="font-serif text-lg">आत्मदीपः भव</span>
              <span className="text-xs uppercase tracking-wider">BE YOUR OWN LIGHT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600">ABOUT US</a>
            <a href="#charter" className="text-gray-700 hover:text-blue-600">OUR CHARTER</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600">OUR TEAM</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600">PORTFOLIO</a>
            <a href="#media" className="text-gray-700 hover:text-blue-600">MEDIA</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">CONTACT US</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-blue-600">ABOUT US</a>
              <a href="#charter" className="text-gray-700 hover:text-blue-600">OUR CHARTER</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600">OUR TEAM</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600">PORTFOLIO</a>
              <a href="#media" className="text-gray-700 hover:text-blue-600">MEDIA</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">CONTACT US</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
