import React, { useState } from 'react';
import { Timer, Zap, Heart, Trophy, ArrowRight } from 'lucide-react';
import Modal from '../components/modals/Modal';
import ProgramDetails from '../components/programs/ProgramDetails';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const programs = [
    {
      title: "Quick Workouts",
      description: "20-minute effective routines for busy people. Perfect for maintaining fitness with a tight schedule.",
      icon: Timer,
      details: "Access over 100+ quick and effective workouts designed to maximize your time.",
    },
    {
      title: "HIIT Training",
      description: "High-intensity workouts for maximum results. Burn calories and improve endurance.",
      icon: Zap,
      details: "Science-backed HIIT workouts that boost metabolism and burn fat.",
    },
    {
      title: "Cardio Focus",
      description: "Improve stamina and heart health with varied cardio workouts suitable for all levels.",
      icon: Heart,
      details: "From beginner-friendly to advanced cardio sessions for optimal heart health.",
    },
    {
      title: "Strength Building",
      description: "Build muscle and increase power with bodyweight exercises and minimal equipment.",
      icon: Trophy,
      details: "Progressive strength training programs to help you build lean muscle at home.",
    }
  ];

  return (
    <>
      <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Programs
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from our diverse range of home workout programs designed to help you achieve your fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <program.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {program.description}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                      {program.details}
                    </p>
                    <button 
                      onClick={() => setSelectedProgram(program)}
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        title={selectedProgram?.title || ''}
      >
        {selectedProgram && <ProgramDetails program={selectedProgram} />}
      </Modal>
    </>
  );
};

export default Programs;