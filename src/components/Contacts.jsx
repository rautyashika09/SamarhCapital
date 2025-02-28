import React, { useState } from 'react';
import { motion } from "framer-motion"
const Contacts = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id='contact' className="min-h-screen bg-[#f5f3ef]">
       <main className="max-w-7xl mx-auto px-4 py-8">
       <section className="relative ">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <motion.h1
               whileInView={{opacity:1, x: 0}}
               initial={{ opacity: 0, x: -100 }}
               transition={{ duration: 0.5}}
              className="text-3xl text-[#03045e] font-playfairdisplay font-light mb-6 lg:text-5xl">Contact Us</motion.h1>
              </div>

               {/* Right Content - Grid of Images */}
               <div className="lg:w-1/2 grid grid-cols-3">
          <div className="aspect-square bg-[#00dbba] flex items-center justify-center rounded-full">
                <div className="text-white p-4 transform ">
                  <img src="../src/assets/InImage/infinity.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-[#03045e] flex items-center justify-center rounded-tl-[75px]">
                <div className="text-white p-4 transform ">
                  <img src="../src/assets/InImage/Errow.png" alt="arrow" />
                </div>
              </div>
              <div className="aspect-square bg-[#00dbba] flex items-center justify-center">
                <div className="text-white p-4 transform ">
                  <img src="../src/assets/InImage/arrow.png" alt="arrow" />
                </div>
              </div>
              </div>
              </div>
              </div>
              </section>
              <div className='my-16'>
          <h2 className="text-4xl font-playfairdisplay text-center">Get in Touch</h2>
        </div>
        

        {/* contact form */}

        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto mb-16">
      <div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="bg-[#e2e3e2] font-playfairdisplay text-2xl text-black border-2 border-black rounded-md px-4 py-3 w-full"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="bg-[#e2e3e2] font-playfairdisplay text-2xl text-black border-2 border-black rounded-md px-4 py-3 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="bg-[#e2e3e2] font-playfairdisplay text-2xl text-black border-2 border-black rounded-md px-4 py-3 w-full"
        />
      </div>
      <textarea
        name="message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
        rows="6"
        className="w-full bg-[#e2e3e2] font-playfairdisplay text-2xl text-black border-2 border-black rounded-md px-4 py-3 mb-6"
      />
      <motion.div
       whileInView={{opacity:1, y: 0}}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 0.5}}
      className="flex justify-center">
        <button
          type="submit"
          className="bg-[#e2e3e2] font-playfairdisplay text-2xl text-black border-2 border-black px-8 py-2 rounded hover:bg-gray-300 transition-colors"
        >
          SEND IT NOW
        </button>
      </motion.div>
    </form>
  

  {/* contact info */}

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <p className="text-gray-800">+91 80 68474100</p>
      </div>

      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-gray-800">contact@samarshcapital.com</p>
      </div>

      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className='flex justify-between gap-8 '>
        <div>
          <p className="font-medium mb-2">Corporate Office</p>
          <p className="text-gray-600">
            210, Maker Chamber 5,<br />
            Nariman Point,<br />
            Mumbai - 400022
          </p>
        </div>
        <div >
          <p className="font-medium mb-2">Registered Office</p>
          <p className="text-gray-600">
            No.1, 5th Floor, 1 Sobha,<br />
            St Marks Road,<br />
            Bangalore GPO,<br />
            Bangalore - 560001
          </p>
        </div>
        </div>
        
      </div>
    </div>
      </main>
      </div>
  );
}

export default Contacts;