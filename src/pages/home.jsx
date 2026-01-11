import React, { useState } from "react";
// import {
//   Code,
//   Smartphone,
//   Cloud,
//   Database,
//   Brain,
//   Users,
//   ArrowRight,
//   ChevronRight
// } from "lucide-react";
// import { Target, Briefcase } from "lucide-react";
import Hero from "../components/home/Hero";
import OurServices from "../components/home/OurServices";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import ContactCta from "../components/home/ContactCta";

const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <ContactCta />
    </>
  );
};

export default Home;