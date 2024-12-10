import React from 'react';

interface TrainerCardProps {
  trainer: {
    name: string;
    specialty: string;
    image: string;
  };
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
      <img 
        src={trainer.image} 
        alt={trainer.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{trainer.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{trainer.specialty}</p>
      </div>
    </div>
  );
};

export default TrainerCard;