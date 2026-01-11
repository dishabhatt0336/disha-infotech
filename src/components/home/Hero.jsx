import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Building Digital Solutions for{" "}
          <span className="text-blue-600">Modern Businesses</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We help startups and enterprises design, build, and scale powerful
          digital products using modern technologies.
        </p>

        <div className="flex justify-center gap-4">
          <button 
            onClick={() => navigate('/contact')}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
          >
            Get Started
          </button>
          <button 
            onClick={() => navigate('/services')}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
