{/*Our services */}
import React from "react";
import { Code, Smartphone, Cloud } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable web applications",
    icon: Code,
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile solutions",
    icon: Smartphone,
  },
  {
    title: "Cloud Solutions",
    desc: "Secure & scalable infrastructure",
    icon: Cloud,
  },
];

const OurServices = () => {
  return (
  <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl; md:text-4xl; font-bold ; text-gray-900 ; mb-4">Our Services</h2>
               <p className="text-lg text-gray-600">Comprehensive technology solutions for modern businesses</p>
            </div>

           <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
             </div>
          </div>
        </div>
    </section>
  );
};
export default OurServices;