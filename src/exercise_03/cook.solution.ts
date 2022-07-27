import * as _ from 'lodash';
import { Ingredient, Recipe, Category } from './types';

export function getKosherRecipeNames(allRecipes: Recipe[], availableIngredients: Ingredient[]): Recipe['name'][] {
  console.log('categories: ', Object.keys(Category));
  return ['your code here'];
}
