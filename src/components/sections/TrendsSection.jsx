// src/components/sections/TrendsSection.jsx
import React from 'react';
import TechCard from '../ui/TechCard';
import SectionTitle from '../ui/SectionTitle';

const TrendsSection = () => {
  const trends = [
    { name: 'AI/ML', level: 'Trending', icon: '🤖', description: 'Artificial Intelligence and Machine Learning' },
    { name: 'Web3', level: 'Emerging', icon: '🌐', description: 'Decentralized web technologies' },
    { name: 'Edge Computing', level: 'Growing', icon: '⚡', description: 'Distributed computing paradigm' },
    { name: 'Serverless', level: 'Mature', icon: '☁️', description: 'Cloud-native application development' },
    { name: 'Low Code', level: 'Rising', icon: '🔨', description: 'Visual development platforms' },
    { name: 'Green Tech', level: 'Emerging', icon: '🌱', description: 'Sustainable technology solutions' }
  ];

  return (
    <section id="trends" className="py-16">
      <SectionTitle title="Technology Trends" subtitle="The future of software development" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trends.map((trend) => (
          <TechCard
            key={trend.name}
            title={trend.name}
            description={trend.description}
            icon={trend.icon}
            level={trend.level}
            category="trends"
          />
        ))}
      </div>
    </section>
  );
};

export default TrendsSection;