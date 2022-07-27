import { Category, Ingredient, Recipe } from './types';

export function getKosherRecipeNames(allRecipes: Recipe[], availableIngredients: Ingredient[]): Recipe['name'][] {
  const recipes = [] as Recipe['name'][];
  for (const recipe of allRecipes) {
    let ingredients = [] as Ingredient[];
    let areIngredientsKosher = true;
    let hasDairyIngredient = false;
    for (const i of availableIngredients) {
      if (recipe.ingredients.includes(i.name)) {
        ingredients.push(i);
      }
    }
    ingredients.forEach(ingredient => {
      if (ingredient.category === Category.Dairy) {
        hasDairyIngredient = true;
      }
      if (!ingredient.isKosher) {
        areIngredientsKosher = false;
      }
    });
    if (hasDairyIngredient) {
      ingredients = ingredients.filter(i => i.category !== Category.Meat);
    }
    if (!areIngredientsKosher) {
      continue;
    }
    if (ingredients.length === recipe.ingredients.length) {
      recipes.push(recipe.name)
    }
  }
  return recipes;
}
