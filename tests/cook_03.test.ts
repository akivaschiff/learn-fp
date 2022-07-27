import { Category, Ingredient, Recipe } from '../src/exercise_03/types';
import * as cook from '../src/exercise_03/cook';
import * as cookSolution from '../src/exercise_03/cook.solution';

describe('Kosher recipes', () => {
  test('are calculated correctly', () => {
    const ingredients = [
      { name: 'milk', isKosher: true, category: Category.Dairy },
      { name: 'cheerios', isKosher: true, category: Category.Parve },
      { name: 'cheese', isKosher: true, category: Category.Dairy },
      { name: 'meat', isKosher: true, category: Category.Meat },
      { name: 'pork', isKosher: false, category: Category.Meat },
      { name: 'flour', isKosher: true, category: Category.Parve },
    ] as Ingredient[];
    const allRecipes = [
      { name: 'cereal', ingredients: ['cheerios', 'milk'] },
      { name: 'fruit', ingredients: ['apples'] },
      { name: 'lasagne', ingredients: ['cheese', 'meat'] },
      { name: 'porkCake', ingredients: ['flour', 'milk', 'pork'] },
    ] as Recipe[];
    expect(cook.getKosherRecipeNames(allRecipes, ingredients)).toEqual(['cereal']);
    expect(cookSolution.getKosherRecipeNames(allRecipes, ingredients)).toEqual(['cereal', 'fruit'])
  });
})
