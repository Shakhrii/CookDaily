export type Recipe = {
  id: number;
  name: string;
  ingridients: [];
  instructions: [];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: [];
  image: string;
  rating: number;
  reviewCount: number;
  mealType: []
}

export type RecipesParams = {
  limit: number;
  skip: number;
}

export type RecipesResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}