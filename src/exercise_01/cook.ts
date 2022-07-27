import { Ingredient, Recipe } from './types';

export function getPossibleRecipeNames(allRecipes: Recipe[], availableIngredients: Ingredient[]): Recipe['name'][] {
  let recipes = [];
  for (const recipe of allRecipes) {
    const ingredients = [];
    for (const i of availableIngredients) {
      if (recipe.ingredients.includes(i)) {
        ingredients.push(i);
      }
    }
    if (ingredients.length === recipe.ingredients.length) {
      recipes.push(recipe.name)
    }
  }
  return recipes;
}
