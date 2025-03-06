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
            "Build companies on a foundation of integrity and purposeful growth.\"\n\n• Help transformative SMEs realise their full potential.\n• Revolutionize SME investment by being a committed and dependable partner.",
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
      const Criteria = () => {
  return (
    <div className='#ebe6e0'>
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

    {/* investment criteria */}
    <div className="min-h-screen bg-[#ebe6e0] bg-[url('../src/assets/images/bgErrow.png')] bg-cover bg-center h-full w-full flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-playfairdisplay text-black mb-8 self-start">Investment criteria</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-5 max-w-6xl w-full pb-2 h-auto lg:min-h-[500px]">
        {/* Row 1 */}

           <motion.div
                whileHover={{
                  rotateY: 180, 
                }}
                transition={{
                  duration: 0.6, 
                  ease: "easeInOut", 
                }}
                className="bg-[#00dbba] text-black text-lg lg:text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center"
                style={{
                  perspective: '1000px', 
                  transformStyle: 'preserve-3d', 
                }}
              >
                {/* Front Side */}
                <motion.div
                  className="flex flex-col items-center"
                  style={{
                    backfaceVisibility: 'hidden', 
                  }}
                >
                  <p 
          className="text-center">
          Disrupting the status 
          quo: Supporting 
          businesses with 
          fresh perspectives 
          and unorthodox 
          approaches to age-old challenges</p>
                  
                </motion.div>
          
                {/* Back Side */}
                <motion.div
                  className="absolute top-0 flex flex-col items-center p-2"
                  style={{
                    backfaceVisibility: 'hidden', 
                    transform: 'rotateY(180deg)', 
                  }}
                >
                  <p 
          className="text-center">
          Disrupting the status 
          quo: Supporting 
          businesses with 
          fresh perspectives 
          and unorthodox 
          approaches to age-old challenges</p>
                
          
                </motion.div>
              </motion.div>

        <div className="p-4 rounded shadow-md flex flex-col items-center">
        </div>


          <motion.div
                whileHover={{
                  rotateY: 180, 
                }}
                transition={{
                  duration: 0.6, 
                  ease: "easeInOut", 
                }}
                className="text-gray-700 text-lg lg:text-2xl font-playfairdisplayb py-8 rounded border-2 border-[#00dbba] shadow-md flex flex-col items-center"
                style={{
                  perspective: '1000px', 
                  transformStyle: 'preserve-3d', 
                }}
              >
                {/* Front Side */}
                <motion.div
                  className="flex flex-col items-center"
                  style={{
                    backfaceVisibility: 'hidden', 
                  }}
                >
                 <p className="text-center">
          Growth-oriented 
          entrepreneurs: 
          Partnering with 
          founders focused on 
          sustainable growth.</p>
                  
                </motion.div>
          
                {/* Back Side */}
                <motion.div
                  className="absolute top-0 flex flex-col items-center p-2"
                  style={{
                    backfaceVisibility: 'hidden', 
                    transform: 'rotateY(180deg)', 
                  }}
                >
                 <p className="text-center">
          Growth-oriented 
          entrepreneurs: 
          Partnering with 
          founders focused on 
          sustainable growth.</p>
                
          
                </motion.div>
              </motion.div>

          <div className=" p-4 rounded shadow-md flex flex-col items-center">
        </div>  

          <motion.div
                whileHover={{
                  rotateY: 180, 
                }}
                transition={{
                  duration: 0.6, 
                  ease: "easeInOut", 
                }}
                className="text-gray-700 text-lg lg:text-2xl font-playfairdisplayb py-8 rounded border-2 border-[#00dbba] shadow-md flex flex-col items-center"
                style={{
                  perspective: '1000px', 
                  transformStyle: 'preserve-3d', 
                }}
              >
                {/* Front Side */}
                <motion.div
                  className="flex flex-col items-center"
                  style={{
                    backfaceVisibility: 'hidden', 
                  }}
                >
                 <p className="text-center">
                 Proven track records: 
          Engaging with 
          businesses that have 
          validated concepts 
          and demonstrated 
          market appeal.</p>
                  
                </motion.div>
          
                {/* Back Side */}
                <motion.div
                  className="absolute top-0 flex flex-col items-center p-2"
                  style={{
                    backfaceVisibility: 'hidden', 
                    transform: 'rotateY(180deg)', 
                  }}
                >
                 <p className="text-center">
                 Proven track records: 
          Engaging with 
          businesses that have 
          validated concepts 
          and demonstrated 
          market appeal.</p>
                
          
                </motion.div>
              </motion.div>

          
        {/* Row 2 (Additional boxes for 4+4 layout) */}
        <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
        </div> 


          <motion.div
                whileHover={{
                  rotateY: 180, 
                }}
                transition={{
                  duration: 0.6, 
                  ease: "easeInOut", 
                }}
                className="bg-[#03045e] text-white text-lg lg:text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center"
                style={{
                  perspective: '1000px', 
                  transformStyle: 'preserve-3d', 
                }}
              >
                {/* Front Side */}
                <motion.div
                  className="flex flex-col items-center"
                  style={{
                    backfaceVisibility: 'hidden', 
                  }}
                >
                 <p className="text-center">
                 Scalability potential: 
          Supporting teams 
          with strong 
          implementation 
          skills and significant 
          growth potential.</p>
                  
                </motion.div>
          
                {/* Back Side */}
                <motion.div
                  className="absolute top-0 flex flex-col items-center p-2"
                  style={{
                    backfaceVisibility: 'hidden', 
                    transform: 'rotateY(180deg)', 
                  }}
                >
                 <p className="text-center">
                 Scalability potential: 
          Supporting teams 
          with strong 
          implementation 
          skills and significant 
          growth potential.</p>
                
          
                </motion.div>
              </motion.div>

          <div className="p-4 rounded shadow-md flex flex-col items-center">
          </div> 
          <motion.div
                whileHover={{
                  rotateY: 180, 
                }}
                transition={{
                  duration: 0.6, 
                  ease: "easeInOut", 
                }}
                className="bg-[#00dbba] text-black text-lg lg:text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center"
                style={{
                  perspective: '1000px', 
                  transformStyle: 'preserve-3d', 
                }}
              >
                {/* Front Side */}
                <motion.div
                  className="flex flex-col items-center"
                  style={{
                    backfaceVisibility: 'hidden', 
                  }}
                >
                 <p className="text-center">
                 Disrupting the status 
          quo: Supporting 
          businesses with 
          fresh perspectives 
          and unorthodox 
          approaches to ageold challenges</p>
                  
                </motion.div>
          
                {/* Back Side */}
                <motion.div
                  className="absolute top-0 flex flex-col items-center p-2"
                  style={{
                    backfaceVisibility: 'hidden', 
                    transform: 'rotateY(180deg)', 
                  }}
                >
                 <p className="text-center">
                 Disrupting the status 
          quo: Supporting 
          businesses with 
          fresh perspectives 
          and unorthodox 
          approaches to ageold challenges</p>
                
          
                </motion.div>
              </motion.div>

          <div className="p-4 rounded shadow-md flex flex-col items-center">
          </div> 
      </div>

      <h2 className="text-2xl lg:text-4xl lg:px-40 font-gotham font-thin text-black mt-12 text-center lg:pb-20">
        “EMPOWERING AMBITIOUS ENTREPRENEURS TO UNLOCK THEIR DREAMS AND DRIVE TRANSFORMATIVE CHANGE.”
      </h2>
    </div>
    </div>
    
  );
};


export default Criteria