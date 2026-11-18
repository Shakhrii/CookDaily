import { useGetRecipesQuery } from "@/api/recipesApi";

export default function RecipesList() {
  const { data, isLoading, isError } = useGetRecipesQuery({ limit: 15, skip: 0 });

  return (
    <ul>
      {data?.recipes.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
