import { Ingredient, Recipe } from '../src/exercise_01/types';
import * as cook from '../src/exercise_01/cook';
import * as cookSolution from '../src/exercise_01/cook.solution';

describe('Available recipes', () => {
  test('are calculated correctly', () => {
    const ingredients = ['cheerios', 'milk', 'apples'] as Ingredient[];
    const allRecipes = [
      { name: 'cereal', ingredients: ['cheerios', 'milk'] },
      { name: 'fruit', ingredients: ['apples'] },
      { name: 'cake', ingredients: ['flour', 'milk', 'eggs'] },
    ] as Recipe[];
    expect(cook.getPossibleRecipeNames(allRecipes, ingredients)).toEqual(['cereal', 'fruit'])
    expect(cookSolution.getPossibleRecipeNames(allRecipes, ingredients)).toEqual(['cereal', 'fruit'])
  });
})
