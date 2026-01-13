import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Award, ArrowRight } from "lucide-react";
import heroImg from "/Logo.png";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  const strengths = [
    'Expert team with 10+ years experience',
    'Agile methodology & rapid delivery',
    '24/7 dedicated support',
    '100+ successful projects delivered'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Disha Infotech?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine technical excellence with business acumen to deliver solutions that truly make a difference.
            </p>
            <div className="space-y-4">
              {strengths.map((strength, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-xl text-gray-800">{strength}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => navigate('/about')}
              className="mt-8 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Learn More About Us <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-white to-white rounded-2xl p-8 h-96 flex items-center justify-center">
              <img src = {heroImg} alt = "Logo" />
            {/* <div className="text-center">
              <Award className="w-24 h-24 text-blue-600 mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-800">ISO 9001 Certified</p>
              <p className="text-gray-600">Quality Assured Excellence</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

