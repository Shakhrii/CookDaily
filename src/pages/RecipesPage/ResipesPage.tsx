import { RecipesList } from "@/components/RecipesList";
import cls from "./RecipesPage.module.css";
import { Pagination } from "@/components/Pagination";

export default function RecipesPage() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.section}>
        <RecipesList />
        <div className={cls.pagination}>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
