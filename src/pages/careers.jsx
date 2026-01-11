import React, { useState } from "react";
import { MapPin } from "lucide-react";

// import { Target, Briefcase } from "lucide-react";

// Careers Page Component
const CareersPage = () => {
  const openings = [
    { title: 'Senior Full Stack Developer', location: 'Remote', type: 'Full-time' },
    { title: 'UI/UX Designer', location: 'New York, NY', type: 'Full-time' },
    { title: 'DevOps Engineer', location: 'San Francisco, CA', type: 'Full-time' },
    { title: 'Mobile Developer (React Native)', location: 'Remote', type: 'Contract' },
    { title: 'Cloud Solutions Architect', location: 'Austin, TX', type: 'Full-time' },
    { title: 'Data Scientist', location: 'Boston, MA', type: 'Full-time' }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted! We will review your profile and get back to you soon.');
    setFormData({ name: '', email: '', phone: '', position: '', resume: '', message: '' });
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600">
              Build the future of technology with a team that values innovation, growth, and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation First', desc: 'Work on cutting-edge projects using latest technologies' },
              { title: 'Work-Life Balance', desc: 'Flexible hours and remote work options available' },
              { title: 'Growth Opportunities', desc: 'Continuous learning and career development programs' },
              { title: 'Competitive Benefits', desc: 'Health insurance, 401k, and performance bonuses' },
              { title: 'Collaborative Culture', desc: 'Work with talented professionals in a supportive environment' },
              { title: 'Impact', desc: 'Build solutions that make a real difference for clients' }
            ].map((perk, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{perk.title}</h3>
                <p className="text-gray-600">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">Find your next career opportunity</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {openings.map((job, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <button className="text-blue-600 font-semibold hover:underline">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default CareersPage;