// src/components/sections/BuildToolsSection.jsx
import React from 'react';
import TechCard from '../ui/TechCard';
import SectionTitle from '../ui/SectionTitle';

const BuildToolsSection = () => {
  const tools = [
    { name: 'Webpack', level: 'Advanced', icon: '📦', description: 'Module bundler for modern JavaScript applications' },
    { name: 'Vite', level: 'Advanced', icon: '⚡', description: 'Next generation frontend tooling' },
    { name: 'Babel', level: 'Intermediate', icon: '🔄', description: 'JavaScript compiler for backwards compatibility' },
    { name: 'ESLint', level: 'Advanced', icon: '🔍', description: 'Static code analysis tool for JavaScript' },
    { name: 'npm/yarn', level: 'Advanced', icon: '📥', description: 'Package managers for JavaScript' },
    { name: 'Rollup', level: 'Intermediate', icon: '🎯', description: 'Module bundler for JavaScript libraries' }
  ];

  return (
    <section id="buildtools" className="py-16">
      <SectionTitle title="Build Tools" subtitle="Essential tools for modern development workflow" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <TechCard
            key={tool.name}
            title={tool.name}
            description={tool.description}
            icon={tool.icon}
            level={tool.level}
            category="buildtools"
          />
        ))}
      </div>
    </section>
  );
};

export default BuildToolsSection;