import React from 'react';
import { Clock, Users, Flame, ChefHat } from 'lucide-react';
import { Recipe } from './types';
import RecipeKeywords from './RecipeKeywords';

interface RecipeCardProps {
  recipe: Recipe;
  onViewRecipe: (recipe: Recipe) => void;
  onKeywordClick: (keyword: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onViewRecipe, onKeywordClick }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm">
            {recipe.category}
          </span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {recipe.prepTime} mins
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Flame className="h-4 w-4 mr-1" />
              {recipe.calories} cal
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{recipe.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{recipe.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Users className="h-4 w-4 mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <ChefHat className="h-4 w-4 mr-1" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>
        <div className="mb-4">
          <RecipeKeywords keywords={recipe.keywords} onKeywordClick={onKeywordClick} />
        </div>
        <button 
          onClick={() => onViewRecipe(recipe)}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;