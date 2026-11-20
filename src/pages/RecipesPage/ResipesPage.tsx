import { RecipesList } from "@/components/RecipesList";
import cls from './RecipesPage.module.css';

export default function RecipesPage() {
  return (
    <div className={cls.section}>
      <RecipesList/> 
    </div>
  );
}