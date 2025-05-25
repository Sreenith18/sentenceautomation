import React from 'react';
import HomeSection from './components/HomeSection';
import AutocompleteSection from './components/AutocompleteSection';
import ConclusionSection from './components/ConclusionSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <HomeSection />
      <AutocompleteSection />
      <ConclusionSection />
    </div>
  );
}

export default App;