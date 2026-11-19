import { Recipe } from '@/types/recipes';
import cls from './RecipeCard.module.css';

type RecipeCardProps = {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className={cls.card}>
      <header className={cls.header}>
        <img className={cls.img} src={recipe.image} alt="dish photo" />
      </header>
      <main className={cls.main}>
        <h2 className={cls.name}>{recipe.name}</h2>
        <div className={cls.types}>
          <span>{recipe.cuisine}</span>
          <span>{recipe.difficulty}</span>
        </div>
        <div className={cls.details}>
          <span>{`${recipe.cookTimeMinutes} мин`}</span>
          <span>{recipe.rating}</span> 
        </div>
      </main>
    </div>
  )
}