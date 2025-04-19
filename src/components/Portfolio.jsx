import React, { useState } from 'react';
import { motion } from "framer-motion";

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div id='portfolio' className='px-4 md:px-20 bg-[#ebe6e0] relative'>
      {/* Portfolio Header */}
      <h1 className="text-[#f5700d] font-gothamb text-2xl my-8">PORTFOLIO</h1>
      
      {/* Top Section with Image and Graphics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {/* Left Column - Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img 
            src="../src/assets/images/img3.jpg" 
            alt="Investment Growth" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        
        {/* Right Column - Graphics */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:px-20 lg:pb-20"
        >
          <div className="aspect-square bg-[#03045e] flex items-center justify-center">
            <motion.img
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.5 }}
              src="../src/assets/InImage/Errow.png" 
              alt="arrow" 
              className="text-white p-4"
            />
          </div>
          <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center"></div>
          <div className="aspect-square bg-[#00dbba] flex items-center justify-center rounded-full">
            <motion.img
              whileHover={{ rotateX: 180 }}
              transition={{ duration: 0.5 }}
              src="../src/assets/InImage/infinity.png" 
              alt="infinity" 
              className="text-white p-4"
            />
          </div>
          <div className="aspect-square bg-[#00dbba] flex items-center justify-center">
            <motion.div
              whileHover={{ x: 60, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white p-4"
            >
              <img src="../src/assets/InImage/arrow.png" alt="arrow" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Portfolio Grid Section */}
      <h2 className="text-4xl font-playfairdisplayb mb-8">Portfolio</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="search"
            placeholder="Search"
            className="w-32 lg:w-64 bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
          />
          <svg 
            className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Agrileaf Card */}
        <div
          className={`rounded-lg flex flex-col justify-between shadow-md px-2 pt-6 pb-6 hover:shadow-lg transition-all duration-300 cursor-pointer ${
            isHovered ? 'min-h-52 max-h-68' : 'min-h-48'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex justify-between">
            <img
              src="../src/assets/InImage/Agrilife.png"
              alt="Agrileaf"
              className="w-14 h-14 lg:w-24 lg:h-24 rounded-full object-center"
            />
            <h3 className="text-lg lg:text-3xl font-playfairdisplay text-end">Agrileaf</h3>
          </div>

          <button
            onClick={toggleModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600 transition-all duration-300"
          >
            {isModalOpen ? 'Show Less' : 'Know More'}
          </button>
        </div>

        {/* Empty Cards */}
        <div className="bg-[#ebe6e0] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"></div>
        <div className="bg-[#ebe6e0] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"></div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleModal}
          />

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent event bubbling
            toggleModal();
          }}
                className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
                style={{ zIndex: 60 }}
              >
                Show Less
              </button>

              <div className="p-8 pt-16 text-center">
                <h2 className="text-4xl font-bold mb-6 text-green-600">Agrileaf</h2>
                <p className="text-lg mb-4 text-gray-700">
                  A premier Indian manufacturer and leading exporter of biodegradable and eco-friendly dinnerware.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                  Agrileaf creates 100% natural, backyard-compostable dinnerware from fallen areca leaves,
                  offering a sustainable alternative to plastic, paper, and bagasse plates.
                </p>
                <div className="mb-4">
                  <p className="text-lg font-semibold text-gray-800">Founders:</p>
                  <a
                    href="https://www.linkedin.com/in/avinash-rao-baaa768/"
                    className="text-blue-600 underline mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Avinash Rao
                  </a>
                  <a
                    href="https://www.linkedin.com/in/athishay-jain-389a7b19/"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Atishay Jain
                  </a>
                </div>
                <p>
                  <strong>Website:</strong>{' '}
                  <a
                    href="https://agrileaf.in/"
                    className="text-green-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://agrileaf.in/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Quote Section */}
      <div className="text-center mt-16 lg:mt-32 mb-16">
        <h2 className="text-2xl lg:text-4xl font-gotham font-light mb-4">
          "EMPOWERING AMBITIOUS ENTREPRENEURS TO UNLOCK<br />
          THEIR DREAMS AND DRIVE TRANSFORMATIVE CHANGE."
        </h2>
      </div>
    </div>
  );
};

export default Portfolio;