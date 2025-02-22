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
              <h1 className="text-8xl font-light mb-6">
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
              {/* <div className="aspect-square bg-navy-blue flex items-center justify-center">
                //  <div className="text-white text-4xl">+</div>  </div>*/}
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
          <div className="absolute bottom-10 left-52 transform -translate-x-1/2">
            <div className="border border-gray-500 rounded-full p-4">
              <ArrowDown className="w-14 h-14 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Pointers Section */}
      <section className="py-20 bg[#e6e6e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-800 mb-16">Key Pointers/Messages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-emerald-400 transition-all">
                <div className="w-16 h-16 bg-emerald-400 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-2">Expanding professional networks.</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-emerald-400 transition-all">
                <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Implementing industry-leading practices.</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-emerald-400 transition-all">
                <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Tailored growth strategies</h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-emerald-400 transition-all">
                <div className="w-16 h-16 bg-emerald-400 rounded-lg flex items-center justify-center mb-4">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-2">Offering specialized industry knowledge.</h3>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-20 text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl font-light text-gray-700 italic">
              "We are conscientious capitalists committed to fostering innovation and growth by bringing emerging and unrecognized entrepreneurs into the mainstream."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;