import { Recipe } from './types';

export const recipeData: Recipe[] = [
  {
    id: 1,
    title: "Quinoa Buddha Bowl",
    description: "A nutritious bowl packed with quinoa, roasted vegetables, and tahini dressing",
    category: "Lunch",
    prepTime: 25,
    servings: 2,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    keywords: ["vegan", "gluten-free", "protein", "healthy", "meal-prep", "bowl"],
    difficulty: "Easy",
    calories: 450
  },
  {
    id: 2,
    title: "Berry Smoothie Bowl",
    description: "Start your day with this antioxidant-rich smoothie bowl topped with fresh fruits",
    category: "Breakfast",
    prepTime: 10,
    servings: 1,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    keywords: ["vegetarian", "breakfast", "smoothie", "fruits", "antioxidants", "quick"],
    difficulty: "Easy",
    calories: 320
  },
  {
    id: 3,
    title: "Grilled Salmon",
    description: "Omega-3 rich salmon with lemon herb marinade and roasted vegetables",
    category: "Dinner",
    prepTime: 30,
    servings: 4,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    keywords: ["fish", "protein", "omega-3", "low-carb", "keto", "healthy"],
    difficulty: "Medium",
    calories: 520
  },
  {
    id: 4,
    title: "Green Protein Smoothie",
    description: "A protein-packed smoothie with spinach, banana, and plant-based protein",
    category: "Breakfast",
    prepTime: 5,
    servings: 1,
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    keywords: ["vegan", "protein", "smoothie", "green", "quick", "pre-workout"],
    difficulty: "Easy",
    calories: 280
  },
  {
    id: 5,
    title: "Mediterranean Salad",
    description: "Fresh salad with mixed greens, olives, feta cheese, and balsamic dressing",
    category: "Lunch",
    prepTime: 15,
    servings: 2,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    keywords: ["vegetarian", "mediterranean", "salad", "fresh", "low-calorie", "quick"],
    difficulty: "Easy",
    calories: 380
  },
  {
    id: 6,
    title: "Baked Chicken Breast",
    description: "Herb-seasoned chicken breast with sweet potato mash",
    category: "Dinner",
    prepTime: 40,
    servings: 4,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    keywords: ["chicken", "protein", "meal-prep", "low-fat", "healthy", "family"],
    difficulty: "Medium",
    calories: 450
  }
];