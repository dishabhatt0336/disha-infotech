import React from "react";
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
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      desc: 'Build responsive, scalable web applications using React, Vue, Angular, and modern frameworks. From MVPs to enterprise platforms.',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'Progressive Web Apps', 'CMS Development']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      desc: 'Native iOS and Android apps, or cross-platform solutions with React Native and Flutter for maximum reach.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Modernization']
    },
    {
      icon: Database,
      title: 'Software Solutions',
      desc: 'Custom enterprise software tailored to your business needs. Streamline operations and boost productivity.',
      features: ['ERP Systems', 'CRM Solutions', 'Business Automation', 'Legacy Modernization']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      desc: 'Migrate to the cloud, optimize infrastructure, and implement CI/CD pipelines for faster delivery.',
      features: ['AWS/Azure/GCP', 'Infrastructure as Code', 'Container Orchestration', 'DevOps Automation']
    },
    {
      icon: Brain,
      title: 'AI & Data Solutions',
      desc: 'Harness the power of machine learning and data analytics to gain insights and automate processes.',
      features: ['Machine Learning', 'Data Analytics', 'Predictive Models', 'Natural Language Processing']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      desc: 'Strategic technology consulting to align IT with business goals and drive digital transformation.',
      features: ['Digital Strategy', 'Technology Roadmap', 'Architecture Design', 'Process Optimization']
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
              End-to-end technology solutions designed to accelerate your digital journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We tailor our services to meet your unique business requirements
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;