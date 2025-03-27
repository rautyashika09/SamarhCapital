import React from 'react';
import eyes from "../assets/InImage/eyes.png";
import bow from "../assets/InImage/bow.png";
import hands from "../assets/InImage/hands.png";
import { motion } from "framer-motion";

   
      const Criteria = () => {
  return (
    <div className='#ebe6e0'>
       

    {/* investment criteria */}
    <div className="min-h-screen bg-[#ebe6e0] bg-[url('../src/assets/images/bgErrow.png')] bg-cover bg-center h-full w-full flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-playfairdisplay text-black mb-8 self-start">Investment criteria</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-5 max-w-6xl w-full pb-2 h-auto ">
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
          className="text-center p-2 font-playfairdisplayb font-bold pb-10">
          Disrupting the status 
          quo</p>

          <img
          className="text-[#00dbba] h-16 w-16 lg:h-24 lg:w-24 self-start p-2"
          src="../src/assets/InImage/beaker.png"
          alt="Implementing industry-leading practices"
        />
                  
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
          className="text-center font-playfairdisplayi italic  pt-4">
          Supporting 
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
                 <p className="text-center font-playfairdisplayb font-bold pb-10">
          Growth-oriented 
          entrepreneurs
        </p>
        <img
          className="text-[#00dbba] h-16 w-16 lg:h-24 lg:w-24 self-start p-2"
          src="../src/assets/InImage/tailored.png"
          alt="Implementing industry-leading practices"
        />    
                </motion.div>
          
                {/* Back Side */}
                <motion.div
                  className="absolute top-0 flex flex-col items-center p-2"
                  style={{
                    backfaceVisibility: 'hidden', 
                    transform: 'rotateY(180deg)', 
                  }}
                >
                 <p className="text-center font-playfairdisplay italic pt-12"> 
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
                className="text-gray-700 p-2 text-lg lg:text-2xl font-playfairdisplayb py-8 rounded border-2 border-[#00dbba] shadow-md flex flex-col items-center"
                style={{
                  perspective: '1000px', 
                  transformStyle: 'preserve-3d', 
                }}
              >
                {/* Front Side */}
                <motion.div
                  className= "flex flex-col items-center"
                  style={{
                    backfaceVisibility: 'hidden', 
                  }}
                >
                 <p className="text-center font-playfairdisplayb font-bold pb-10">
                 Proven track records
                 </p>
                 <img
          className="text-[#00dbba] h-16 w-16 lg:h-24 lg:w-24 self-start p-2"
          src="../src/assets/InImage/impliment.png"
          alt="Implementing industry-leading practices"
        />
                </motion.div>
          
                {/* Back Side */}
                <motion.div
                  className="absolute top-0 flex flex-col items-center p-2"
                  style={{
                    backfaceVisibility: 'hidden', 
                    transform: 'rotateY(180deg)', 
                  }}
                >
                 <p className="text-center font-playfairdisplay italic pt-10"> 
          Engaging with 
          businesses that have 
          validated concepts 
          and demonstrated 
          market appeal.</p>
                
          
                </motion.div>
              </motion.div>

          
        {/* Row 2 (Additional boxes for 4+4 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-5 max-w-6xl w-full pb-2 h-auto">
        </div> 

              
           <motion.div
                whileHover={{
                  rotateY: 180, 
                }}
                transition={{
                  duration: 0.6, 
                  ease: "easeInOut", 
                }}
                className="bg-[#03045e] text-white p-2 text-lg lg:text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center"
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
          className="text-center font-playfairdisplayb font-bold pb-10 p-2">
          Scalability potential 
          </p>

          <img
          className="text-[#00dbba] h-16 w-16 lg:h-24 lg:w-24 self-start p-2"
          src="../src/assets/InImage/hands.png"
          alt="Implementing industry-leading practices"
        />
                  
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
          className="text-center font-playfairdisplayi italic  pt-4">
         Supporting teams 
with strong 
implementation 
skills and significant 
growth potential.</p>
                
          
                </motion.div>
              </motion.div>



             

          <div className="pt-4 rounded shadow-md flex flex-col items-center">
          </div>
          <motion.div
                whileHover={{
                  rotateY: 180, 
                }}
                transition={{
                  duration: 0.6, 
                  ease: "easeInOut", 
                }}
                className="bg-[#00dbba] text-black text-lg lg:text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center"
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
                 <p className="text-center font-playfairdisplay font-bold pb-20 p-2">
                 Beyond metrics</p>
                 <img
          className="text-[#00dbba] h-16 w-16 lg:h-24 lg:w-24 self-start p-2"
          src="../src/assets/InImage/basket.png"
          alt="Implementing industry-leading practices"
        />
                </motion.div>
          
                {/* Back Side */}
                <motion.div
                  className="absolute top-0 flex flex-col items-center p-2"
                  style={{
                    backfaceVisibility: 'hidden', 
                    transform: 'rotateY(180deg)', 
                  }}
                >
                 <p className="text-center font-playfairdisplay italic  pt-4">
                 Collaborating with 
exceptional teams 
equipped with agility 
and a vision for 
enduring success.</p>
                
          
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