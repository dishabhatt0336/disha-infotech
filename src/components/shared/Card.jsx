import React from "react";

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
      {Icon && (
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6" />
        </div>
      )}

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default Card;
