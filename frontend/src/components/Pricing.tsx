import React from 'react';
import { Check } from 'lucide-react';
import PricingCard from './ui/PricingCard';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "29",
      features: [
        "Access to basic workout library",
        "Weekly new workouts",
        "Progress tracking",
        "Community support"
      ]
    },
    {
      name: "Pro",
      price: "49",
      features: [
        "All Basic features",
        "Personalized workout plans",
        "Nutrition guidance",
        "Live chat support",
        "Monthly fitness assessment"
      ]
    },
    {
      name: "Elite",
      price: "99",
      features: [
        "All Pro features",
        "1-on-1 virtual coaching",
        "Custom meal plans",
        "Priority support",
        "Weekly check-ins",
        "Goal setting sessions"
      ]
    }
  ];

  return (
    <div id="pricing" className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Simple Pricing</h2>
          <p className="text-gray-600 dark:text-gray-400">Choose the plan that fits your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;