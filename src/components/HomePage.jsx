import React from 'react';
import { ArrowDown, Users, Settings, LineChart, Cog } from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#e6e6e6]">
      {/* Hero Section */}
      <section className="relative bg-[#e6e6e6] min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-light mb-6 lg:text-8xl">
                <span className="text-[#00dbba] font-regular font-playfairdisplay">The Right Capital</span><br />
                <span className="text-[#00dbba] font-regular font-playfairdisplay">Partner To </span>
                <span className="italic text-[#00dbba] font-playfairdisplay">Unlock</span><br />
                <span className="text-[#00dbba] font-playfairdisplay">Your </span>
                <span className="text-[#03045e] italic font-playfairdisplay">Potential</span>
              </h1>
            </div>
   
            {/* Right Content - Grid of Images */}
            <div className="lg:w-1/2 grid grid-cols-3">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
                  alt="Business analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-br-[75px]">
                <div className="text-white w-full h-full p-4 transform ">
                  <img src="../src/assets/InImage/Arrow.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-[#00dbba] flex items-center justify-center">
              <div className="text-white w-full h-full p-4 transform ">
                  <img src="../src/assets/InImage/Errow.png" alt="Errow" />
                </div>
              </div>
              <div className="aspect-square">
                <img 
                  src="../src/assets/images/image2.jpg"
                  alt="Business growth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-white flex items-center justify-center">
              <div className="text-white w-full h-full p-4 transform ">
                  <img src="../src/assets/InImage/bplus.png" alt="Errow" />
                </div>
                </div>
              <div className="aspect-square">
                <img 
                  src="../src/assets/images/image3.jpg"
                  alt="Business growth"
                  className="w-full h-full object-cover rounded-br-[75px]"
                />
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-bl-[75px]">
                <div className="text-white w-full h-full p-4 transform ">
                  <img src="../src/assets/InImage/cross.png" alt="cross" />
                </div>
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
                  alt="Business analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-[#00dbba] flex items-center justify-center">
              <div className="text-white w-full h-full transform ">
                  <img src="../src/assets/InImage/infinity.png" alt="infinity" />
                </div>
                 </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute mb-4 pt-11 left-52 transform -translate-x-1/2 lg:bottom-16 lg:left-56">
            <div className="border border-[#03045e] rounded-full p-4">
              <ArrowDown className="w-16 h-16 text-[#03045e]" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Pointers Section */}

      <div className="min-h-screen bg-[#e6e6e6] flex flex-col  items-center justify-center p-6 mx-20 my-10">
      <h1 className="text-2xl lg:text-3xl text-black font-playfairdisplay self-start mb-8">Key Pointers/Messages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-5xl w-full pb-5 min-h-[500px]">
        {/* Row 1 */}
        <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
        </div>

        <div className="text-grey-700 text-2xl font-playfairdisplayb py-8 border-2 border-[#00dbba] rounded shadow-md flex flex-col items-center">
          <p className="text-center pb-4">
            Implementing industry-leading practices.
          </p>
          <img className='text-[#00dbba] h-full w-full' 
          src="../src/assets/InImage/hand.png" alt="Implementing industry-leading practices" />
        </div>
        <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
        </div>

        <div className="text-grey-700 text-2xl font-playfairdisplayb py-8 rounded border-2 border-[#00dbba] shadow-md flex flex-col items-center">
          <p className="text-center pb-4">
            Tailored growth strategies.
          </p>
          <img src="https://img.icons8.com/ios-filled/50/white/presentation.png" alt="Tailored growth strategies" />

        </div>
        {/* Row 2 (Additional boxes for 4+4 layout) */}
        <div className="bg-[#00dbba] text-black text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center">
          <p className="text-center">
            Expanding Professional Networks.
          </p>
          <img src="https://img.icons8.com/ios-filled/50/006d77/team.png" alt="Building collaborative teams" />

        </div>

        <div className="bg-[#e6e6e6] text-black p-4 rounded shadow-md flex flex-col items-center">
        </div>

        <div className="bg-[#00dbba] text-black text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center">
          <p className="text-center">
            Offering Specialized Industry Knowledge.
          </p>
          <img src="https://img.icons8.com/ios-filled/50/006d77/strategy.png" alt="Strategic partnerships" />

        </div>
        <div className="bg-[#e6e6e6] text-black p-4 rounded shadow-md flex flex-col items-center">
        </div>
      </div>

      <h2 className="text-2xl font-playfairdisplayb text-black my-12 mx-4 text-center lg:text-3xl">
        “We are conscientious capitalists committed to fostering innovation and growth by bringing emerging and unrecognized entrepreneurs into the mainstream.”
      </h2>
    </div>
    </div>
  );
}

export default HomePage;