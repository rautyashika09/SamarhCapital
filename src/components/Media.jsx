import { ArrowDown, Linkedin } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="relative bg-emerald-400 min-h-screen">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-6xl font-light text-white mb-8">Our team</h1>
          <p className="text-2xl text-white/90 leading-relaxed">
            At Samarsh Capital, our team combines deep investment expertise and
            strategic advisory experience. Led by seasoned professionals, we specialize in
            identifying high-potential opportunities and nurturing them to deliver long-term value.
          </p>
        </div>

        {/* Right Content - Grid of Images */}
        <div className="lg:w-1/3 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-full p-8">
            <div className="w-16 h-16 bg-navy-blue rounded-full"></div>
          </div>
          <div className="bg-navy-blue rounded-full p-8">
            <span className="text-4xl text-white">e<sup>x</sup></span>
          </div>
          <div className="bg-navy-blue rounded-full p-8">
            <div className="w-16 h-16 bg-emerald-400"></div>
          </div>
          <div className="overflow-hidden rounded-full">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-12 h-12 text-white animate-bounce" />
        </div>
      </div>
    </section>


    {/* Media Section */}

    <div className="bg-[#f9f6f2] p-10">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full h-64 bg-gray-300"></div>
            <p className="mt-4 text-lg font-serif text-black">{article.title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
export default Media;