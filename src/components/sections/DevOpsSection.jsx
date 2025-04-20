// src/components/sections/DevOpsSection.jsx
import React from 'react';
import TechCard from '../ui/TechCard';
import SectionTitle from '../ui/SectionTitle';

const DevOpsSection = () => {
  const devops = [
    { name: 'Docker', level: 'Advanced', icon: '🐳', description: 'Container platform for application deployment' },
    { name: 'Kubernetes', level: 'Intermediate', icon: '☸️', description: 'Container orchestration platform' },
    { name: 'GitHub Actions', level: 'Advanced', icon: '🔄', description: 'Continuous Integration and Deployment' },
    { name: 'AWS', level: 'Intermediate', icon: '☁️', description: 'Cloud computing services platform' },
    { name: 'Terraform', level: 'Intermediate', icon: '🏗️', description: 'Infrastructure as Code tool' },
    { name: 'Jenkins', level: 'Intermediate', icon: '🤖', description: 'Open source automation server' }
  ];

  return (
    <section id="devops" className="py-16 bg-gray-50">
      <SectionTitle title="DevOps" subtitle="Tools and practices for modern software delivery" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devops.map((tool) => (
          <TechCard
            key={tool.name}
            title={tool.name}
            description={tool.description}
            icon={tool.icon}
            level={tool.level}
            category="devops"
          />
        ))}
      </div>
    </section>
  );
};

export default DevOpsSection;