  {/* Contact CTA */}
  import React from "react";
import Button from "../shared/Button";

const ContactCta = () => {
  return (
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">Let's build something amazing together</p>
          <button 
            onClick={() => setActiveSection?.("Contact")}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </section>
  );
};

export default ContactCta;