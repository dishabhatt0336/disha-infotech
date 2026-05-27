import React from "react";
import Navbar from "./navigation.jsx";
import Footer from "./footer.jsx";
import ScrollProgress from "../magicui/scrollprogress.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />
      
      <ScrollProgress />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
