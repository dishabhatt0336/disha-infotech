import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const ContactCta = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you modernize your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Our Services
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6" />
              <span>dishainfotech303@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              <span>+91 7600006288</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6" />
              <span>Ahmedabad, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
