import React from 'react'

const Thesis = () => {
  return (
    <div>
         <section className="bg-[#00dbba] min-h-screen flex items-center justify-center my-6">
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text Content */}
      <div className="-mt-40">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfairdisplayb text-white">
          Our thesis
        </h2>
        <p className="lg:text-4xl font-playfairdisplayi mr-16 md:text-xl mt-4 text-[#03045e]">
          The Indian SME segment has historically been underserved by the financial 
          markets – Transformative changes over the past decade have set the stage 
          for significant growth.
        </p>
      </div>

      {/* Right Side - Grid Layout for Icons & Images */}
      <div className="grid grid-cols-2 py-20 mt-10 pl-18">
      <div className="aspect-square flex items-center justify-center rounded-full">
                <div className="text-white w-full h-full transform ">
                  <img src="../src/assets/InImage/bplus.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
                  alt="Business analysis"
                  className="w-full h-full object-cover rounded-b-full"
                />
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-tl-[75px]">
                <div className="text-white transform ">
                  <img src="../src/assets/InImage/Errow.png" alt="Errow" />
                </div>
              </div>
              <div className="aspect-square bg-teal-450 flex items-center justify-center">
                <div className="text-white w-full h- transform ">
                  <img src="../src/assets/InImage/infinity.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
                  alt="Business analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-br-[75px]">
                <div className="text-white w-full h-full px-4 pt-4 transform ">
                  <img src="../src/assets/InImage/tArrow.png" alt="plus" />
                </div>
              </div>
      </div>
    </div>
  </section>

{/* drivers */}
  <div className="bg-gray-100 p-8 mt-4 lg:px-40">
      {/* Growth Drivers Section */}
      <h2 className="text-3xl font-gothamb font-thin uppercase selt-start mb-6">Growth Drivers</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[250px]">
      <div className=" bg-[#00dbba] text-grey-700 text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-20">
          Buoyant domestic 
          demand.
          </p>
          <img src="../src/assets/InImage/basket.png" alt="Tailored growth strategies" className='h-24 w-24 self-start '/>
        </div>
        <div className="bg-[#03045e] text-white text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-20">
          Benign fiscal 
          incentives
          </p>
          <img src="../src/assets/InImage/home.png" alt="Tailored growth strategies" className='h-24 w-24 self-start ' />
        </div>
        <div className="bg-[#00dbba] text-grey-700 text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-20">
          Availability of 
          technology and skilled 
          labour
          </p>
          <img src="../src/assets/InImage/screw.png" alt="Tailored growth strategies" className='h-24 w-24 self-start pl-2 pb-2' />
        </div>
        <div className="bg-[#03045e] text-white text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-20 px-1">
          Evolving business 
          ecosystem
          </p>
          <img src="../src/assets/InImage/circle.png" alt="Tailored growth strategies" className='h-24 w-24 self-start pl-3 pb-3'/>
        </div>
      </div>

      {/* Commitment Statement */}
      <div className="text-center my-12">
        <h2 className="text-2xl mx-10 md:text-4xl lg:text-4xl text-start font:gotham uppercase leading-relaxed">
          "We are committed to being a trusted partner for unorthodox and emerging entrepreneurs in reshaping the industrial landscape."
        </h2>
      </div> 

      {/* Core Sectors Section */}
      <h2 className="text-3xl font-gothamb font-thin uppercase selt-start mb-6">Core Sectors</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[250px]">
      <div className=" bg-[#00dbba] text-grey-700 text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-20">
          Engineering
          </p>
          <img src="../src/assets/InImage/setting.png" alt="Tailored growth strategies" className='h-24 w-24 self-start' />
        </div>
        <div className="bg-[#03045e] text-white text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-20">
         Chemicals
          </p>
          <img src="../src/assets/InImage/beaker.png" alt="Tailored growth strategies" className='h-24 w-24 self-end'/>
        </div>
        <div className="bg-[#00dbba] text-grey-700 text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-br-[75px]">
          <p className="text-center pb-20">
          Business services
          </p>
          <img src="../src/assets/InImage/tool.png" alt="Tailored growth strategies" className='h-24 w-24 self-start'/>
        </div>
        <div className="bg-[#03045e] text-white text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-br-[75px]">
          <p className="text-center pb-20">
          Consumer
          </p>
          <img src="../src/assets/InImage/peoples.png" alt="Tailored growth strategies" className='h-24 w-24 self-start' />
        </div>
      </div>




    </div>
    </div>
   

);
  
}

export default Thesis