import React from 'react'
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    // about Us
<div id='about'>
  
          <section className="bg-[#00dbba] pl-2 min-h full flex items-center justify-center my-6">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Text Content */}
              <div className="mt-10 ">
                <motion.h2
                whileInView={{opacity:1, x:0}}
                initial={{ opacity: 0, x: -100 }}
                transition={{duration: 0.5}}
                className="text-5xl lg:text-6xl font-playfairdisplayb text-white">
                   About Us
                </motion.h2>
                <motion.p
                whileInView={{opacity:1, x:0}}
                initial={{ opacity: 0, x: -100 }}
                transition={{duration: 1}}
                className="text-3xl lg:text-5xl font-playfairdisplayi mt-4 mr-4 lg:mt-4 text-[#03045e]">
                   We are dedicated to becoming a
                               trusted partner 
                              for emerging leaders from the SME segment - helping
                              them shape the future of India's market landscape.
                </motion.p>
              </div>
        
              {/* Right Side - Grid Layout for Icons & Images */}
              <motion.div
              whileInView={{opacity:1, x: 0}}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7}}
              className="grid grid-cols-2 py-20 mt-10 pl-12 p-28 lg:p-20">
              <div className="aspect-square flex items-center justify-center rounded">
                        <div className="text-white w-full h-full transform ">
                          <motion.img
                           whileHover={{ rotate: 360 }}
                           transition={{ duration: 1 }}
                          src="../src/assets/InImage/bplus.png" alt="arrow" />
                        </div>
                      </div>
                      <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-b-[75px]">
                        <div className="text-white transform ">
                          <motion.img
                          whileHover={{
                            rotateY: 180, // Flip the element on the X-axis by 180 degrees
                          }}
                          transition={{
                            duration: 0.5, // Duration of the flip transition
                          }}
                          src="../src/assets/InImage/Arrow.png" alt="Errow" />
                        </div>
                      </div>
                      <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-br-[75px]">
                        <div className="text-white w-full h- transform p-4">
                          <motion.img
                          whileHover={{
                            rotateX: 180, // Flip the element on the X-axis by 180 degrees
                          }}
                          transition={{
                            duration: 0.5, // Duration of the flip transition
                          }}
                          src="../src/assets/InImage/infinity.png" alt="arrow" />
                        </div>
                      </div>
                      
              </motion.div>
            </div>
          </section>
{/* 
        // content */}

          <div className="bg-[#e6e6e6] bg-[url('../src/assets/images/bgErrow.png')] bg-cover bg-center h-full w-full  flex flex-col  items-center justify-center p-6 my-10">

          
      <h2 className="text-lg font-playfairdisplayb text-black my-12 mx-4 text-center lg:text-3xl pb-4">
      The Indian SME segment has historically been underserved in financial markets. However, transformative changes over the past decade have set the stage for significant growth in this sector:      </h2>
              
              <div className="hidden lg:grid grid-cols-1 md:grid-cols-4 max-w-5xl w-full pb-5 lg:pl-36">
                {/* Row 1 */}
                <div className="p-4 rounded shadow-md flex flex-col items-center">
                </div>

                 <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative h-64 w-full cursor-pointer rounded border-[1px] border-solid border-[#00dbba] shadow-md"
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front Side - Now includes matching border */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded border-[1px] border-solid border-[#00dbba] bg-tranparent p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      zIndex: 10,
                    }}
                  >
                    <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb lg:pb-16">
                    Rising Domestic Demand
                    </p>
                    <img
                      className="h-16 w-16 text-[#00dbba] lg:h-20 lg:w-20 lg:self-start"
                      src="../src/assets/InImage/tailored.png"
                      alt="Front side"
                    />
                  </motion.div>
                
                  {/* Back Side - Also includes matching border */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-[1px] border-solid border-[#00dbba] bg-transparent p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      zIndex: 5,
                    }}
                  >
                    <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb italic">
                    Increased per capita income is driving local demand, creating new opportunities for SMEs.
                    </p>
                   
                  </motion.div>
                </motion.div>

                <div className="p-4 rounded shadow-md flex flex-col items-center">
                </div>
        
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative h-64 w-full cursor-pointer rounded border-[1px] border-solid border-[#00dbba] shadow-md"
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front Side - Now includes matching border */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded border-[1px] border-solid border-[#00dbba] bg-tranparent p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      zIndex: 10,
                    }}
                  >
                    <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb lg:pb-16">
                    Government Initiatives
                    </p>
                    <img
                      className="h-16 w-16 text-[#00dbba] lg:h-20 lg:w-20 lg:self-start"
                      src="../src/assets/InImage/impliment.png"
                      alt="Front side"
                    />
                  </motion.div>
                
                  {/* Back Side - Also includes matching border */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-[1px] border-solid border-[#00dbba] bg-transparent p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      zIndex: 5,
                    }}
                  >
                    <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb italic">
                    Policies like ‘Ease of Doing Business’ and ‘Make in India’ are fostering SME growth.                    </p>
                   
                  </motion.div>
                </motion.div>
              
                {/* Row 2 (Additional boxes for 4+4 layout) */}
               
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
                <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb lg:pb-10">
                Access to Technology and Skilled Labor
                </p>
                <img
                  className="h-16 w-16 bg-[#00dbba] lg:h-20 lg:w-20 lg:self-start"
                  src="../src/assets/InImage/expanding.png"
                  alt="Front side"
                />
              </motion.div>
            
              {/* Back Side - Also includes matching border */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 bg-[#00dbba] text-black p-4"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  zIndex: 5,
                }}
              >
                <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb italic">
                SMEs now benefit from advanced technologies and an increasingly skilled workforce.
                </p>
              </motion.div>
            </motion.div>
            
                <div className="text-black p-4 rounded shadow-md flex flex-col items-center">
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
                <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb lg:pb-10">
                Evolving Business Ecosystem
                </p>
                <img
                  className="h-16 w-16 bg-[#00dbba] lg:h-20 lg:w-20 lg:self-start"
                  src="../src/assets/InImage/offering.png"
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
                <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb italic">
                A shift toward lean manufacturing and value engineering has created a favorable environment for SME expansion.
                </p>
              </motion.div>
            </motion.div>
                <div className="bg-[#e6e6e6] text-black p-4 rounded shadow-md flex flex-col items-center">
                </div>
              </div>

              <div className="grid lg:hidden grid-cols-1 md:grid-cols-4 max-w-5xl w-full pb-5 lg:pl-36">
                {/* Row 1 */}
                <div className="p-4 rounded shadow-md flex flex-col items-center">
                </div>

                 <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative h-64 w-full cursor-pointer rounded border-[1px] border-solid border-[#00dbba] shadow-md"
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front Side - Now includes matching border */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded border-[1px] border-solid border-[#00dbba] bg-tranparent p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      zIndex: 10,
                    }}
                  >
                    <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb lg:pb-16">
                    Rising Domestic Demand
                    </p>
                    <img
                      className="h-16 w-16 text-[#00dbba] lg:h-20 lg:w-20 lg:self-start"
                      src="../src/assets/InImage/tailored.png"
                      alt="Front side"
                    />
                  </motion.div>
                
                  {/* Back Side - Also includes matching border */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-[1px] border-solid border-[#00dbba] bg-transparent p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      zIndex: 5,
                    }}
                  >
                    <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb italic">
                    Increased per capita income is driving local demand, creating new opportunities for SMEs.
                    </p>
                   
                  </motion.div>
                </motion.div>

                <div className="p-4 rounded shadow-md flex flex-col items-center">
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
                <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb lg:pb-10">
                Access to Technology and Skilled Labor
                </p>
                <img
                  className="h-16 w-16 bg-[#00dbba] lg:h-20 lg:w-20 lg:self-start"
                  src="../src/assets/InImage/expanding.png"
                  alt="Front side"
                />
              </motion.div>
            
              {/* Back Side - Also includes matching border */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 bg-[#00dbba] text-black p-4"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  zIndex: 5,
                }}
              >
                <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb italic">
                SMEs now benefit from advanced technologies and an increasingly skilled workforce.
                </p>
              </motion.div>
            </motion.div>
              
                {/* Row 2 (Additional boxes for 4+4 layout) */}
               
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative h-64 w-full cursor-pointer rounded border-[1px] border-solid border-[#00dbba] shadow-md"
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front Side - Now includes matching border */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded border-[1px] border-solid border-[#00dbba] bg-tranparent p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      zIndex: 10,
                    }}
                  >
                    <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb lg:pb-16">
                    Government Initiatives
                    </p>
                    <img
                      className="h-16 w-16 text-[#00dbba] lg:h-20 lg:w-20 lg:self-start"
                      src="../src/assets/InImage/impliment.png"
                      alt="Front side"
                    />
                  </motion.div>
                
                  {/* Back Side - Also includes matching border */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-[1px] border-solid border-[#00dbba] bg-transparent p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      zIndex: 5,
                    }}
                  >
                    <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb italic">
                    Policies like ‘Ease of Doing Business’ and ‘Make in India’ are fostering SME growth.                    </p>
                   
                  </motion.div>
                </motion.div>
            
            
                <div className="text-black p-4 rounded shadow-md flex flex-col items-center">
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
                <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb lg:pb-10">
                Evolving Business Ecosystem
                </p>
                <img
                  className="h-16 w-16 bg-[#00dbba] lg:h-20 lg:w-20 lg:self-start"
                  src="../src/assets/InImage/offering.png"
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
                <p className="pb-8 text-center text-lg lg:text-xl font-playfairdisplayb italic">
                A shift toward lean manufacturing and value engineering has created a favorable environment for SME expansion.
                </p>
              </motion.div>
            </motion.div>
                <div className="bg-[#e6e6e6] text-black p-4 rounded shadow-md flex flex-col items-center">
                </div>
              </div>

            </div>
            </div>
  )
}

export default AboutUs