// src/App.jsx
import React from 'react';
import Navigation from './components/ui/Navigation';
import LanguagesSection from './components/sections/LanguagesSection';
import FrameworksSection from './components/sections/FrameworksSection';
import BuildToolsSection from './components/sections/BuildToolsSection';
import DevOpsSection from './components/sections/DevOpsSection';
import TrendsSection from './components/sections/TrendsSection';

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      <div className="pt-16">
        <LanguagesSection />
        <FrameworksSection />
        <BuildToolsSection />
        <DevOpsSection />
        <TrendsSection />
      </div>
    </div>
  );
}

export default App;