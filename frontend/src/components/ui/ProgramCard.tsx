import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  program: {
    title: string;
    description: string;
    icon: LucideIcon;
  };
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const Icon = program.icon;
  
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
      <Icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{program.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{program.description}</p>
    </div>
  );
};

export default ProgramCard;