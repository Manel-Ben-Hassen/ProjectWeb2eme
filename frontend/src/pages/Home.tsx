import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Ready to Start Your Fitness Journey?
          </h2>
          <div className="flex justify-center space-x-6">
            <Link
              to="/programs"
              className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors"
            >
              View Programs
            </Link>
            <Link
              to="/trainers"
              className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-md hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Meet Trainers
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;