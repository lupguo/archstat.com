// src/components/ui/TechModal.jsx
import React from 'react';

const TechModal = ({ isOpen, onClose, tech }) => {
  if (!isOpen || !tech) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center mb-6">
          <span className="text-4xl mr-4">{tech.icon}</span>
          <h2 className="text-2xl font-bold text-gray-800">{tech.name}</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg text-gray-700 mb-2">Overview</h3>
            <p className="text-gray-600">{tech.overview}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-700 mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {tech.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-700 mb-2">Use Cases</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {tech.useCases.map((useCase, index) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechModal;