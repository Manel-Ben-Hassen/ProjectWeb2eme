import React from 'react';

interface RecipeKeywordsProps {
  keywords: string[];
  onKeywordClick: (keyword: string) => void;
}

const RecipeKeywords: React.FC<RecipeKeywordsProps> = ({ keywords, onKeywordClick }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {keywords.map((keyword, index) => (
        <button
          key={index}
          onClick={() => onKeywordClick(keyword)}
          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
        >
          #{keyword}
        </button>
      ))}
    </div>
  );
};

export default RecipeKeywords;