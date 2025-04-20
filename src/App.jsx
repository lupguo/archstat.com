// src/App.jsx
import React from 'react';
import Navigation from './components/ui/Navigation';
import LanguagesSection from './components/sections/LanguagesSection';
import FrameworksSection from './components/sections/FrameworksSection';
import BuildToolsSection from './components/sections/BuildToolsSection';
import DevOpsSection from './components/sections/DevOpsSection';
import TrendsSection from './components/sections/TrendsSection';
import Footer from './components/ui/Footer';

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto">
          <LanguagesSection />
          <FrameworksSection />
          <BuildToolsSection />
          <DevOpsSection />
          <TrendsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;