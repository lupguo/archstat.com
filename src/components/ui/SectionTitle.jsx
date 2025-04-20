// src/components/ui/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-lg">{subtitle}</p>
      <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;