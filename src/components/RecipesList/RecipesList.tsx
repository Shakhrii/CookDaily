import { useGetRecipesQuery } from "@/api/recipesApi";
import { RecipeCard } from "../RecipeCard";
import cls from "./RecipesList.module.css";
import { Loader } from "../Loader";

export default function RecipesList() {
  const { data, isLoading, isError } = useGetRecipesQuery({
    limit: 6,
    skip: 0,
  });

  return (
    <>
      {isLoading && <Loader />}
      <ul className={cls.list}>
        {data?.recipes.map((item) => (
          <RecipeCard recipe={item} />
        ))}
      </ul>
    </>
  );
}
