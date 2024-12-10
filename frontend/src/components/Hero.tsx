import React from 'react';
import bg from '../assets/HomeFit.jpg';

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 transition-opacity"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Body,<br />From Home
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get fit and healthy with personalized workout programs designed for your home. No equipment needed - just your dedication and our expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
