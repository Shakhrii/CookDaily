import { useGetRecipesQuery } from "@/api/recipesApi";
import { RecipeCard } from "../RecipeCard";
import cls from './RecipesList.module.css';

export default function RecipesList() {
  const { data, isLoading, isError } = useGetRecipesQuery({ limit: 15, skip: 0 });

  return (
    <ul className={cls.list}>
      {data?.recipes.map((item) => (
        <RecipeCard recipe={{
          id: 0,
          name: "Margarita pizza",
          ingridients: [],
          instructions: [],
          prepTimeMinutes: 10,
          cookTimeMinutes: 40,
          servings: 0,
          difficulty: "medium",
          cuisine: "Italian",
          caloriesPerServing: 0,
          tags: [],
          image: "https://cdn.dummyjson.com/recipe-images/1.webp",
          rating: 4.9,
          reviewCount: 0,
          mealType: []
        }} />
      ))}
    </ul>
  );
}
