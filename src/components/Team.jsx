import React from 'react';
import { ArrowDown, Linkedin } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="relative bg-[#00dbba] min-h-screen">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:pl-10 lg:mb-0">
          <h1 className="text-6xl lg:text-7xl font-playfairdisplay text-[white] mb-6">Our team</h1>
          <p className="text-3xl lg:text-5xl font-playfairdisplay text-[#03045e]">
            At Samarsh Capital, our team combines deep investment expertise and
            strategic advisory experience. Led by seasoned professionals, we specialize in
            identifying high-potential opportunities and nurturing them to deliver long-term value.
          </p>
        </div>

        {/* Right Content - Grid of Images */}
        <div className="lg:w-1/3 grid grid-cols-2">
        <div className="aspect-square bg-white flex items-center justify-center rounded-full">
                <div className="text-blue-950 w-12 h-12 transform ">
                  <img src="../src/assets/images/img1.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-blue-950 flex items-center justify-center rounded-b-full">
                <div className="text-white w-12 h-12 transform ">
                  <img src="../src/assets/images/img1.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-blue-950 flex items-center justify-center rounded-br-[75px]">
                <div className="text-white w-12 h-12 transform ">
                  <img src="../src/assets/images/img1.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
                  alt="Business analysis"
                  className="w-full h-full object-cover rounded-t-full"
                />
              </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-4 lg:bottom-10 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-12 h-12 text-white animate-bounce" />
        </div>
      </div>
    </section>

    {/* Investment Team Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-playfairdisplay text-center text-[#03045e] mb-16">Investment team</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <img 
              src="../src/assets/investors/sandeep.Jpg"
              alt="Sandeep Shenoy"
              className="w-48 h-48 rounded-full mb-6"
            />
            <div className="text-start">
              <div className="flex items-start justify-start gap-2">
                <h3 className="text-3xl font-playfairdisplayb font-bold text-[#03045e]">Sandeep Shenoy</h3>
                <a href="#" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-black text-2xl font-playfairdisplayi italic mb-2">Founder and Managing Partner</p>
              <p className="text-black font-playfairdisplayb text-2xl max-w-xl">
                Sandeep comes with deep sectoral expertise having tracked the SME segment over a period of 25 years. He has built a strong reputation as an astute stock picker having identified multiple opportunities at a nascent stage and nurtured them to become multi-baggers.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <img 
              src="../src/assets/investors/Shreyas.JPG"
              alt="Shreyas Ravikumar"
              className="w-48 h-48 rounded-full mb-6"
            />
            <div className="text-start">
              <div className="flex items-start justify-start gap-2">
                <h3 className="text-3xl font-playfairdisplayb font-bold text-[#03045e]">Shreyas Ravikumar</h3>
                <a href="#" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-black text-2xl font-playfairdisplayi italic mb-2">Director</p>
              <p className="text-black font-playfairdisplayb text-2xl max-w-xl">
                Shreyas brings a decade of deal-making experience in investment banking, with strong skills in fundamental analysis and valuation. His expertise lies in identifying high-potential opportunities and crafting solutions that drive long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Advisory Team Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-playfairdisplay text-center text-[#03045e] mb-16">Advisory team</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Advisor 1 */}
          <div className="flex flex-col items-center">
            <img 
              src='../src/assets/investors/Mohandas.jpg'
              alt="Mohandas Pai"
              className="w-48 h-48 rounded-full mb-6"
            />
            <div className="text-start">
            <div className="flex items-start justify-start gap-2">
            <h3 className="text-3xl font-playfairdisplayb font-bold text-[#03045e]">Mohandas Pai</h3>
                <a href="#" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-black font-playfairdisplayb text-2xl max-w-xl">
                A Padma Shri recipient and prominent voice in investing and corporate governance, Mr Pai brings a strong sense of corporate governance and fund management experience. He has been involved in setting up and administration of several funds and he has been a advisor to boards of several funds and family offices.
              </p>
            </div>
          </div>

          {/* Advisor 2 */}
          <div className="flex flex-col items-center">
            <img 
              src="../src/assets/investors/Ulas.jpg"
              alt="K Ullas Kamath"
              className="w-48 h-48 rounded-full mb-6"
            />
            <div className="text-start">
              <div className="flex items-start justify-start gap-2">
                <h3 className="text-3xl font-playfairdisplayb font-bold text-[#03045e]">K Ullas Kamath</h3>
                <a href="#" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-black font-playfairdisplayb text-2xl max-w-xl">
                Mr. Kamath is leading expert on Indian consumer markets having previously been the Joint Managing Director at Jyothy Labs Ltd (JLL), a leading FMCG company in India. He brings a strong suite operational management experience to the table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}


export default Team