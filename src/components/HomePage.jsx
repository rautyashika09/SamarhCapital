// import React from "react";
// import { ArrowDown, Users, Settings, LineChart, Cog } from 'lucide-react';
// const HomePage = () => {
//   return (
//     <div>
//  <div className="min-h-screen bg-[#F8F5F0] flex flex-col justify-center items-center p-8">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Text Section */}
//         <div className="flex flex-col justify-center">
//           <h1 className="text-5xl md:text-6xl font-semibold text-teal-600">
//             The Right Capital Partner To <span className="italic">Unlock</span>
//           </h1>
//           <h1 className="text-5xl md:text-6xl font-semibold italic text-blue-900">
//             Your <span className="not-italic">Potential</span>
//           </h1>
//           <div className="mt-12">
//             <div className="w-12 h-12 border-2 border-blue-900 flex justify-center items-center rounded-full">
//               <span className="text-blue-900 text-2xl">↓</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Image & Icon Grid Section */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           <img src="https://via.placeholder.com/150" alt="business" className="rounded-lg" />
//           <div className="bg-blue-900 flex justify-center items-center rounded-lg">
//             <span className="text-white text-5xl">→</span>
//           </div>
//           <div className="bg-teal-500 flex justify-center items-center rounded-lg">
//             <span className="text-white text-5xl">℮</span>
//           </div>
//           <img src="https://via.placeholder.com/150" alt="growth" className="rounded-lg" />
//           <div className="bg-blue-900 flex justify-center items-center rounded-lg">
//             <span className="text-white text-5xl">+</span>
//           </div>
//           <img src="https://via.placeholder.com/150" alt="success" className="rounded-lg" />
//           <div className="bg-blue-900 flex justify-center items-center rounded-lg">
//             <span className="text-white text-5xl">×</span>
//           </div>
//           <img src="https://via.placeholder.com/150" alt="professional" className="rounded-lg" />
//           <div className="bg-teal-500 flex justify-center items-center rounded-lg">
//             <span className="text-white text-5xl">∞</span>
//           </div>
//         </div>
//       </div>
   
//     </div>

//     {/* another Section */}
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="max-w-4xl w-full text-center">
//         <h2 className="text-lg font-semibold text-gray-800 mb-8 text-left">
//           Key Pointers/Messages
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
//           <div className="bg-teal-500 text-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
//             <div className="text-lg font-semibold">Expanding professional networks.</div>
//           </div>
//           <div className="border-2 border-gray-300 p-6 rounded-md shadow-md flex flex-col items-center justify-center">
//             <div className="text-gray-700 text-lg font-semibold">Implementing industry-leading practices.</div>
//           </div>
//           <div className="border-2 border-gray-300 p-6 rounded-md shadow-md flex flex-col items-center justify-center">
//             <div className="text-gray-700 text-lg font-semibold">Tailored growth strategies.</div>
//           </div>
//           <div className="bg-teal-500 text-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
//             <div className="text-lg font-semibold">Offering specialized industry knowledge.</div>
//           </div>
//         </div>
//         <p className="text-gray-800 text-lg mt-10 italic">
//           “We are conscientious capitalists committed to fostering innovation and growth by bringing
//           emerging and unrecognized entrepreneurs into the mainstream.”
//         </p>
//       </div>
//     </div>
//     </div>   
//   );
// };


import React from 'react';
import { ArrowDown, Users, Settings, LineChart, Cog } from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="relative bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h1 className="text-6xl font-light mb-6 lg:pl-8">
                <span className="text-emerald-400 font-semibold">The Right Capital</span><br />
                <span className="text-emerald-400">Partner To </span>
                <span className="italic text-emerald-400">Unlock</span><br />
                <span className="text-emerald-400">Your </span>
                <span className="text-navy-blue">Potential</span>
              </h1>
            </div>

            {/* Right Content - Grid of Images */}
            <div className="lg:w-1/2 grid grid-cols-3 gap-4">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
                  alt="Business analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-navy-blue flex items-center justify-center">
                <div className="text-white w-12 h-12 transform rotate-45">→</div>
              </div>
              <div className="aspect-square bg-emerald-400 flex items-center justify-center">
                <span className="text-white text-4xl">e<sup>x</sup></span>
              </div>
              <div className="aspect-square bg-navy-blue flex items-center justify-center">
                <div className="text-white text-4xl">+</div>
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3"
                  alt="Business growth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-emerald-400 flex items-center justify-center">
                <div className="text-white text-4xl">∞</div>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="border border-gray-300 rounded-full p-4">
              <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Pointers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-800 mb-16">Key Pointers/Messages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-emerald-400 transition-all">
                <div className="w-16 h-16 bg-emerald-400 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-2">Expanding professional networks.</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-emerald-400 transition-all">
                <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Implementing industry-leading practices.</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-emerald-400 transition-all">
                <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Tailored growth strategies</h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-emerald-400 transition-all">
                <div className="w-16 h-16 bg-emerald-400 rounded-lg flex items-center justify-center mb-4">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-2">Offering specialized industry knowledge.</h3>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-20 text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl font-light text-gray-700 italic">
              "We are conscientious capitalists committed to fostering innovation and growth by bringing emerging and unrecognized entrepreneurs into the mainstream."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;