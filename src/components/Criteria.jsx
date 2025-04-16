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
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative h-64 w-full cursor-pointer rounded border-2 bg-[#00dbba] text-black shadow-md"
                            style={{
                              perspective: '1000px',
                              transformStyle: 'preserve-3d',
                            }}
                          >
                            {/* Front Side - Now includes matching border */}
                            <motion.div
                              className="absolute inset-0 flex flex-col items-center justify-center rounded border-2 bg-[#00dbba] text-black p-4"
                              style={{
                                backfaceVisibility: 'hidden',
                                zIndex: 10,
                              }}
                            >
                              <p className="pb-4 text-center font-bold text-lg lg:text-2xl font-playfairdisplayb lg:pb-10">
                              Disrupting the status 
                              </p>
                              <img
                                className="h-16 w-16 bg-[#00dbba] lg:h-20 lg:w-20 self-start"
                                src="../src/assets/InImage/beaker.png"
                                alt="Front side"
                              />
                            </motion.div>
                          
                            {/* Back Side - Also includes matching border */}
                            <motion.div
                              className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 bg-[#00dbba] text-black p-2"
                              style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                zIndex: 5,
                              }}
                            >
                              <p className="pb-4 text-center text-lg lg:text-2xl font-playfairdisplayb italic">
                              Supporting 
                              businesses with 
                              fresh perspectives 
                              and unorthodox 
                              approaches to age-old challenges                              </p>
                            </motion.div>
                          </motion.div>

        <div className="p-4 rounded shadow-md flex flex-col items-center">
        </div>


              <motion.div
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative h-64 w-full cursor-pointer rounded border-2 border-[#00dbba] text-black shadow-md"
                            style={{
                              perspective: '1000px',
                              transformStyle: 'preserve-3d',
                            }}
                          >
                            {/* Front Side - Now includes matching border */}
                            <motion.div
                              className="absolute inset-0 flex flex-col items-center justify-center rounded border-2 border-[#00dbba] text-black p-4"
                              style={{
                                backfaceVisibility: 'hidden',
                                zIndex: 10,
                              }}
                            >
                              <p className="pb-4 text-center font-bold text-lg lg:text-2xl font-playfairdisplayb lg:pb-10">
                              Growth-oriented 
                               entrepreneurs
                              </p>
                              <img
                                className="h-16 w-16 border-[#00dbba] lg:h-20 lg:w-20 self-start"
                                src="../src/assets/InImage/tailored.png"
                                alt="Front side"
                              />
                            </motion.div>
                          
                            {/* Back Side - Also includes matching border */}
                            <motion.div
                              className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 border-[#00dbba] text-black p-2"
                              style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                zIndex: 5,
                              }}
                            >
                              <p className="pb-4 text-center text-lg lg:text-2xl font-playfairdisplayb italic">
                              Partnering with 
          founders focused on 
          sustainable growth.                             </p>
                            </motion.div>
                          </motion.div>

          <div className=" p-4 rounded shadow-md flex flex-col items-center">
        </div>  

              <motion.div
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative h-64 w-full cursor-pointer rounded border-2 border-[#00dbba] text-black shadow-md"
                            style={{
                              perspective: '1000px',
                              transformStyle: 'preserve-3d',
                            }}
                          >
                            {/* Front Side - Now includes matching border */}
                            <motion.div
                              className="absolute inset-0 flex flex-col items-center justify-center rounded border-2 border-[#00dbba] text-black p-4"
                              style={{
                                backfaceVisibility: 'hidden',
                                zIndex: 10,
                              }}
                            >
                              <p className="pb-4 text-center font-bold text-lg lg:text-2xl font-playfairdisplayb lg:pb-10">
                              Proven track records
                              </p>
                              <img
                                className="h-16 w-16 border-[#00dbba] lg:h-20 lg:w-20 self-start"
                                src="../src/assets/InImage/impliment.png"
                                alt="Front side"
                              />
                            </motion.div>
                          
                            {/* Back Side - Also includes matching border */}
                            <motion.div
                              className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 border-[#00dbba] text-black p-2"
                              style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                zIndex: 5,
                              }}
                            >
                              <p className="pb-4 text-center text-lg lg:text-2xl font-playfairdisplayb italic">
                              Engaging with 
          businesses that have 
          validated concepts 
          and demonstrated 
          market appeal.                            </p>
                            </motion.div>
                          </motion.div>
        {/* Row 2 (Additional boxes for 4+4 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-5 max-w-6xl w-full pb-2 h-auto">
        </div> 

              
               <motion.div
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative h-64 w-full cursor-pointer rounded border-2 bg-[#03045e] text-black shadow-md"
                            style={{
                              perspective: '1000px',
                              transformStyle: 'preserve-3d',
                            }}
                          >
                            {/* Front Side - Now includes matching border */}
                            <motion.div
                              className="absolute inset-0 flex flex-col items-center justify-center rounded border-2 bg-[#03045e] text-white p-4"
                              style={{
                                backfaceVisibility: 'hidden',
                                zIndex: 10,
                              }}
                            >
                              <p className="pb-4 text-center font-bold text-lg lg:text-2xl font-playfairdisplayb lg:pb-10">
                              Scalability potential 
                              </p>
                              <img
                                className="h-16 w-16 bg-[#03045e] lg:h-20 lg:w-20 self-start"
                                src="../src/assets/InImage/beaker.png"
                                alt="Front side"
                              />
                            </motion.div>
                          
                            {/* Back Side - Also includes matching border */}
                            <motion.div
                              className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 bg-[#03045e] text-white p-2"
                              style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                zIndex: 5,
                              }}
                            >
                              <p className="pb-4 text-center text-lg lg:text-2xl font-playfairdisplayb italic">
                              Supporting teams 
with strong 
implementation 
skills and significant 
growth potential.                           </p>
                            </motion.div>
                          </motion.div>

          <div className="pt-4 rounded shadow-md flex flex-col items-center">
          </div>
         
              <motion.div
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative h-64 w-full cursor-pointer rounded border-2 bg-[#00dbba] text-black shadow-md"
                            style={{
                              perspective: '1000px',
                              transformStyle: 'preserve-3d',
                            }}
                          >
                            {/* Front Side - Now includes matching border */}
                            <motion.div
                              className="absolute inset-0 flex flex-col items-center justify-center rounded border-2 bg-[#00dbba] text-black p-4"
                              style={{
                                backfaceVisibility: 'hidden',
                                zIndex: 10,
                              }}
                            >
                              <p className="pb-4 text-center font-bold text-lg lg:text-2xl font-playfairdisplayb lg:pb-10">
                              Beyond metrics
                              </p>
                              <img
                                className="h-16 w-16 bg-[#00dbba] lg:h-20 lg:w-20 self-start"
                                src="../src/assets/InImage/basket.png"
                                alt="Front side"
                              />
                            </motion.div>
                          
                            {/* Back Side - Also includes matching border */}
                            <motion.div
                              className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 bg-[#00dbba] text-black p-2"
                              style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                zIndex: 5,
                              }}
                            >
                              <p className="pb-4 text-center text-lg lg:text-2xl font-playfairdisplayb italic">
                              Collaborating with 
exceptional teams 
equipped with agility 
and a vision for 
enduring success.                             </p>
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