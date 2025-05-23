// src/components/ui/TechCard.jsx
import React, { useState } from 'react';
import TechModal from './TechModal';
import { techDetails } from '../../data/techDetails';

const TechCard = ({ title, description, icon, level, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const getTechDetails = () => {
    const categoryData = techDetails[category.toLowerCase()];
    return categoryData ? categoryData[title] : null;
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        onClick={handleCardClick}
        className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm bg-opacity-80 border border-gray-200"
      >
        <div className="flex items-center space-x-4">
          <span className="text-4xl">{icon}</span>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <span className="inline-block px-3 py-1 mt-1 text-sm text-blue-600 bg-blue-100 rounded-full">
              {level}
            </span>
          </div>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-all duration-300"></div>
      </div>
      
      <TechModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tech={getTechDetails()}
      />
    </>
  );
};

export default TechCard;