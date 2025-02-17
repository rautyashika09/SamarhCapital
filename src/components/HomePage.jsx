import React from "react";

const HomePage = () => {
  return (
    <div>
 <div className="min-h-screen bg-[#F8F5F0] flex flex-col justify-center items-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-teal-600">
            The Right Capital Partner To <span className="italic">Unlock</span>
          </h1>
          <h1 className="text-5xl md:text-6xl font-semibold italic text-blue-900">
            Your <span className="not-italic">Potential</span>
          </h1>
          <div className="mt-12">
            <div className="w-12 h-12 border-2 border-blue-900 flex justify-center items-center rounded-full">
              <span className="text-blue-900 text-2xl">↓</span>
            </div>
          </div>
        </div>

        {/* Right Image & Icon Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://via.placeholder.com/150" alt="business" className="rounded-lg" />
          <div className="bg-blue-900 flex justify-center items-center rounded-lg">
            <span className="text-white text-5xl">→</span>
          </div>
          <div className="bg-teal-500 flex justify-center items-center rounded-lg">
            <span className="text-white text-5xl">℮</span>
          </div>
          <img src="https://via.placeholder.com/150" alt="growth" className="rounded-lg" />
          <div className="bg-blue-900 flex justify-center items-center rounded-lg">
            <span className="text-white text-5xl">+</span>
          </div>
          <img src="https://via.placeholder.com/150" alt="success" className="rounded-lg" />
          <div className="bg-blue-900 flex justify-center items-center rounded-lg">
            <span className="text-white text-5xl">×</span>
          </div>
          <img src="https://via.placeholder.com/150" alt="professional" className="rounded-lg" />
          <div className="bg-teal-500 flex justify-center items-center rounded-lg">
            <span className="text-white text-5xl">∞</span>
          </div>
        </div>
      </div>
   
    </div>

    {/* another Section */}
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-8 text-left">
          Key Pointers/Messages
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
          <div className="bg-teal-500 text-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <div className="text-lg font-semibold">Expanding professional networks.</div>
          </div>
          <div className="border-2 border-gray-300 p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <div className="text-gray-700 text-lg font-semibold">Implementing industry-leading practices.</div>
          </div>
          <div className="border-2 border-gray-300 p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <div className="text-gray-700 text-lg font-semibold">Tailored growth strategies.</div>
          </div>
          <div className="bg-teal-500 text-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <div className="text-lg font-semibold">Offering specialized industry knowledge.</div>
          </div>
        </div>
        <p className="text-gray-800 text-lg mt-10 italic">
          “We are conscientious capitalists committed to fostering innovation and growth by bringing
          emerging and unrecognized entrepreneurs into the mainstream.”
        </p>
      </div>
    </div>
    </div>
   
    
  );
};

export default HomePage;
