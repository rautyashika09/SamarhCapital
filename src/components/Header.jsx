import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#f8f5f0" }} className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 w-40 mx-2 mt-8">
            <img src="../src/assets/logo.jpg" alt="" />
          </div>

          {/* Desktop Navigation and Search */}
          <div className="hidden md:flex justify-between items-center space-x-20">
            <nav className="space-x-8">
              <a href="#" className="hover:text-gray-600">ABOUT US</a>
              <a href="#" className="hover:text-gray-600">OUR CHARTER</a>
              <a href="#" className="hover:text-gray-600">OUR TEAM</a>
              <a href="#" className="hover:text-gray-600">PORTFOLIO</a>
              <a href="#" className="hover:text-gray-600">MEDIA</a>
              <a href="#" className="hover:text-gray-600">CONTACT US</a>
            </nav>
            {/* <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-lg px-3 py-1 text-sm w-48 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-gray-600">ABOUT US</a>
              <a href="#" className="hover:text-gray-600">OUR CHARTER</a>
              <a href="#" className="hover:text-gray-600">OUR TEAM</a>
              <a href="#" className="hover:text-gray-600">PORTFOLIO</a>
              <a href="#" className="hover:text-gray-600">MEDIA</a>
              <a href="#" className="hover:text-gray-600">CONTACT US</a>
            </nav>

            <div className="px-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm">3IT@4GPL: 9GT</p>
            </div>
          </div>
        )}

        {/* Tagline Section */}
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start py-6 border-t border-gray-100'>
          <div className="text-left">
            <h1 className='text-3xl font-bold'>आत्मदीपः भव</h1>
            <p className="text-xl font-light">BE YOUR OWN LIGHT</p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Enquiry</a>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-3 py-1 text-sm w-48 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
