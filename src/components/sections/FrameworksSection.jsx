// src/components/sections/FrameworksSection.jsx
import React from 'react';
import TechCard from '../ui/TechCard';
import SectionTitle from '../ui/SectionTitle';

const FrameworksSection = () => {
  const frameworks = [
    { name: 'React', level: 'Advanced', icon: '⚛️', description: 'Frontend library for building user interfaces' },
    { name: 'Vue.js', level: 'Intermediate', icon: '💚', description: 'Progressive JavaScript framework' },
    { name: 'Next.js', level: 'Advanced', icon: '⚡', description: 'React framework for production-grade applications' },
    { name: 'Node.js', level: 'Advanced', icon: '🟢', description: 'JavaScript runtime for server-side development' },
    { name: 'Django', level: 'Intermediate', icon: '🎯', description: 'High-level Python web framework' },
    { name: 'Spring Boot', level: 'Intermediate', icon: '🍃', description: 'Java-based enterprise framework' }
  ];

  return (
    <section id="frameworks" className="py-16 bg-gray-50">
      <SectionTitle title="Frameworks & Libraries" subtitle="Building blocks for modern applications" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frameworks.map((framework) => (
          <TechCard
            key={framework.name}
            title={framework.name}
            description={framework.description}
            icon={framework.icon}
            level={framework.level}
            category="frameworks"
          />
        ))}
      </div>
    </section>
  );
};

export default FrameworksSection;