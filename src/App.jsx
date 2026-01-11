import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Careers from "./pages/careers";
import Contact from "./pages/contact";

import Layout from "./components/layout/Layout"

const App = () => {
  return (
    <BrowserRouter>
      {/* <AppRoutes /> */}
       <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
    </BrowserRouter>
  );
};

export default App;