import React, {useState} from 'react'
import { motion } from "framer-motion"
const Portfolio = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); 

  // const handleClick = () => {
  //   window.location.href = 'https://www.thehindu.com/news/cities/Mangalore/agrileaf-secures-16-crore-in-growth-funding/article68955507.ece'; 
  // };

  const handleClick = () => {
    setIsExpanded(!isExpanded); // Toggle expansion on click
  };

  return (
    <div id='portfolio' className='px-20 bg-[#ebe6e0]'>
    <h1 className="text-[#f5700d] font-gothamb text-2xl my-8">PORTFOLIO</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <motion.div
      whileInView={{opacity:1, x: 0}}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.7}}
      className="relative">
        <img 
          src="../src/assets/images/img3.jpg" 
          alt="Investment Growth" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>
      {/* <div className="flex items-center justify-center"> */}
      <motion.div
      whileInView={{opacity:1, x: 0}}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5}}
      className="grid grid-cols-2 lg:px-20 lg:pb-20">
      <div className="aspect-square bg-[#03045e] flex items-center justify-center">
                <div className="text-white p-4 transform ">
                  <motion.img
                  whileHover={{
                    rotateY: 180, // Flip the element on the X-axis by 180 degrees
                  }}
                  transition={{
                    duration: 0.5, // Duration of the flip transition
                  }}
                  src="../src/assets/InImage/Errow.png" alt="arrow" />
                </div>
              </div>
              <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
        </div>
        <div className="aspect-square bg-[#00dbba] flex items-center justify-center rounded-full">
                <div className="text-white p-4 transform ">
                  <motion.img
                  whileHover={{
                    rotateX: 180, // Flip the element on the X-axis by 180 degrees
                  }}
                  transition={{
                    duration: 0.5, // Duration of the flip transition
                  }}
                  src="../src/assets/InImage/infinity.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-[#00dbba] flex items-center justify-center">
                <motion.div
                 whileHover={{
                  x: 60,         // Moves the arrow to the right
                  opacity: 0,    // Makes the arrow invisible
                }}
                transition={{
                  duration: 0.5,  
                }}
                className="text-white p-4 transform ">
                  <img src="../src/assets/InImage/arrow.png" alt="arrow" />
                </motion.div>
              </div>
        </motion.div>
      </div>
    {/* </div> */}

    <h2 className="text-4xl lg:font-5xl font-playfairdisplayb mb-8">Portfolio</h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div className="relative mb-8">
      <input
        type="search"
        placeholder="Search"
        className="w-32 lg:w64 bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
      />
      <svg className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>

      {/* <div
      className={`rounded-lg flex flex-col justify-between shadow-md px-2 pt-6 pb-6 hover:shadow-lg transition-all duration-300 cursor-pointer ${
       isHovered ? 'min-h-48 max-h-64' : 'min-h-48'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <img
          src="../src/assets/InImage/Agrilife.png"
          alt="Agrileaf"
          className="w-14 h-14 lg:w-24 lg:h-24 p-1 text-start rounded-full border-2 self-start"
        />
        <h3 className="text-lg lg:text-3xl font-playfairdisplay text-end">Agrileaf</h3>
      </div>
      {isHovered && (
        <p className="text-sm lg:text-base mt-2">
          Agrileaf, manufacturer and exporter of biodegradable dinnerware made from areca leaf and based near Dharmasthala, has secured ₹16 crore in growth funding .....
        </p>
      )}
    </div> */}

<div
      className={`rounded-lg flex flex-col justify-between shadow-md px-2 pt-6 pb-6 hover:shadow-lg transition-all duration-300 cursor-pointer ${
        isHovered ? 'min-h-48 max-h-64' : 'min-h-48'
      }`}
      onMouseEnter={() => setIsHovered(false)}
      //  onMouseLeave={() => setIsHovered(true)}
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <img
          src="../src/assets/InImage/Agrilife.png"
          alt="Agrileaf"
          className="w-14 h-14 lg:w-24 lg:h-24 p-1 text-start rounded-full border-2 self-start"
        />
        <h3 className="text-lg lg:text-3xl font-playfairdisplay text-end">Agrileaf</h3>
      </div>
      
      {/* Know More Button */}
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600 transition-all duration-300"
      >
        {isExpanded ? 'Show Less' : 'Know More'}
      </button>

      {/* Content that expands on click */}
      {isExpanded && (
        <div className="mt-4">
          <p className="text-sm lg:text-base">
          Agrileaf A premier Indian manufacturer and leading exporter of biodegradable and eco-friendly dinnerware. Agrileaf creates 100% natural, backyard-compostable dinnerware from fallen areca leaves, offering a sustainable alternative to plastic, paper, and bagasse plates.
          </p>
          
          <div className="mt-4">
            <h4 className="font-semibold text-lg">Founders:</h4>
            <ul className="list-disc pl-5">
              <li>
                <a href="https://www.linkedin.com/in/avinash-rao-baaa768/" className="text-blue-500 hover:underline">
                  Avinash Rao
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/athishay-jain-389a7b19/" className="text-blue-500 hover:underline">
                  Atishay Jain
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-lg">Website:</h4>
            <a href="https://agrileaf.in/" className="text-blue-500 hover:underline">
              agrileaf.in
            </a>
          </div>
        </div>
      )}
    </div>
      <div className="bg-[#ebe6e0] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      </div>
      <div className="bg-[#ebe6e0] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      </div>
    </div>

    <div className="text-center mt-16 lg:mt-32 mb-16">
      <h2 className="text-2xl lg:text-4xl font-gotham font-light mb-4">
        "EMPOWERING AMBITIOUS ENTREPRENEURS TO UNLOCK<br />
        THEIR DREAMS AND DRIVE TRANSFORMATIVE CHANGE."
      </h2>
    </div>
  </div>
);
}
export default Portfolio