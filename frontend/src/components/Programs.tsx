import React from 'react';
import { Timer, Zap, Heart, Trophy } from 'lucide-react';
import ProgramCard from './ui/ProgramCard';

const Programs = () => {
  const programs = [
    {
      title: "Quick Workouts",
      description: "20-minute effective routines for busy people",
      icon: Timer
    },
    {
      title: "HIIT Training",
      description: "High-intensity workouts for maximum results",
      icon: Zap
    },
    {
      title: "Cardio Focus",
      description: "Improve stamina and heart health",
      icon: Heart
    },
    {
      title: "Strength Building",
      description: "Build muscle and increase power",
      icon: Trophy
    }
  ];

  return (
    <div id="programs" className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Programs</h2>
          <p className="text-gray-600 dark:text-gray-400">Choose the perfect workout program that fits your goals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;