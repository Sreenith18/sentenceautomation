import React from 'react';
import { motion } from 'framer-motion';

const ConclusionSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto relative z-10 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-8">
          Why Sentence Autocomplete Matters
        </h2>
        
        <p className="text-xl text-white/80 leading-relaxed mb-12">
          Typing less and finding more—instantly. Sentence Autocomplete speeds up search, 
          helps discover relevant info, and improves user experience across domains. 
          It's essential in a world where time and context matter most.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-shadow"
        >
          Get Started Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ConclusionSection;