export interface Recipe {
  id: number;
  title: string;
  description: string;
  category: string;
  prepTime: number;
  servings: number;
  image: string;
  keywords: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  calories: number;
}