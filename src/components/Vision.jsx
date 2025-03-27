import React from 'react';
import eyes from "../assets/InImage/eyes.png";
import bow from "../assets/InImage/bow.png";
import hands from "../assets/InImage/hands.png";
import { motion } from "framer-motion";

 const data = [
        {
          title: "Vision",
          description:
            "To build a vibrant ecosystem that empowers SMEs to lead innovation, transform industries, and shape a prosperous future for India.",
             image: eyes ,// Placeholder for an actual SVG or image
         color: "bg-[#03045e]"
        },
        {
          title: "Purpose",
          description:
            "• Build companies on a foundation of integrity and purposeful growth.\n• Help transformative SMEs realise their full potential.\n• Revolutionize SME investment by being a committed and dependable partner.",
          image: bow, // Placeholder image
          color: "bg-[#00dbba]",
        },
        {
          title: "Culture",
          description:
            "• Foster collaboration through synergistic skillsets.\n• Empower enterprising individuals driven by our vision.\n• Embrace continuous growth and learning to enhance expertise and adapt to challenges.",
          image: hands, // Placeholder icon
          color: "bg-[#03045e]",
        },
      ];

export const Vision = () => {
  return (
    <div>
         <div className="p-8 flex flex-col items-center">
            <div className="grid md:grid-cols-3 gap-2 ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6"
                >
                  <div
                    className={`w-36 h-36 flex items-center justify-center rounded-full mx-auto my-4 p-4 ${item.color}`}
                  >
                    <img
                       src={item.image}
                        w-full 
                        height-full 
                        alt={item.title}
                        className='rounded text-5xl' />
                  </div>
                  <motion.h2
                  whileInView={{opacity:1, x: 0}}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5}}
                  className="text-2xl lg:text-4xl font-playfairdisplayb text-[#03045e] mb-2">
                    {item.title}
                  </motion.h2>
                  <motion.p
                  whileInView={{opacity:1, x: 0}}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1}}
                  className="text-black text-2xl lg:text-4xl font-playfairdisplay text-left whitespace-pre-line">{item.description}</motion.p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-3xl lg:text-4xl lg:pb-10 font-playfairdisplay text-gray-800">
              Investing in the future: Backing companies poised to redefine their industries.
            </p>
          </div>
    </div>
  )
}
