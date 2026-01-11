import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Code, Smartphone, Cloud, Database, Brain, Users, Mail, Phone, MapPin, CheckCircle, ArrowRight, Briefcase, Target, Award, Globe } from 'lucide-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // Main App Component
// function App() {
//   const [activeSection, setActiveSection] = useState('Home');

//   const renderSection = () => {
//     switch(activeSection) {
//       case 'Home':
//         return <HomePage setActiveSection={setActiveSection} />;
//       case 'About':
//         return <AboutPage />;
//       case 'Services':
//         return <ServicesPage />;
//       case 'Careers':
//         return <CareersPage />;
//       case 'Contact':
//         return <ContactPage />;
//       default:
//         return <HomePage setActiveSection={setActiveSection} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
//       <main>
//         {renderSection()}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
  
