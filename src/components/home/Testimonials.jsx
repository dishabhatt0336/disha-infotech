  {/* Testimonials */}
import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, FinTech Corp",
    text: "Outstanding delivery and communication.",
  },
  {
    name: "Michael Chen",
    role: "CEO, RetailPro",
    text: "Reliable and highly professional team.",
  },
  {
    name: "Emily Roberts",
    role: "Product Manager",
    text: "They exceeded expectations.",
  },
];

const Testimonials = () => {
  return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600">Hear what our clients say about us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Testimonials;