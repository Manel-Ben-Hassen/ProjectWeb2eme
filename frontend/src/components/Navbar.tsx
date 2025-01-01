import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/PersonalTrainerFitnessLogo.png';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  
  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setUser(null);
        return;
      }

      
      const decodedToken = jwtDecode(token); 
      const userId = decodedToken.id;

      const response = await axios.get(`http://localhost:5000/api/auth/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data.user);
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      setUser(null);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout");
      localStorage.removeItem("token");
      setUser(null);
      navigate('/auth');
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed! Please try again.");
    }
  };

  
  useEffect(() => {
    fetchUserProfile();
  }, [localStorage.getItem('token')]); 

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
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 dark:text-gray-200 font-medium">
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
