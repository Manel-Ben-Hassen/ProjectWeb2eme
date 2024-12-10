import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/3159df52-6743-49ea-b548-51c67d5eb5e7.jpg'; // Import the SVG file

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm fixed w-full z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
             
              <img src={logo} alt="HomeFit Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">HomeFit</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${
                location.pathname === '/' 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/recipes" 
              className={`${
                location.pathname === '/recipes' 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              Recipes
            </Link>
            <Link 
              to="/programs" 
              className={`${
                location.pathname === '/programs' 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              Programs
            </Link>
            <Link 
              to="/trainers" 
              className={`${
                location.pathname === '/trainers' 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              Trainers
            </Link>
            <ThemeToggle />
            <Link 
              to="/auth" 
              className={`${
                location.pathname === '/auth'
                  ? 'bg-indigo-700 dark:bg-indigo-600'
                  : 'bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600'
              } text-white px-4 py-2 rounded-md`}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
