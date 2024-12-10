import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from './types';

interface RecipeDetailsProps {
  recipe: Recipe;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  const ingredients = [
    "2 cups quinoa, cooked",
    "1 cup mixed vegetables",
    "1/2 cup chickpeas",
    "1 avocado",
    "2 tbsp olive oil",
    "Salt and pepper to taste"
  ];

  const instructions = [
    "Cook quinoa according to package instructions",
    "Roast vegetables in the oven at 400°F for 20 minutes",
    "Combine all ingredients in a bowl",
    "Add dressing and toss to combine",
    "Season with salt and pepper"
  ];

  return (
    <div className="space-y-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-400 mr-1" />
            <span className="text-gray-600 dark:text-gray-300">{recipe.prepTime} mins</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-gray-400 mr-1" />
            <span className="text-gray-600 dark:text-gray-300">{recipe.servings} servings</span>
          </div>
        </div>
        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm">
          {recipe.category}
        </span>
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Ingredients</h4>
        <ul className="space-y-2">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <ChefHat className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <span>{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Instructions</h4>
        <ol className="space-y-2">
          {instructions.map((instruction, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">
              {index + 1}. {instruction}
            </li>
          ))}
        </ol>
      </div>
      <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
        Save Recipe
      </button>
    </div>
  );
};

export default RecipeDetails;