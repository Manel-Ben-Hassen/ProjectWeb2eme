import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import RecipeCard from '../components/recipes/RecipeCard';
import RecipeFilter from '../components/recipes/RecipeFilter';
import RecipeDetails from '../components/recipes/RecipeDetails';
import Modal from '../components/modals/Modal';
import { recipeData } from '../components/recipes/recipeData';
import { Recipe } from '../components/recipes/types';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [...new Set(recipeData.map((recipe) => recipe.category))];
  const difficulties = ['Easy', 'Medium', 'Hard'];

  const handleKeywordClick = (keyword: string) => {
    setSearchQuery(keyword);
  };

  const filteredRecipes = recipeData.filter((recipe) => {
    const searchTerms = searchQuery.toLowerCase().split(' ');
    const matchesSearch = searchTerms.every(term =>
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term) ||
      recipe.keywords.some(keyword => keyword.toLowerCase().includes(term))
    );
    
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <>
      <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Healthy Recipes
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover delicious and nutritious recipes for a healthier lifestyle
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                placeholder="Search recipes by name, description, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">Filters:</span>
            </div>
            <RecipeFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <div className="flex space-x-2">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty.toLowerCase() === selectedDifficulty.toLowerCase() ? 'all' : difficulty)}
                  className={`px-4 py-2 rounded-full ${
                    selectedDifficulty === difficulty
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onViewRecipe={setSelectedRecipe}
                onKeywordClick={handleKeywordClick}
              />
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300">No recipes found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        title={selectedRecipe?.title || ''}
      >
        {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      </Modal>
    </>
  );
};

export default Recipes;