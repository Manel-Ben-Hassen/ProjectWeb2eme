import React from 'react';
import { CheckCircle, Clock, Target, Users } from 'lucide-react';

interface ProgramDetailsProps {
  program: {
    title: string;
    description: string;
    details: string;
  };
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ program }) => {
  const features = [
    { icon: Clock, text: "Flexible scheduling" },
    { icon: Target, text: "Personalized goals" },
    { icon: Users, text: "Community support" },
  ];

  return (
    <div className="space-y-6">
      <p className="text-gray-600 dark:text-gray-300">{program.description}</p>
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 dark:text-white">Program Features:</h4>
        <div className="grid grid-cols-1 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <feature.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-gray-600 dark:text-gray-300">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 dark:text-white">What You'll Get:</h4>
        <ul className="space-y-2">
          <li className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-gray-600 dark:text-gray-300">Detailed workout plans</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-gray-600 dark:text-gray-300">Progress tracking</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-gray-600 dark:text-gray-300">Nutrition guidance</span>
          </li>
        </ul>
      </div>
      <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
        Start Free Trial
      </button>
    </div>
  );
};

export default ProgramDetails;