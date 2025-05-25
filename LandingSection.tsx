import React from 'react';
import { ChevronDown } from 'lucide-react';

interface LandingSectionProps {
  scrollToAutocomplete: () => void;
}

const LandingSection: React.FC<LandingSectionProps> = ({ scrollToAutocomplete }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Sentence Autocomplete
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Complete your thoughts faster with AI-powered sentence suggestions
        </p>
        
        <div className="space-y-4 mb-12">
          <FeatureItem text="Fast, intelligent suggestions as you type" />
          <FeatureItem text="Save time and boost productivity" />
          <FeatureItem text="Responsive design for any device" />
          <FeatureItem text="Simple, intuitive interface" />
        </div>
        
        <button
          onClick={scrollToAutocomplete}
          className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          Get Started
        </button>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center justify-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-3"></span>
      <p className="text-gray-300">{text}</p>
    </div>
  );
};

export default LandingSection;