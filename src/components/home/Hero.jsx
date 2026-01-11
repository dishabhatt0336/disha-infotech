import React from "react";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Building Digital Solutions for{" "}
          <span className="text-blue-600">Modern Businesses</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We help startups and enterprises design, build, and scale powerful
          digital products using modern technologies.
        </p>

        <div className="flex justify-center gap-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="outline">Our Services</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
