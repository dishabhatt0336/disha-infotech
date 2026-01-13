 import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, FinTech Corp',
      text: 'Disha Infotech transformed our legacy system into a modern, scalable platform. Outstanding work!'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, RetailPro',
      text: 'Professional, reliable, and innovative. They exceeded our expectations on every front.'
    },
    {
      name: 'Emily Roberts',
      role: 'Product Manager, HealthSync',
      text: 'The best security partner we\'ve worked with. Highly recommended for enterprise projects.'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            Hear what our clients say about working with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <Quote className="w-10 h-10 text-orange-500 mb-4 " />
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-orange-600">{testimonial.name}</p>
                <p className="text-sm text-gray-800">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

