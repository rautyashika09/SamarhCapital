import React from 'react'

    const data = [
        {
          title: "Vision",
          description:
            "To build a vibrant ecosystem that empowers SMEs to lead innovation, transform industries, and shape a prosperous future for India.",
          icon: "\ud83d\udc41", // Placeholder for an actual SVG or image
          color: "bg-blue-900",
        },
        {
          title: "Purpose",
          description:
            "\"Build companies on a foundation of integrity and purposeful growth.\"\n\n• Help transformative SMEs realise their full potential.\n• Revolutionize SME investment by being a committed and dependable partner.",
          icon: "\ud83c\udfaf", // Placeholder icon
          color: "bg-teal-400",
        },
        {
          title: "Culture",
          description:
            "• Foster collaboration through synergistic skillsets.\n• Empower enterprising individuals driven by our vision.\n• Embrace continuous growth and learning to enhance expertise and adapt to challenges.",
          icon: "\ud83d\udc65", // Placeholder icon
          color: "bg-blue-900",
        },
      ];
      const Criteria = () => {
  return (
    <div>
        <div className="bg-gray-100 p-8 flex flex-col items-center">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-lg shadow-lg bg-white"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 ${item.color}`}
            >
              <span className="text-white text-3xl">{item.icon}</span>
            </div>
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-lg text-gray-800 font-medium">
        Investing in the future: Backing companies poised to redefine their industries.
      </p>
    </div>

    {/* investment criteria */}
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-serif font-bold text-black mb-8">Investment criteria</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Left Box */}
        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="font-bold">Disrupting the status quo:</h2>
          <p>Supporting businesses with fresh perspectives and unorthodox approaches to age-old challenges.</p>
        </div>
        
        {/* Center Box */}
        <div className="border border-gray-500 text-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="font-bold">Growth-oriented entrepreneurs:</h2>
          <p>Partnering with founders focused on sustainable growth.</p>
        </div>
        
        {/* Right Box */}
        <div className="border border-gray-500 text-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="font-bold">Proven track records:</h2>
          <p>Engaging with businesses that have validated concepts and demonstrated market appeal.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-6">
        {/* Bottom Left Box */}
        <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
          <h2 className="font-bold">Scalability potential:</h2>
          <p>Supporting teams with strong implementation skills and significant growth potential.</p>
        </div>
        
        {/* Bottom Right Box */}
        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="font-bold">Beyond metrics:</h2>
          <p>Collaborating with exceptional teams equipped with agility and a vision for enduring success.</p>
        </div>
      </div>
      
      <p className="text-xl font-serif text-center mt-12 max-w-4xl">
        “EMPOWERING AMBITIOUS ENTREPRENEURS TO UNLOCK THEIR DREAMS AND DRIVE TRANSFORMATIVE CHANGE.”
      </p>
    </div>
    </div>
    
  );
};


export default Criteria