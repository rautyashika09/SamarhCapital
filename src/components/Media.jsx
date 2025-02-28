import { ArrowDown, Linkedin } from 'lucide-react';
import { motion } from "framer-motion"
const Media = () => {
  const articles = [
    {
      title: "Public market vetersan Sandeep Shenoy floats PE fund, ropes in key LPs",
      image: "#", // Replace with actual image URL
    },
    {
      title: "Agrileaf secures INR 16 crore in growth funding led by Capital-A and Samarsh Capital",
      image: "#", // Replace with actual image URL
    },
  ];

  return (
    <div id='media' className="min-h-screen bg-white">
   <section className="relative bg-[#00dbba] min-h-screen">
      <div className="container px-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
        whileInView={{opacity:1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.7}}
        className="lg:w-1/2 pt:10 mb-10 lg:pl-10 lg:mb-0">
          <h1 className="text-6xl lg:text-7xl font-playfairdisplay text-[black] mb-6">Media and <span />
          Press releases</h1>
        </motion.div>

        {/* Right Content - Grid of Images */}
        <motion.div
        whileInView={{opacity:1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.7}}
        className="py-20 lg:w-1/3 grid grid-cols-2">
        <div className="aspect-square flex items-center justify-center rounded-full">
                <div className="text-[#03045e] transform ">
                  <img src="../src/assets/InImage/bplus.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-b-full">
                <div className="text-white p-4 transform ">
                  <img src="../src/assets/InImage/arrow.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-br-[75px]">
                <div className="text-white p-4 transform ">
                  <img src="../src/assets/InImage/tInfinity.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
                  alt="Business analysis"
                  className="w-full h-full object-cover rounded-t-full"
                />
              </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-12 h-12 text-[#03045e] animate-bounce" />
        </div>
      </div>
    </section>


    {/* Media Section */}

    <div className="bg-[#f9f6f2] p-10">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full h-72 bg-gray-300"></div>
            <p className="mt-4 text-lg font-serif text-black">{article.title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
export default Media;