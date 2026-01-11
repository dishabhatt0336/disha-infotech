import React from "react";
import Navbar from "./navigation";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

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
