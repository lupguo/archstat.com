// src/components/sections/LanguagesSection.jsx
import React from 'react';
import TechCard from '../ui/TechCard';
import SectionTitle from '../ui/SectionTitle';

const LanguagesSection = () => {
  const languages = [
    { name: 'JavaScript', level: 'Advanced', icon: '💛', description: 'Web development powerhouse with modern ES6+ features' },
    { name: 'Python', level: 'Advanced', icon: '🐍', description: 'Versatile language for web, data science, and AI' },
    { name: 'Java', level: 'Intermediate', icon: '☕', description: 'Enterprise-grade applications and Android development' },
    { name: 'TypeScript', level: 'Advanced', icon: '📘', description: 'Strongly typed JavaScript for scalable applications' },
    { name: 'Go', level: 'Intermediate', icon: '🔵', description: 'High-performance backend and cloud applications' },
    { name: 'Rust', level: 'Beginner', icon: '⚙️', description: 'Systems programming with memory safety' }
  ];

  return (
    <section id="languages" className="min-h-screen p-8">
      <SectionTitle title="Programming Languages" subtitle="Core technologies that power modern software" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {languages.map((lang) => (
          <TechCard
            key={lang.name}
            title={lang.name}
            description={lang.description}
            icon={lang.icon}
            level={lang.level}
          />
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;