import React from 'react'

const Portfolio = () => {
  return (
    <div>
    <h1 className="text-[#FF6B00] text-xl mb-8">PORTFOLIO</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="relative">
        <img 
          src="/investment-hand.jpg" 
          alt="Investment Growth" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="flex items-center justify-end gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#000066] w-32 h-32 flex items-center justify-center">
            <img src="/plus.svg" alt="Plus" className="w-16 h-16" />
          </div>
          <div className="bg-[#00FFD1] w-32 h-32 flex items-center justify-center">
            <img src="/infinity.svg" alt="Infinity" className="w-16 h-16" />
          </div>
          <div className="bg-[#00FFD1] w-32 h-32 flex items-center justify-center">
            <img src="/arrow.svg" alt="Arrow" className="w-16 h-16" />
          </div>
        </div>
      </div>
    </div>

    <h2 className="text-4xl font-playfair mb-8">Portfolio</h2>

    <div className="relative mb-8">
      <input
        type="search"
        placeholder="Search"
        className="w-64 bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
      />
      <svg className="w-5 h-5 absolute right-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <img 
          src="/agrileaf-logo.png" 
          alt="Agrileaf" 
          className="w-24 h-24 mx-auto mb-4"
        />
        <h3 className="text-2xl font-playfair text-center">Agrileaf</h3>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      </div>
    </div>

    <div className="text-center mt-32 mb-16">
      <h2 className="text-3xl font-bold mb-4">
        "EMPOWERING AMBITIOUS ENTREPRENEURS TO UNLOCK<br />
        THEIR DREAMS AND DRIVE TRANSFORMATIVE CHANGE."
      </h2>
    </div>
  </div>
);
}
export default Portfolio