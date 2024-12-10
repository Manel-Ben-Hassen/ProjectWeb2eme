import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    features: string[];
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{plan.name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
        <span className="text-gray-600 dark:text-gray-400">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;