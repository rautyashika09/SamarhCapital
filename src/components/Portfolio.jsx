import React from 'react'

const Portfolio = () => {
  return (
    <div className='px-20'>
    <h1 className="text-[#f5700d] font-gothamb text-2xl my-8">PORTFOLIO</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="relative">
        <img 
          src="../src/assets/images/image2.jpg" 
          alt="Investment Growth" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* <div className="flex items-center justify-center"> */}
      <div className="grid grid-cols-2 lg:px-20 lg:pb-20">
      <div className="aspect-square bg-blue-950 flex items-center justify-center">
                <div className="text-white w-12 h-12 transform ">
                  <img src="../src/assets/images/img1.png" alt="arrow" />
                </div>
              </div>
              <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
        </div>
        <div className="aspect-square bg-[#00dbba] flex items-center justify-center rounded-full">
                <div className="text-white w-12 h-12 transform ">
                  <img src="../src/assets/images/img1.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-[#00dbba] flex items-center justify-center">
                <div className="text-white w-12 h-12 transform ">
                  <img src="../src/assets/images/img1.png" alt="arrow" />
                </div>
              </div>
        </div>
      </div>
    {/* </div> */}

    <h2 className="text-4xl lg:font-5xl font-playfairdisplayb mb-8">Portfolio</h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
      <div className="bg-white rounded-lg flex justify-between shadow-md p-6 hover:shadow-lg transition-shadow">
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
      <h2 className="text-4xl font-gotham font-light mb-4">
        "EMPOWERING AMBITIOUS ENTREPRENEURS TO UNLOCK<br />
        THEIR DREAMS AND DRIVE TRANSFORMATIVE CHANGE."
      </h2>
    </div>
  </div>
);
}
export default Portfolio