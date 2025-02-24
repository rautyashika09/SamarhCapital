import React from 'react'

const Thesis = () => {
  return (
    <div>
         <section className="bg-teal-500 min-h-screen flex items-center justify-center my-6 p-8">
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text Content */}
      <div className="text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfairdisplayb text-white">
          Our thesis
        </h2>
        <p className="lg:text-5xl font-playfairdisplayi mr-20 md:text-xl mt-4 text-blue-950">
          The Indian SME segment has historically been underserved by the financial 
          markets – Transformative changes over the past decade have set the stage 
          for significant growth.
        </p>
      </div>

      {/* Right Side - Grid Layout for Icons & Images */}
      <div className="grid grid-cols-2">
      <div className="aspect-square bg-blue-950 flex items-center justify-center rounded-full">
                <div className="text-white w-12 h-12 transform ">
                  <img src="../src/assets/images/img1.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
                  alt="Business analysis"
                  className="w-full h-full object-cover rounded-b-full"
                />
              </div>
              <div className="aspect-square bg-blue-950 flex items-center justify-center rounded-tl-[75px]">
                <div className="text-white w-12 h-12 transform ">
                  <img src="../src/assets/images/img1.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-teal-450 flex items-center justify-center">
                <div className="text-white w-12 h-12 transform ">
                  <img src="../src/assets/images/img1.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
                  alt="Business analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-blue-950 flex items-center justify-center rounded-br-[75px]">
                <div className="text-white w-12 h-12 transform ">
                  <img src="../src/assets/images/img1.png" alt="arrow" />
                </div>
              </div>
      </div>
    </div>
  </section>

{/* drivers */}
  <div className="bg-gray-100 p-8 my-4 lg:px-40">
      {/* Growth Drivers Section */}
      <h2 className="text-3xl font-gothamb font-thin uppercase selt-start mb-6">Growth Drivers</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[250px]">
      <div className=" bg-teal-400 text-grey-700 text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center rounded-br-[75px]">
          <p className="text-center pb-4">
          Buoyant domestic 
          demand.
          </p>
          <img src="https://img.icons8.com/ios-filled/50/white/presentation.png" alt="Tailored growth strategies" />
        </div>
        <div className="bg-blue-950 text-white text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center rounded-br-[75px]">
          <p className="text-center pb-4">
          Benign fiscal 
          incentives
          </p>
          <img src="https://img.icons8.com/ios-filled/50/white/presentation.png" alt="Tailored growth strategies" />
        </div>
        <div className="bg-teal-400 text-grey-700 text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-4">
          Availability of 
          technology and skilled 
          labour
          </p>
          <img src="https://img.icons8.com/ios-filled/50/white/presentation.png" alt="Tailored growth strategies" />
        </div>
        <div className="bg-blue-950 text-white text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-4 px-1">
          Evolving business 
          ecosystem
          </p>
          <img src="https://img.icons8.com/ios-filled/50/white/presentation.png" alt="Tailored growth strategies" />
        </div>
      </div>

      {/* Commitment Statement */}
      <div className="text-center my-12">
        <h2 className="text-2xl mx-10 md:text-4xl lg:text-4xl font:gotham uppercase leading-relaxed">
          "We are committed to being a trusted partner for unorthodox and emerging entrepreneurs in reshaping the industrial landscape."
        </h2>
      </div> 

      {/* Core Sectors Section */}
      <h2 className="text-3xl font-gothamb font-thin uppercase selt-start mb-6">Core Sectors</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[250px]">
      <div className=" bg-teal-400 text-grey-700 text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-4">
          Engineering
          </p>
          <img src="https://img.icons8.com/ios-filled/50/white/presentation.png" alt="Tailored growth strategies" />
        </div>
        <div className="bg-blue-950 text-white text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-4">
         Chemicals
          </p>
          <img src="https://img.icons8.com/ios-filled/50/white/presentation.png" alt="Tailored growth strategies" />
        </div>
        <div className="bg-teal-400 text-grey-700 text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center rounded-br-[75px]">
          <p className="text-center pb-4">
          Business services
          </p>
          <img src="https://img.icons8.com/ios-filled/50/white/presentation.png" alt="Tailored growth strategies" />
        </div>
        <div className="bg-blue-950 text-white text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center rounded-br-[75px]">
          <p className="text-center pb-4">
          Consumer
          </p>
          <img src="https://img.icons8.com/ios-filled/50/white/presentation.png" alt="Tailored growth strategies" />
        </div>
      </div>




    </div>
    </div>
   

);
  
}

export default Thesis