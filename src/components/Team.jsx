import React from 'react';
import { ArrowDown, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div id='team' className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="relative bg-[#00dbba] min-h-screen">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:pl-10 lg:mb-0">
          <motion.h1
         whileInView={{opacity:1, x: 0}}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 0.5}}
          className="text-6xl lg:text-7xl font-playfairdisplay text-[white] mb-6">Our team</motion.h1>
          <motion.p
          whileInView={{opacity:1, x: 0}}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1}}
          className="text-3xl lg:text-5xl font-playfairdisplay text-[#03045e]">
            At Samarsh Capital, our team combines deep investment expertise and
            strategic advisory experience. Led by seasoned professionals, we specialize in
            identifying high-potential opportunities and nurturing them to deliver long-term value.
          </motion.p>
        </div>

        {/* Right Content - Grid of Images */}
        <motion.div
        whileInView={{opacity:1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.7}}
        className="lg:w-1/3 grid grid-cols-2 p-10 lg:p-2 pr-10">
        <div className="aspect-square flex items-center justify-center rounded-full">
                <div className="text-[#03045e] transform ">
                  <motion.img
                   whileHover={{ rotate: 360 }}
                   transition={{ duration: 1 }}
                  src="../src/assets/InImage/wPlus.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-b-full">
                <div className="text-white transform p-4">
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
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-br-[75px]">
                <div className="text-white p-4 transform ">
                  <motion.img
                  whileHover={{
                    rotateX: 180, // Flip the element on the X-axis by 180 degrees
                  }}
                  transition={{
                    duration: 0.5, // Duration of the flip transition
                  }}
                  src="../src/assets/InImage/tInfinity.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square">
                <img 
                  src="../src/assets/images/img4.jpg"
                  alt="Business analysis"
                  className="w-full h-full object-cover rounded-t-full"
                />
              </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <div className="absolute mt-4 bottom-2 lg:bottom-10 left-1/2 transform -translate-x-1/2">
<div className="border border-[#03045e] rounded-full p-4">
             <a href="#investment"><ArrowDown className="w-16 h-16 text-[#03045e] animate-bounce" /></a> 
            </div>
                    </div>
      </div>
    </section>

    {/* Investment Team Section */}
    <section id='investment' className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
        whileInView={{opacity:1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5}}
        className="text-4xl lg:text-5xl font-playfairdisplay text-center text-[#03045e] mb-16">Investment team</motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <img 
              src="../src/assets/investors/Sandeep.JPG"
              alt="Sandeep Shenoy"
              className="w-48 h-48 rounded-full mb-6"
            />
            <div className="text-start">
              <div className="flex items-start justify-start gap-2">
                <motion.h3
                 whileInView={{opacity:1, x: 0}}
                 initial={{ opacity: 0, x: -100 }}
                 transition={{ duration: 0.5}}
                className="text-3xl font-playfairdisplayb font-bold text-[#03045e]">Sandeep Shenoy</motion.h3>
                <a href="https://www.linkedin.com/in/sandeep-shenoy-2a51b32/" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <motion.p
               whileInView={{opacity:1, x: 0}}
               initial={{ opacity: 0, x: -100 }}
               transition={{ duration: 1}}
              className="text-black text-2xl font-playfairdisplayi italic mb-2">Founder and Managing Partner</motion.p>
              <motion.p
               whileInView={{opacity:1, x: 0}}
               initial={{ opacity: 0, x: -100 }}
               transition={{ duration: 1}}
              className="text-black font-playfairdisplayb text-2xl max-w-xl">
                Sandeep comes with deep sectoral expertise having tracked the SME segment over a period of 25 years. He has built a strong reputation as an astute stock picker having identified multiple opportunities at a nascent stage and nurtured them to become multi-baggers.
              </motion.p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <img 
              src="../src/assets/investors/Shreyas.jpeg"
              alt="Shreyas Ravikumar"
              className="w-48 h-48 rounded-full mb-6"
            />
            <div className="text-start">
              <div className="flex items-start justify-start gap-2">
                <motion.h3 
                 whileInView={{opacity:1, x: 0}}
                 initial={{ opacity: 0, x: 100 }}
                 transition={{ duration: 0.5}}
                className="text-3xl font-playfairdisplayb font-bold text-[#03045e]">Shreyas Ravikumar</motion.h3>
                <a href="https://www.linkedin.com/in/shreyas-ravikumar-048b444b/%20/" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <motion.p
               whileInView={{opacity:1, x: 0}}
               initial={{ opacity: 0, x: 100 }}
               transition={{ duration: 1 }}
              className="text-black text-2xl font-playfairdisplayi italic mb-2">Director</motion.p>
              <motion.p
               whileInView={{opacity:1, x: 0}}
               initial={{ opacity: 0, x: 100 }}
               transition={{ duration: 1}}
              className="text-black font-playfairdisplayb text-2xl max-w-xl">
                Shreyas brings a decade of deal-making experience in investment banking, with strong skills in fundamental analysis and valuation. His expertise lies in identifying high-potential opportunities and crafting solutions that drive long-term growth.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Advisory Team Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
         whileInView={{opacity:1, y: 0}}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.5}}
        className="text-4xl lg:text-5xl font-playfairdisplay text-center text-[#03045e] mb-16">Advisory team</motion.h2>
        
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
            <motion.h3
             whileInView={{opacity:1, x: 0}}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 0.5}}
            className="text-3xl font-playfairdisplayb font-bold text-[#03045e]">Mohandas Pai</motion.h3>
                <a href="https://www.linkedin.com/in/mohandaspai/" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <motion.p
               whileInView={{opacity:1, x: 0}}
               initial={{ opacity: 0, x: -100 }}
               transition={{ duration: 0.5}}
              className="text-black font-playfairdisplayb text-2xl max-w-xl">
                A Padma Shri recipient and prominent voice in investing and corporate governance, Mr Pai brings a strong sense of corporate governance and fund management experience. He has been involved in setting up and administration of several funds and he has been a advisor to boards of several funds and family offices.
              </motion.p>
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
                <motion.h3 
                 whileInView={{opacity:1, x: 0}}
                 initial={{ opacity: 0, x: 100 }}
                 transition={{ duration: 0.5}}
                className="text-3xl font-playfairdisplayb font-bold text-[#03045e]">K Ullas Kamath</motion.h3>
                <a href="https://www.linkedin.com/in/ullas-kamath-586a03287/" className="text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <motion.p 
               whileInView={{opacity:1, x: 0}}
               initial={{ opacity: 0, x: 100 }}
               transition={{ duration: 0.5}}
              className="text-black font-playfairdisplayb text-2xl max-w-xl">
                Mr. Kamath is leading expert on Indian consumer markets having previously been the Joint Managing Director at Jyothy Labs Ltd (JLL), a leading FMCG company in India. He brings a strong suite operational management experience to the table.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}


export default Team