import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cctv,
  AlarmSmoke,
  Database,
  Cloud,
  Brain,
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
  Lock,
} from "lucide-react";

/* ── Flip Card ── */
const FlipCard = ({ service }) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="h-72 cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0  rounded-2xl border border-gray-200 flex flex-col justify-between p-7 overflow-hidden"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >

          <div>
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
              style={{ background: service.accent + "20" }}
            >
              <Icon className="w-7 h-7" style={{ color: service.accent }} />
            </div>
            <h2 className="font-sans text-xl font-bold text-gray-900 mb-2">{service.title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{service.desc}</p>
          </div>
          <div className="flex items-center gap-1 text-md font-semibold" style={{ color: service.accent }}>
            <span>See features</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col justify-between p-7 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #0a0f1e 0%, #111827 100%)",
            border: `1px solid ${service.accent}50`,
          }}
        >
          {/* <div
            className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-20 pointer-events-none"
            style={{ background: `radial-gradient(circle, ${service.accent}, transparent)` }}
          /> */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: service.accent + "25" }}
              >
                <Icon className="w-4 h-4" style={{ color: service.accent }} />
              </div>
              <h3 className="text-white text-lg font-bold">{service.title}</h3>
            </div>
            <ul className="space-y-2.5">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: service.accent }} />
                  <span className="text-gray-200 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Services data ── */
const services = [
  {
    icon: Cctv,
    title: "C.C.T.V System",
    desc: "Advanced surveillance solutions for real-time monitoring, enhanced security, and reliable protection.",
    features: ["HD & IP Camera Systems", "Video Monitoring & Recording", "Remote Surveillance Access", "CCTV Design & Installation"],
    accent: "#f97316",
  },
  {
    icon: AlarmSmoke,
    title: "Fire Alarm System",
    desc: "Reliable fire detection and alert solutions designed to ensure safety and compliance.",
    features: ["Fire Detection & Alarm Systems", "Smoke & Heat Sensors", "Emergency Alerts", "Addressable & Conventional Systems"],
    accent: "#f97316",
  },
  {
    icon: Database,
    title: "P.A. System",
    desc: "Public address solutions for clear announcements, emergency alerts, and zone-wise audio control across facilities.",
    features: ["Paging & Announcement Systems", "Emergency Voice Alerts", "Zone-Based Audio Management", "Indoor & Outdoor Coverage"],
    accent: "#f97316",
  },
  {
    icon: Cloud,
    title: "Audio Visual",
    desc: "Professional audio visual systems for presentations, conferencing and immersive digital displays.",
    features: ["Conference Room AV", "Display & Projection Systems", "Video Conferencing Solutions", "Integrated Sound Systems"],
    accent: "#f97316",
  },
  {
    icon: Brain,
    title: "Home Automation",
    desc: "Smart automation solutions for centralized control of lighting, climate, security, and entertainment systems.",
    features: ["Lighting & Climate Control", "Smart Security Integration", "Automated Curtains & Appliances", "Mobile & Voice Control"],
    accent: "#f97316",
  },
  {
    icon: Users,
    title: "Data & Voice",
    desc: "Structured networking solutions for secure data connectivity and reliable voice communication.",
    features: ["Structured Cabling", "LAN & WAN Networks", "IP Telephony(VoIP)", "Network Optimization & Testing"],
    accent: "#f97316",
  },
  {
    icon: Lock,
    title: "Access Control",
    desc: "Secure access management solutions to control, monitor, and restrict entry across facilities.",
    features: ["Biometric & RFID Systems", "Door Access Controllers", "Attendance & Access Logs", "Visitor Management Integration"],
    accent: "#f97316",
  },
  {
    icon: Shield,
    title: "Project Designing",
    desc: "End-to-end project planning and system design for integrated security, automation, and communication solutions.",
    features: ["Technical Drawings & Layouts", "BOQ & Cost Estimation", "System Integration Planning", "Compliance & Standards Alignment"],
    accent: "#f97316",
  },
];

/* ── Main Page ── */
const ServicesPage = () => {
  const navigate = useNavigate();

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

      {/* Flip Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xl text-gray-400 mb-8">Hover a service to explore its features</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <FlipCard key={idx} service={service} />
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
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Cctv,
//   AlarmSmoke,
//   Database,
//   Cloud,
//   Brain,
//   Users,
//   CheckCircle
// } from "lucide-react";


// // Services Page Component
// const ServicesPage = () => {
//   const navigate = useNavigate();
//   const services = [
//     {
//       icon: Cctv,
//       title: 'C.C.T.V System',
//       desc: 'Advanced surveillance solutions for real-time monitoring, enhanced security, and reliable protection.',
//       features: ['HD & IP Camera Systems', 'Video Monitoring & Recording', 'Remote Surveillance Access', 'CCTV Design & Installation']
//     },
//     {
//       icon: AlarmSmoke,
//       title: 'Fire Alarm System',
//       desc: 'Reliable fire detection and alert solutions designed to ensure safety and compliance.',
//       features: ['Fire Detection & Alarm Systems', 'Smoke & Heat Sensors', 'Emergency Alerts', 'Addressable & Conventional Systems']
//     },
//     {
//       icon: Database,
//       title: 'P.A. System',
//       desc: 'Public address solutions for clear announcements, emergency alerts, and zone-wise audio control across facilities.',
//       features: ['Paging & Announcement Systems', 'Emergency Voice Alerts', 'Zone-Based Audio Management', 'Indoor & Outdoor Coverage']
//     },
//     {
//       icon: Cloud,
//       title: 'Audio Visual',
//       desc: 'Professional audio visual systems for presentations, conferencing and immersive digital displays.',
//       features: ['Conference Room AV', 'Display & Projection Systems', 'Video Conferencing Solutions', 'Integrated Sound Systems']
//     },
//     {
//       icon: Brain,
//       title: 'Home Automation',
//       desc: 'Smart automation solutions for centralized control of lighting, climate, security, and entertainment systems.',
//       features: ['Lighting & Climate Control', 'Smart Security Integration', 'Automated Curtains & Appliances', 'Mobile & Voice Control']
//     },
//     {
//       icon: Users,
//       title: 'Data & Voice',
//       desc: 'Structured networking solutions for secure data connectivity and reliable voice communication.',
//       features: ['Structured Cabling', 'LAN & WAN Networks', 'IP Telephony(VoIP)', 'Network Optimization & Testing']
//     },
//     {
//       icon: Users,
//       title: 'Access Control',
//       desc: 'Secure access management solutions to control, monitor, and restrict entry across facilities.',
//       features: ['Biometric & RFID Systems', 'Door Access Controllers', 'Attendance & Access Logs', 'Visitor Management Integration']
//     },{
//       icon: Users,
//       title: 'Project Designing',
//       desc: 'End-to-end project planning and system design for integrated security, automation, and communication solutions.',
//       features: ['Technical Drawings & Layouts', 'BOQ & Cost Estimation', 'System Integartion Planning', 'Compliance & Standars Alignment']
//     }
//   ];

//   return (
//     <div className="pt-16">
//       {/* Hero */}
//       <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
//             <p className="text-xl text-gray-600">
//               End-to-end technology solutions designed to accelerate your digital journey.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-8">
//             {services.map((service, idx) => (
//               <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
//                 <div className="flex items-start gap-4 mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <service.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
//                     <p className="text-gray-600">{service.desc}</p>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   {service.features.map((feature, fidx) => (
//                     <div key={fidx} className="flex items-center gap-2">
//                       <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0" />
//                       <span className="text-gray-900">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 bg-gray-100">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
//           <p className="text-lg text-gray-600 mb-8">
//             We tailor our services to meet your unique infrastructural requirements.
//           </p>
//           <button
//            onClick={() => navigate('/contact')}
//            className="bg-gradient-to-r from-orange-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//             Schedule a Consultation
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicesPage;