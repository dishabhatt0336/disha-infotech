import React from "react";

const SectionTitle = ({ title, subtitle, center = true }) => {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-12`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
