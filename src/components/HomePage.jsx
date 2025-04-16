import React, {useState} from 'react';
import { ArrowDown, Users, Settings, LineChart, Cog } from 'lucide-react';
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x:-100, opacity: 0},
  visible: {
    x:0,
    opacity: 1,
    transition: { duration:0.5, delay:delay },
  },
});

function HomePage() {

  return (
    <div className="min-h-screen bg-[#e6e6e6]">
      {/* Hero Section */}
      <section className="relative bg-[#e6e6e6] min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-light mb-6 lg:text-[90px]">
                <motion.span
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="text-[#00dbba] font-regular font-playfairdisplay">The Right Capital</motion.span><br />
                 <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-[#00dbba] font-regular font-playfairdisplay">Partner To </motion.span>
               <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="italic text-[#00dbba] font-playfairdisplay">Unlock</motion.span><br />
               <motion.span
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="text-[#00dbba] font-playfairdisplay">Your </motion.span>
               <motion.span
                variants={container(1)}
                initial="hidden"
                animate="visible"
                 className="text-[#03045e] italic font-playfairdisplay">Potential</motion.span>
              </h1>
            </div>
   
            {/* Right Content - Grid of Images */}
            <motion.div
            initial={{ x: 100, opacity:0 }}
            animate={{ x: 0, opacity:1 }}
            transition={{ duration: 1, delay:1.2 }}
            className="lg:w-1/2 grid grid-cols-3">
              <div className="aspect-square">
                <img 
                  src="../src/assets/images/img1.jpg"
                  alt="Business analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-br-[75px]">
                <motion.div
                whileHover={{
                  x: 60,         
                  opacity: 0,    
                }}
                transition={{
                  duration: 0.5,  
                }}
                className="text-white w-full h-full p-4 transform ">
                <img src="../src/assets/InImage/Arrow.png" alt="arrow" />
                </motion.div>
              </div>
              <motion.div
              whileHover={{
                rotateY: 180, // Flip the element on the X-axis by 180 degrees
              }}
              transition={{
                duration: 0.5, // Duration of the flip transition
              }}
              className="aspect-square bg-[#00dbba] flex items-center justify-center">
              <div className="text-white w-full h-full p-4 transform ">
                  <img src="../src/assets/InImage/Errow.png" alt="Errow" />
                </div>
              </motion.div>
              <div className="aspect-square">
                <img 
                  src="../src/assets/images/img2.jpg"
                  alt="Business growth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-white flex items-center justify-center">
              <div className="text-white w-full h-full p-4 transform ">
                  <motion.img
                   whileHover={{ rotate: 360 }}
                   transition={{ duration: 1 }}
                  src="../src/assets/InImage/bplus.png" alt="Errow" />
                </div>
                </div>
              <div className="aspect-square">
                <img 
                  src="../src/assets/images/img3.jpg"
                  alt="Business growth"
                  className="w-full h-full object-cover rounded-br-[75px]"
                />
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-bl-[75px]">
                <div className="text-white w-full h-full p-4 transform ">
                <motion.img
                   whileHover={{ rotate: 360 }}
                   transition={{ duration: 1 }}
                  src="../src/assets/InImage/cross.png" alt="cross" />
                </div>
              </div>
              <div className="aspect-square">
                <img 
                  src="../src/assets/images/img4.jpg"
                  alt="Business analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-[#00dbba] flex items-center justify-center">
              <div className="text-white w-full h-full transform ">
                  <motion.img
                   whileHover={{
                    rotateX: 180, // Flip the element on the X-axis by 180 degrees
                  }}
                  transition={{
                    duration: 0.5, // Duration of the flip transition
                  }}
                   src="../src/assets/InImage/infinity.png" alt="infinity" />
                </div>
                 </div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute mb-4 pt-11 left-52 transform -translate-x-1/2 lg:bottom-16 lg:left-56">
            <div className="border border-[#03045e] rounded-full p-4">
              <a href="#thesis"><ArrowDown className="w-16 h-16 text-[#03045e] animate-bounce" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pointers Section */}

      <div className="bg-[#e6e6e6] bg-[url('../src/assets/images/bgInfinity.png')] bg-cover bg-center h-full w-full  flex flex-col  items-center justify-center p-6 lg:mx-20 my-10">
      <h1 className="text-2xl lg:text-3xl text-black font-playfairdisplay self-start mb-8">Key Pointers/Messages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-5xl w-full pb-5 lg:pl-36">
        {/* Row 1 */}
        <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
        </div>

    <motion.div
  whileHover={{ rotateY: 180 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  className="relative h-64 w-full cursor-pointer rounded border-2 border-[#00dbba] shadow-md"
  style={{
    perspective: '1000px',
    transformStyle: 'preserve-3d',
  }}
>
  {/* Front Side - Now includes matching border */}
  <motion.div
    className="absolute inset-0 flex flex-col items-center justify-center rounded border-2 border-[#00dbba] bg-tranparent p-4"
    style={{
      backfaceVisibility: 'hidden',
      zIndex: 10,
    }}
  >
    <p className="pb-4 text-center font-bold text-lg lg:text-2xl font-playfairdisplayb lg:pb-10 ">
      Implementing industry-leading practices.
    </p>
    <img
      className="h-16 w-16 text-[#00dbba] lg:h-20 lg:w-20 self-start"
      src="../src/assets/InImage/impliment.png"
      alt="Front side"
    />
  </motion.div>

  {/* Back Side - Also includes matching border */}
  <motion.div
    className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 border-[#00dbba] bg-transparent p-4"
    style={{
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)',
      zIndex: 5,
    }}
  >
    <p className="pb-4 text-center text-lg lg:text-2xl font-playfairdisplayb font-bold lg:pb-10">
      Revolutionizing the industry with innovation.
    </p>
    <img
      className="h-16 w-16 text-[#00dbba] lg:h-20 lg:w-20 self-start"
      src="../src/assets/InImage/impliment.png"
      alt="Back side"
    />
  </motion.div>
</motion.div>

        <div className="p-4 rounded shadow-md flex flex-col items-center">
        </div>

    <motion.div
  whileHover={{ rotateY: 180 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  className="relative h-64 w-full cursor-pointer rounded border-2 border-[#00dbba] shadow-md"
  style={{
    perspective: '1000px',
    transformStyle: 'preserve-3d',
  }}
>
  {/* Front Side - Now includes matching border */}
  <motion.div
    className="absolute inset-0 flex flex-col items-center justify-center rounded border-2 border-[#00dbba] bg-tranparent p-4"
    style={{
      backfaceVisibility: 'hidden',
      zIndex: 10,
    }}
  >
    <p className="pb-4 text-center font-bold text-lg lg:text-2xl font-playfairdisplayb lg:pb-16">
    Tailored growth strategies.
    </p>
    <img
      className="h-16 w-16 text-[#00dbba] lg:h-20 lg:w-20 self-start"
      src="../src/assets/InImage/tailored.png"
      alt="Front side"
    />
  </motion.div>

  {/* Back Side - Also includes matching border */}
  <motion.div
    className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 border-[#00dbba] bg-transparent p-4"
    style={{
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)',
      zIndex: 5,
    }}
  >
    <p className="pb-4 text-center text-lg lg:text-2xl font-playfairdisplayb font-bold lg:pb-16">
    Tailored growth strategies.
    </p>
    <img
      className="h-16 w-16 text-[#00dbba] lg:h-20 lg:w-20 self-start"
      src="../src/assets/InImage/tailored.png"
      alt="Back side"
    />
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
    <p className="pb-4 text-center font-bold text-lg lg:text-2xl font-playfairdisplayb lg:pb-10">
    Expanding Professional Networks.
    </p>
    <img
      className="h-16 w-16 bg-[#00dbba] lg:h-20 lg:w-20 self-start"
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
    <p className="pb-4 text-center text-lg lg:text-2xl font-playfairdisplayb font-bold lg:pb-10">
    Expanding Professional Networks.
    </p>
    <img
      className="h-16 w-16 bg-[#00dbba] lg:h-20 lg:w-20 self-start"
      src="../src/assets/InImage/expanding.png"
      alt="Back side"
    />
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
    <p className="pb-4 text-center font-bold text-lg lg:text-2xl font-playfairdisplayb lg:pb-10">
    Offering Specialized Industry Knowledge.
    </p>
    <img
      className="h-16 w-16 bg-[#00dbba] lg:h-20 lg:w-20 self-start lg:pb-2"
      src="../src/assets/InImage/offering.png"
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
    <p className="pb-4 text-center text-lg lg:text-2xl font-playfairdisplayb font-bold lg:pb-10">
    Offering Specialized Industry Knowledge.
    </p>
    <img
      className="h-16 w-16 bg-[#00dbba] lg:h-20 lg:w-20 self-start lg:pb-2"
      src="../src/assets/InImage/offering.png"
      alt="Back side"
    />
  </motion.div>
</motion.div>

        <div className="bg-[#e6e6e6] text-black p-4 rounded shadow-md flex flex-col items-center">
        </div>
      </div>

      <h2 className="text-lg font-playfairdisplayb text-black my-12 mx-4 lg:mr-32 text-center lg:text-3xl">
        “We are conscientious capitalists committed to fostering innovation and growth by bringing emerging and unrecognized entrepreneurs into the mainstream.”
      </h2>
    </div>
    </div>
  );
}

export default HomePage;