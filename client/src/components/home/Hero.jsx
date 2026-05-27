import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { TypingAnimation } from "@/components/magicui/typinganimation";


const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('minimalist-blue-white-wave-background_1017-46756.avif')",
      }}>
       
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-500 mb-6 leading-tight">
            Smart Solutions For 
            <br />
            <TypingAnimation
              // loop={true}
              duration={130}
              pauseDuration={2000}
              className=" inline bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent"> 
             Secure Living
            </TypingAnimation>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We design and deliver intelligent security, automation and communication solutions that power smarter, safer spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="font-semibold bg-gradient-to-r from-orange-500 to-orange-500 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Contact Us Now <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="font-semibold border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Services <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


