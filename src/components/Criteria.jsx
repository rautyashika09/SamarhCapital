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
        <div className="p-8 flex flex-col items-center">
      <div className="grid md:grid-cols-3 gap-2 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="text-center p-6"
          >
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-4 ${item.color}`}
            >
              <span className="text-white text-3xl">{item.icon}</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-playfairdisplayb text-blue-950 mb-2">
              {item.title}
            </h2>
            <p className="text-black text-2xl lg:text-4xl font-playfairdisplay text-left whitespace-pre-line">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-3xl lg:text-4xl font-playfairdisplay text-gray-800">
        Investing in the future: Backing companies poised to redefine their industries.
      </p>
    </div>

    {/* investment criteria */}
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-playfairdisplay text-black mb-8 self-start">Investment criteria</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-5 max-w-6xl w-full pb-2 min-h-[500px]">
        {/* Row 1 */}

        <div className="bg-teal-400 text-black text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center">
          <p className="text-center">
          Disrupting the status 
          quo: Supporting 
          businesses with 
          fresh perspectives 
          and unorthodox 
          approaches to ageold challenges</p>
          </div>        

        <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
        </div>

        <div className="text-gray-700 text-2xl font-playfairdisplayb py-8 rounded border-2 border-cyan-400 shadow-md flex flex-col items-center">
          <p className="text-center">
          Growth-oriented 
          entrepreneurs: 
          Partnering with 
          founders focused on 
          sustainable growth.</p>
          </div>  

          <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
        </div>  

        <div className="text-gray-700 text-2xl font-playfairdisplayb py-8 rounded border-2 border-cyan-400 shadow-md flex flex-col items-center">
          <p className="text-center">
          Proven track records: 
          Engaging with 
          businesses that have 
          validated concepts 
          and demonstrated 
          market appeal.</p>
          </div> 
        {/* Row 2 (Additional boxes for 4+4 layout) */}
        <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
        </div> 

        <div className="bg-blue-950 text-white text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center">
          <p className="text-center">
          Scalability potential: 
          Supporting teams 
          with strong 
          implementation 
          skills and significant 
          growth potential.</p>
          </div>   

          <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
          </div> 

          <div className="bg-teal-400 text-black text-2xl font-playfairdisplayb py-8 rounded shadow-md flex flex-col items-center">
          <p className="text-center">
          Disrupting the status 
          quo: Supporting 
          businesses with 
          fresh perspectives 
          and unorthodox 
          approaches to ageold challenges</p>
          </div>   

          <div className="bg-[#e6e6e6] p-4 rounded shadow-md flex flex-col items-center">
          </div> 
      </div>

      <h2 className="text-3xl lg:text-4xl lg:px-40 font-gotham font-thin text-black mt-12 text-center lg:pb-20">
        “EMPOWERING AMBITIOUS ENTREPRENEURS TO UNLOCK THEIR DREAMS AND DRIVE TRANSFORMATIVE CHANGE.”
      </h2>
    </div>
    </div>
    
  );
};


export default Criteria