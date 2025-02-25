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
                <span className="text-emerald-400 font-regular font-playfairdisplay">The Right Capital</span><br />
                <span className="text-emerald-400 font-regular font-playfairdisplay">Partner To </span>
                <span className="italic text-emerald-400 font-playfairdisplay">Unlock</span><br />
                <span className="text-emerald-400 font-playfairdisplay">Your </span>
                <span className="text-blue-950 italic font-playfairdisplay">Potential</span>
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
              <div className="aspect-square bg-blue-950 flex items-center justify-center rounded-br-[75px]">
                <div className="text-white w-12 h-12 transform ">
                  <img src="../src/assets/images/img1.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-emerald-400 flex items-center justify-center">
                <span className="text-white text-4xl">e<sup>x</sup></span>
              </div>
              <div className="aspect-square">
                <img 
                  src="../src/assets/images/image2.jpg"
                  alt="Business growth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-emerald-400 flex items-center justify-center">
                <div className="text-white text-4xl">∞</div>
              </div>
              <div className="aspect-square">
                <img 
                  src="../src/assets/images/image3.jpg"
                  alt="Business growth"
                  className="w-full h-full object-cover rounded-br-[75px]"
                />
              </div>
              <div className="aspect-square bg-blue-950 flex items-center justify-center rounded-bl-[75px]">
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
              <div className="aspect-square bg-emerald-400 flex items-center justify-center">
                <span className="text-white text-4xl">e<sup>x</sup></span>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute mb-4 pt-11 left-52 transform -translate-x-1/2 lg:bottom-16 lg:left-56">
            <div className="border border-blue-950 rounded-full p-4">
              <ArrowDown className="w-16 h-16 text-blue-900" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Pointers Section */}

      <div className="min-h-screen bg-[#e6e6e6] flex flex-col  items-center justify-center p-6 my-10">
      <h1 className="text-2xl font-bold text-gray-700 font-playfairdisplayb self-start mb-8">Key Pointers/Messages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-5xl w-full pb-5 min-h-[500px]">
        {/* Row 1 */}
        <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
        </div>

        <div className="text-grey-700 text-2xl font-playfairdisplayb py-8 border-2 border-teal-500 rounded shadow-md flex flex-col items-center">
          <p className="text-center pb-4">
            Implementing industry-leading practices.
          </p>
          <img src="https://img.icons8.com/ios-filled/50/white/gear.png" alt="Implementing industry-leading practices" />
        </div>
        <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
        </div>

        <div className="text-grey-700 text-2xl font-playfairdisplayb py-8 rounded border-2 border-teal-500 shadow-md flex flex-col items-center">
          <p className="text-center pb-4">
            Tailored growth strategies.
          </p>
          <img src="https://img.icons8.com/ios-filled/50/white/presentation.png" alt="Tailored growth strategies" />

        </div>
        {/* Row 2 (Additional boxes for 4+4 layout) */}
        <div className="bg-teal-500 text-black text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center">
          <p className="text-center">
            Expanding Professional Networks.
          </p>
          <img src="https://img.icons8.com/ios-filled/50/006d77/team.png" alt="Building collaborative teams" />

        </div>

        <div className="bg-[#e6e6e6] text-black p-4 rounded shadow-md flex flex-col items-center">
        </div>

        <div className="bg-teal-500 text-black text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center">
          <p className="text-center">
            Offering Specialized Industry Knowledge.
          </p>
          <img src="https://img.icons8.com/ios-filled/50/006d77/strategy.png" alt="Strategic partnerships" />

        </div>
        <div className="bg-[#e6e6e6] text-black p-4 rounded shadow-md flex flex-col items-center">
        </div>
      </div>

      <h2 className="text-2xl font-playfairdisplayb text-black mt-12 mx-4 text-center lg:text-3xl">
        “We are conscientious capitalists committed to fostering innovation and growth by bringing emerging and unrecognized entrepreneurs into the mainstream.”
      </h2>
    </div>
    </div>
  );
}

export default HomePage;