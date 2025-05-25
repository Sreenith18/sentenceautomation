import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Mic } from 'lucide-react';
import { getSuggestions } from '../services/suggestionService';

const AutocompleteSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim()) {
        setIsLoading(true);
        const results = await getSuggestions(query);
        setSuggestions(results);
        setIsLoading(false);
      } else {
        setSuggestions([]);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-[#FF6347]">🔍 Sentence Auto Complete</span>
        </motion.h2>

        <div className="relative">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Start typing to search..."
              className="w-full px-6 py-4 text-lg bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-shadow duration-300"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
              {isLoading && (
                <div className="w-5 h-5 border-t-2 border-purple-500 rounded-full animate-spin"></div>
              )}
              <Search className="w-6 h-6 text-white/50" />
            </div>
          </div>

          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute w-full mt-2 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden shadow-lg"
            >
              {suggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 hover:bg-white/20 cursor-pointer text-white transition-colors"
                  onClick={() => setQuery(suggestion)}
                >
                  {suggestion}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <div className="mt-8 text-center text-white/60">
          <p>Try searching for sports, actors, technology, or anything else!</p>
        </div>
      </div>
    </section>
  );
};

export default AutocompleteSection;