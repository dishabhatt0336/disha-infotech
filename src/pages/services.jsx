import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Code,
  Smartphone,
  Database,
  Cloud,
  Brain,
  Users,
  CheckCircle
} from "lucide-react";



// import { Target, Briefcase } from "lucide-react";

// Services Page Component
const ServicesPage = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Code,
      title: 'C.C.T.V System',
      desc: 'Advanced surveillance solutions for real-time monitoring, enhanced security, and reliable protection.',
      features: ['HD & IP Camera Systems', 'Video Monitoring & Recording', 'Remote Surveillance Access', 'CCTV Design & Installation']
    },
    {
      icon: Smartphone,
      title: 'Fire Alarm System',
      desc: 'Reliable fire detection and alert solutions designed to ensure safety and compliance.',
      features: ['Fire Detection & Alarm Systems', 'Smoke & Heat Sensors', 'Emergency Alerts', 'Addressable & Conventional Systems']
    },
    {
      icon: Database,
      title: 'P.A. System',
      desc: 'Public address solutions for clear announcements, emergency alerts, and zone-wise audio control across facilities.',
      features: ['Paging & Announcement Systems', 'Emergency Voice Alerts', 'Zone-Based Audio Management', 'Indoor & Outdoor Coverage']
    },
    {
      icon: Cloud,
      title: 'Audio Visual',
      desc: 'Professional audio visual systems for presentations, conferencing and immersive digital displays.',
      features: ['Conference Room AV', 'Display & Projection Systems', 'Video Conferencing Solutions', 'Integrated Sound Systems']
    },
    {
      icon: Brain,
      title: 'Home Automation',
      desc: 'Smart automation solutions for centralized control of lighting, climate, security, and entertainment systems.',
      features: ['Lighting & Climate Control', 'Smart Security Integration', 'Automated Curtains & Appliances', 'Mobile & Voice Control']
    },
    {
      icon: Users,
      title: 'Data & Voice',
      desc: 'Structured networking solutions for secure data connectivity and reliable voice communication.',
      features: ['Structured Cabling', 'LAN & WAN Networks', 'IP Telephony(VoIP)', 'Network Optimization & Testing']
    },
    {
      icon: Users,
      title: 'Access Control',
      desc: 'Secure access management solutions to control, monitor, and restrict entry across facilities.',
      features: ['Biometric & RFID Systems', 'Door Access Controllers', 'Attendance & Access Logs', 'Visitor Management Integration']
    },{
      icon: Users,
      title: 'Project Designing',
      desc: 'End-to-end project planning and system design for integrated security, automation, and communication solutions.',
      features: ['Technical Drawings & Layouts', 'BOQ & Cost Estimation', 'System Integartion Planning', 'Compliance & Standars Alignment']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              End-to-end technology solutions designed to accelerate your digital journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-100 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0" />
                      <span className="text-gray-900">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We tailor our services to meet your unique infrastructural requirements.
          </p>
          <button
           onClick={() => navigate('/contact')}
           className="bg-gradient-to-r from-orange-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;