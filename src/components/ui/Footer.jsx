// src/components/ui/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          © 2024 TechStack Showcase. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          备案号：粤ICP备14088510号-6
        </p>
      </div>
    </footer>
  );
};

export default Footer;