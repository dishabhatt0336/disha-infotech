import React from "react";
import { Code, Smartphone, Cloud, Database, Brain, Users } from "lucide-react";

const OurServices = () => {
  const services = [
    { icon: Code, title: 'C.C.T.V System', desc: 'Advanced surveillance solutions designed for security, monitoring and protection.' },
    { icon: Smartphone, title: 'Fire Alarm System', desc: 'Reliable fire alarm solutions designed for early warning, safety and protection.' },
    { icon: Cloud, title: 'P.A. System', desc: 'Clear and reliable public address solutions for effective communication.' },
    { icon: Database, title: 'Home Automation', desc: 'Smart home automation designed for convenience, comfort and seamless control.' },
    { icon: Brain, title: 'Data & Voice', desc: 'Efficient data and voice networking for communication in modern businesses.' },
    { icon: Users, title: 'Audio Visual', desc: 'High-quality Audio Visual systems for seamless presentation.' }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive security, automation, and communication solutions for modern businesses.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

