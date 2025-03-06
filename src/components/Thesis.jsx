import React from 'react'
import { motion } from "framer-motion";


const Thesis = () => {
  return (
    <div id='thesis'>
         <section className="bg-[#00dbba] min-h full flex items-center justify-center my-6">
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text Content */}
      <div className="lg:-mt-40">
        <motion.h2
        whileInView={{opacity:1, x:0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 0.5}}
        className="text-4xl lg:text-6xl font-playfairdisplayb text-white">
          Our thesis
        </motion.h2>
        <motion.p
        whileInView={{opacity:1, x:0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 1}}
        className="text-2xl lg:text-5xl font-playfairdisplayi mr-4 lg:mt-4 text-[#03045e]">
          The Indian SME segment has historically been underserved by the financial 
          markets – Transformative changes over the past decade have set the stage 
          for significant growth.
        </motion.p>
      </div>

      {/* Right Side - Grid Layout for Icons & Images */}
      <motion.div
      whileInView={{opacity:1, x: 0}}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.7}}
      className="grid grid-cols-2 py-20 mt-10 pl-12 p-20">
      <div className="aspect-square flex items-center justify-center rounded">
                <div className="text-white w-full h-full transform ">
                  <motion.img
                   whileHover={{ rotate: 360 }}
                   transition={{ duration: 1 }}
                  src="../src/assets/InImage/bplus.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square">
                <img 
                  src="../src/assets/images/img6.png"
                  alt="Business analysis"
                  className="w-full h-full object-cover rounded-b-full"
                />
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-tl-[75px]">
                <div className="text-white transform ">
                  <motion.img
                  whileHover={{
                    rotateY: 180, // Flip the element on the X-axis by 180 degrees
                  }}
                  transition={{
                    duration: 0.5, // Duration of the flip transition
                  }}
                  src="../src/assets/InImage/Errow.png" alt="Errow" />
                </div>
              </div>
              <div className="aspect-square bg-teal-450 flex items-center justify-center">
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
              <div className="aspect-square">
                <img 
                  src="../src/assets/images/img2.jpg"
                  alt="Business analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-br-[75px]">
                <motion.div
                 whileHover={{
                  x: 60,         // Moves the arrow to the right
                  opacity: 0,    // Makes the arrow invisible
                }}
                transition={{
                  duration: 0.5,  // Duration of the transition (how long it takes)
                }}
                className="text-white w-full h-full px-4 pt-4 transform ">
                  <img src="../src/assets/InImage/tArrow.png" alt="plus" />
                </motion.div>
              </div>
      </motion.div>
    </div>
  </section>

{/* drivers */}
  <div className="bg-[#ebe6e0] bg-[url('../src/assets/images/bgArrow.png')] bg-cover bg-center h-full w-full p-8 mt-4 lg:px-40 lg:pb-10 lg:mb-10">
      {/* Growth Drivers Section */}
      <h2 className="text-3xl font-gothamb font-thin uppercase selt-start mb-6">Growth Drivers</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[250px]">
      <motion.div
      initial={{ scale: 0.5 }} 
      whileInView={{ scale: 1 }} 
      transition={{
        duration: 0.5,
        ease: "easeInOut", 
      }}
      viewport={{ once: true }}
      className=" bg-[#00dbba] text-grey-700 text-lg lg:text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-16">
          Buoyant domestic 
          demand.
          </p>
          <img src="../src/assets/InImage/basket.png" alt="Tailored growth strategies" className='h-16 w-16 lg:h-24 lg:w-24 p-2 lg:self-end '/>
        </motion.div>
        <motion.div
      initial={{ scale: 0.5 }} 
      whileInView={{ scale: 1 }} 
      transition={{
        duration: 1,
        ease: "easeInOut", 
      }}
      viewport={{ once: true }}
        className="bg-[#03045e] text-white text-lg lg:text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-16">
          Benign fiscal 
          incentives
          </p>
          <img src="../src/assets/InImage/home.png" alt="Tailored growth strategies" className='h-16 w-16 lg:h-24 lg:w-24 p-2 lg:self-end' />
        </motion.div>
        <motion.div
      initial={{ scale: 0.5 }} 
      whileInView={{ scale: 1 }} 
      transition={{
        duration: 0.5,
        ease: "easeInOut", 
      }}
      viewport={{ once: true }}
        className="bg-[#00dbba] text-grey-700 text-lg lg:text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-16">
          Availability of 
          technology and skilled 
          labour
          </p>
          <img src="../src/assets/InImage/screw.png" alt="Tailored growth strategies" className='h-16 w-16 lg:h-24 lg:w-24 p-2 lg:self-end' />
        </motion.div>
        <motion.div
       initial={{ scale: 0.5 }} 
       whileInView={{ scale: 1 }} 
       transition={{
         duration: 0.5,
         ease: "easeInOut", 
       }}
       viewport={{ once: true }}
        className="bg-[#03045e] text-white text-lg lg:text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-16 px-1">
          Evolving business 
          ecosystem
          </p>
          <img src="../src/assets/InImage/circle.png" alt="Tailored growth strategies" className='h-16 w-16 lg:h-24 lg:w-24 p-2 lg:self-end'/>
        </motion.div>
      </div>

      {/* Commitment Statement */}
      <div className="text-center my-12">
        <h2 className="text-lg mx-10 md:text-3xl lg:text-4xl text-start font:gotham uppercase leading-relaxed">
          "We are committed to being a trusted partner for unorthodox and emerging entrepreneurs in reshaping the industrial landscape."
        </h2>
      </div> 

      {/* Core Sectors Section */}
      <h2 className="text-3xl font-gothamb font-thin uppercase selt-start mb-6">Core Sectors</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[250px]">
      <motion.div
      initial={{ scale: 0.5 }} 
      whileInView={{ scale: 1 }} 
      transition={{
        duration: 0.5,
        ease: "easeInOut", 
      }}
      viewport={{ once: true }}
      className=" bg-[#00dbba] text-grey-700 text-lg lg:text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-16">
          Engineering
          </p>
          <img src="../src/assets/InImage/setting.png" alt="Tailored growth strategies" className='h-16 w-16 lg:h-24 lg:w-24 p-2 lg:self-end' />
        </motion.div>
        <motion.div
      initial={{ scale: 0.5 }} 
      whileInView={{ scale: 1 }} 
      transition={{
        duration: 1,
        ease: "easeInOut", 
      }}
      viewport={{ once: true }}
        className="bg-[#03045e] text-white text-lg lg:text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-bl-[75px]">
          <p className="text-center pb-16">
         Chemicals
          </p>
          <img src="../src/assets/InImage/beaker.png" alt="Tailored growth strategies" className='h-16 w-16 lg:h-24 lg:w-24 p-2 self-end'/>
        </motion.div>
        <motion.div
      initial={{ scale: 0.5 }} 
      whileInView={{ scale: 1 }} 
      transition={{
        duration: 0.5,
        ease: "easeInOut", 
      }}
      viewport={{ once: true }}
      className="bg-[#00dbba] text-grey-700 text-lg lg:text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-br-[75px]">
          <p className="text-center pb-16">
          Business services
          </p>
          <img src="../src/assets/InImage/tool.png" alt="Tailored growth strategies" className='h-16 w-16 lg:h-24 lg:w-24 p-2 self-start'/>
        </motion.div>
        <motion.div
      initial={{ scale: 0.5 }} 
      whileInView={{ scale: 1 }} 
      transition={{
        duration: 1,
        ease: "easeInOut", 
      }}
      viewport={{ once: true }}
      className="bg-[#03045e] text-white text-lg lg:text-2xl font-playfairdisplayb pt-8 rounded shadow-md flex flex-col items-center rounded-br-[75px]">
          <p className="text-center pb-16">
          Consumer
          </p>
          <img src="../src/assets/InImage/peoples.png" alt="Tailored growth strategies" className='h-16 w-16 lg:h-24 lg:w-24 self-start' />
        </motion.div>
      </div>




    </div>
    </div>
   

);
  
}

export default Thesis;