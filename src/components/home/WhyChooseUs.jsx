  {/* Why Choose Us */}
import React from "react";
import { CheckCircle, Award } from "lucide-react";

const strengths = [
  "10+ years of industry experience",
  "Agile & transparent process",
  "Dedicated support",
  "Proven delivery record",
];

const WhyChooseUs = () => {
  return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose TechVista?</h2>
              <div className="space-y-4">
                {strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{strength}</p>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setActiveSection?.('About')}
                className="mt-8 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Award className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-800">ISO 9001 Certified</p>
                <p className="text-gray-600">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default WhyChooseUs;
