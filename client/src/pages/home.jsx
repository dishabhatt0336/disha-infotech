import React from "react";
import Hero from "../components/home/Hero";
import OurServices from "../components/home/OurServices";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CompanyStats from "../components/home/CompanyStats";

const Home = () => {
  return (
    <>
      <Hero />
      <CompanyStats />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default Home;
