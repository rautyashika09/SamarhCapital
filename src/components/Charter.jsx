import React from 'react'
import { motion } from 'framer-motion'
const Charter = () => {
  return (
    <div id='charter'>
        {/* Upper Section */}

        <section className="bg-[#00dbba] min-h full flex items-center pl-2 justify-center my-6">
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text Content */}
      <div className="mt-4 lg:-mt-40">
        <motion.h2
        whileInView={{opacity:1, x:0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 0.5}}
        className="text-4xl lg:text-6xl font-playfairdisplayb text-white">
          Our Charter
        </motion.h2>
        <motion.p
        whileInView={{opacity:1, x:0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 1}}
        className="text-2xl lg:text-5xl font-playfairdisplayi mr-4 lg:mt-4 text-[#03045e]">
          To build a vibrant ecosystem that empowers SMEs to lead innovation, transform industries, and shape a prosperous future for India
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
              <div className="aspect-square bg-[#00dbba] flex items-center justify-center rounded-tl-[75px]">
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
                {/* Purpose */}
                <div className="bg-[url('../src/assets/images/bgArrow.png')] bg-cover bg-center h-full w-full  flex flex-col  items-center justify-center ">
                <section className="min-h-full flex items-center justify-center my-6 py-5">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                 {/* Left Side - Text Content */}
      <div className="pl-2">
        <motion.h2
        whileInView={{opacity:1, x:0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 0.5}}
        className="text-4xl lg:text-6xl text-center lg:text-left font-playfairdisplayb text-[#03045e] pb-4">
          Purpose
        </motion.h2>
        <motion.ul
        whileInView={{opacity:1, x:0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 1}}
        className="text-xl lg:text-2xl font-gothamb text-center lg:text-left lg:mt-4 text-[#03045e]">
            <li className='pb-2'>Build companies on a foundation of integrity and purposeful growth.
            </li>
            <li className='pb-2'>Help transformative SMEs achieve their full potential.
            </li>
            <li className='pb-2'>Revolutionize SME investment by being a steadfast and reliable partner.
            </li>
        </motion.ul>
      </div>
                {/* right side */}
      <div className="pl-2">
        <motion.h2
        whileInView={{opacity:1, x:0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 0.5}}
        className="text-4xl lg:text-6xl text-center lg:text-left font-playfairdisplayb text-[#03045e] pb-4">
          Culture
        </motion.h2>
        <motion.ul
        whileInView={{opacity:1, x:0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 1}}
        className="text-xl lg:text-2xl text-center lg:text-left lg:mt-4 text-[#03045e] font-gothamb">
                <li className='pb-2'>Foster collaboration through synergistic skillsets.
                </li>
                <li className='pb-2'>Empower enterprising individuals driven by our vision.
                </li>
                <li className='pb-2'>Embrace continuous growth and learning to enhance expertise and adapt to challenges.
                </li>    
                    </motion.ul>
      </div>
</div>
</section>
</div>
    </div>
  )
}

export default Charter