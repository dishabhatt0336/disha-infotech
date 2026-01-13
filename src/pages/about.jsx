import React from "react";
import { Target, Briefcase, HouseHeart } from "lucide-react";


// About Page Component
const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Disha Infotech.</h1>
            <p className="text-xl text-gray-600">
              Pioneering digital transformation through innovative technology solutions since 2014
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-800 leading-relaxed">
                To become a global leader in integrated security and automation solutions, enabling organizations to achieve operational excellence through advances technology and service excellence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <Briefcase className="w-12 h-12 text-orange-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-800 leading-relaxed">
                To partner with our clients in designing and implementing intelligent systems that drive performance, reliability, and long-term success based on trust and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Innovation', desc: 'Constantly pushing boundaries to deliver cutting-edge solutions.' },
              { title: 'Excellence', desc: 'Committed to the highest standards in everything we create.' },
              { title: 'Integrity', desc: 'Building trust through transparency and ethical practices.' },
              { title: 'Collaboration', desc: 'Partnering with clients to achieve shared success.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the visionaries behind Disha Infotech</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Gaurav Bhatt', role: 'Founder & CEO', bio: '10+ years in ELV(Extra Low Volatge) systems.' },
              { name: 'Disha Bhatt', role: 'CTO', bio: 'Tech lead handling software development.' },
              { name: 'Khushali Bhatt', role: 'Marketing', bio: 'Expert in scaling the organizations.' }
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
