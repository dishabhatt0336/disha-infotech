import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@/components/layout/Layout";

import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Careers from "@/pages/careers";
import Contact from "@/pages/contact";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
