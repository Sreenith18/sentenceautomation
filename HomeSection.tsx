import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Clock, Target, Sparkles, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Smart Suggestions",
    description: "AI-powered completions that understand context",
    gradient: "from-[#7F00FF] to-[#00C9FF]"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time suggestions as you type",
    gradient: "from-[#FF6A6A] to-[#FFB347]"
  },
  {
    icon: Clock,
    title: "Time Saving",
    description: "Find what you need in seconds",
    gradient: "from-[#00C9A7] to-[#92FE9D]"
  },
  {
    icon: Target,
    title: "Precise Results",
    description: "Accurate and relevant completions",
    gradient: "from-[#F72585] to-[#7209B7]"
  },
  {
    icon: Sparkles,
    title: "Rich Content",
    description: "Diverse database across multiple domains",
    gradient: "from-[#3A0CA3] to-[#4CC9F0]"
  },
  {
    icon: TrendingUp,
    title: "Trending Now",
    description: "Stay updated with hot search topics",
    gradient: "from-[#007BFF] to-[#8A2BE2]"
  }
];

const HomeSection: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center text-white mb-8"
        >
          Welcome to Sentence Autocomplete
          <span className="block text-2xl md:text-3xl mt-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Type less. Discover more.
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl bg-gradient-to-br ${feature.gradient} transform hover:scale-105 transition-transform duration-300 cursor-pointer`}
            >
              <feature.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/90">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;