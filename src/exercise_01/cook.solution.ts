import * as _ from 'lodash';
import { Ingredient, Recipe } from './types';

function _hasAllIngredients(recipe: Recipe, availableIngredients: Ingredient[]) {
  return _.isEmpty(_.difference(recipe.ingredients, availableIngredients));
}

export function getPossibleRecipeNames(allRecipes: Recipe[], availableIngredients: Ingredient[]): Recipe['name'][] {
  return allRecipes
      .filter(recipe => _hasAllIngredients(recipe, availableIngredients))
      .map(recipe => recipe.name);
}
