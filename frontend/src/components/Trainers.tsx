import React from 'react';
import TrainerCard from './ui/TrainerCard';

const Trainers = () => {
  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "HIIT & Cardio",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
      name: "Mike Thompson",
      specialty: "Strength Training",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
      name: "Emma Davis",
      specialty: "Yoga & Flexibility",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div id="trainers" className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Expert Trainers</h2>
          <p className="text-gray-600 dark:text-gray-400">Work with certified professionals who care about your success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;