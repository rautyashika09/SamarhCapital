import React from 'react';
import { ArrowDown, Linkedin } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="relative bg-emerald-400 min-h-screen">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-6xl font-light font-playfairdisplay text-white mb-8">Our team</h1>
          <p className="text-2xl text-white/90 leading-relaxed">
            At Samarsh Capital, our team combines deep investment expertise and
            strategic advisory experience. Led by seasoned professionals, we specialize in
            identifying high-potential opportunities and nurturing them to deliver long-term value.
          </p>
        </div>

        {/* Right Content - Grid of Images */}
        <div className="lg:w-1/3 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-full p-8">
            <div className="w-16 h-16 bg-navy-blue rounded-full"></div>
          </div>
          <div className="bg-navy-blue rounded-full p-8">
            <span className="text-4xl text-white">e<sup>x</sup></span>
          </div>
          <div className="bg-navy-blue rounded-full p-8">
            <div className="w-16 h-16 bg-emerald-400"></div>
          </div>
          <div className="overflow-hidden rounded-full">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-12 h-12 text-white animate-bounce" />
        </div>
      </div>
    </section>

    {/* Investment Team Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-light text-navy-blue mb-16">Investment team</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <img 
              src="../src/assets/investors/sandeep.Jpg+"
              alt="Sandeep Shenoy"
              className="w-48 h-48 rounded-full mb-6"
            />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-2xl font-medium text-navy-blue">Sandeep Shenoy</h3>
                <a href="#" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-600 italic mb-4">Founder and Managing Partner</p>
              <p className="text-gray-700 max-w-md">
                Sandeep comes with deep sectoral expertise having tracked the SME segment over a period of 25 years. He has built a strong reputation as an astute stock picker having identified multiple opportunities at a nascent stage and nurtured them to become multi-baggers.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Shreyas Ravikumar"
              className="w-48 h-48 rounded-full mb-6"
            />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-2xl font-medium text-navy-blue">Shreyas Ravikumar</h3>
                <a href="#" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-600 italic mb-4">Director</p>
              <p className="text-gray-700 max-w-md">
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
        <h2 className="text-4xl text-center font-light text-navy-blue mb-16">Advisory team</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Advisor 1 */}
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Mohandas Pai"
              className="w-48 h-48 rounded-full mb-6"
            />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-2xl font-medium text-navy-blue">Mohandas Pai</h3>
                <a href="#" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-700 max-w-md mt-4">
                A Padma Shri recipient and prominent voice in investing and corporate governance, Mr Pai brings a strong sense of corporate governance and fund management experience. He has been involved in setting up and administration of several funds and he has been a advisor to boards of several funds and family offices.
              </p>
            </div>
          </div>

          {/* Advisor 2 */}
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="K Ullas Kamath"
              className="w-48 h-48 rounded-full mb-6"
            />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-2xl font-medium text-navy-blue">K Ullas Kamath</h3>
                <a href="#" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-700 max-w-md mt-4">
                Mr. Kamath is leading expert on Indian consumer markets having previously been the Joint Managing Director at Jyothy Labs Ltd (JLL), a leading FMCG company in India. He brings a strong suite operational management experience to the table hello.
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