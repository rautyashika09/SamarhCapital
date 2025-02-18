import React from 'react'

const Thesis = () => {
  return (
    <div>
         <section className="bg-teal-500 min-h-screen flex items-center justify-center p-8">
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text Content */}
      <div className="text-white">
        <h2 className="text-4xl md:text-5xl font-serif font-thin text-white">
          Our thesis
        </h2>
        <p className="lg:text-3xl font-semibold mr-28 md:text-xl mt-4 text-blue-900">
          The Indian SME segment has historically been underserved by the financial 
          markets – Transformative changes over the past decade have set the stage 
          for significant growth. Yashika
        </p>
      </div>

      {/* Right Side - Grid Layout for Icons & Images */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-900 flex items-center justify-center p-6 rounded-lg">
          <span className="text-white text-5xl font-bold">+</span>
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img src="https://source.unsplash.com/200x200/?business,charts" alt="Business Meeting" className="w-full h-full object-cover" />
        </div>
        <div className="bg-blue-900 flex items-center justify-center p-6 rounded-lg">
          <span className="text-white text-5xl font-bold">℮</span>
        </div>
        <div className="bg-white flex items-center justify-center p-6 rounded-lg">
          <span className="text-black text-5xl font-bold">∞</span>
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden col-span-2">
          <img src="https://source.unsplash.com/200x200/?finance,stock" alt="Stock Market" className="w-full h-full object-cover" />
        </div>
        <div className="bg-blue-900 flex items-center justify-center p-6 rounded-lg col-span-2">
          <span className="text-white text-5xl font-bold">→</span>
        </div>
      </div>
    </div>
  </section>

{/* drivers */}
  <div className="bg-gray-100 p-8">
      {/* Growth Drivers Section */}
      <h2 className="text-center text-lg font-semibold uppercase mb-6">Growth Drivers</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-teal-400 p-6 rounded-lg text-white">
          <h3 className="text-black font-semibold">Buoyant domestic demand</h3>
          <p className="mt-2">📈</p>
        </div>
        <div className="bg-blue-900 p-6 rounded-lg text-white">
          <h3 className="font-semibold">Benign fiscal incentives</h3>
          <p className="mt-2">🏠📄</p>
        </div>
        <div className="bg-teal-400 p-6 rounded-lg text-white">
          <h3 className="text-black font-semibold">Availability of technology and skilled labour</h3>
          <p className="mt-2">👷‍♂️⚙️</p>
        </div>
        <div className="bg-blue-900 p-6 rounded-lg text-white">
          <h3 className="font-semibold">Evolving business ecosystem</h3>
          <p className="mt-2">🌎💡</p>
        </div>
      </div>

      {/* Commitment Statement */}
      <div className="text-center my-12 px-4">
        <h2 className="text-2xl mx-10 md:text-2xl font-semibold uppercase leading-relaxed">
          "We are committed to being a trusted partner for unorthodox and emerging entrepreneurs in reshaping the industrial landscape."
        </h2>
      </div> */

      {/* Core Sectors Section */}
      /* <h2 className="text-center text-lg font-semibold uppercase mb-6">Core Sectors</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-teal-400 p-6 rounded-lg text-white">
          <h3 className="text-black font-semibold">Engineering</h3>
          <p className="mt-2">⚙️</p>
        </div>
        <div className="bg-blue-900 p-6 rounded-lg text-white">
          <h3 className="font-semibold">Chemicals</h3>
          <p className="mt-2">🧪</p>
        </div>
        <div className="bg-teal-400 p-6 rounded-lg text-white">
          <h3 className="text-black font-semibold">Business services</h3>
          <p className="mt-2">🛠️</p>
        </div>
        <div className="bg-blue-900 p-6 rounded-lg text-white">
          <h3 className="font-semibold">customer</h3>
          <p className="mt-2">🛍️</p>
        </div>
      </div>




    </div>
    </div>
   

);
  
}

export default Thesis