
import React from "react";
import { useNavigate } from "react-router-dom";
const CompanyStats = () => {
  const navigate = useNavigate();

  return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leading Systems Integrator
            </h2>
            <p className="text-lg text-gray-600">
              We collaborate with businesses to implement advanced security, automation, and infrastructure solutions that drive safety, efficiency, and long-term value.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '150+', label: 'Projects Delivered' },
              { number: '50+', label: 'Enterprise Clients' },
              { number: '95%', label: 'Client Retention' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default CompanyStats;
