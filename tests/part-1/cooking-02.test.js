const _ = require('lodash');
const cooking = require('../../src/part-1/cooking-02');

describe('Ingredients to buy', () => {

  const { recipes } = cooking.data;
  const yourResults = cooking.getIngredientsToBuy(recipes);

  test('are calculated correctly', () => {
    // we sort the results just so we can compare them in alphabetical order
    expect(_.sortBy(yourResults, i => i.gramAmounts)).toEqual([
      { name: 'milk', gramAmounts: 120 },
      { name: 'eggs', gramAmounts: 250 },
      { name: 'flour', gramAmounts: 350 },
      { name: 'chicken', gramAmounts: 500 },
    ]);
  });
  test('uses variables instead of lodash', () => {
    expect(cooking.getIngredientsToBuy.toString()).not.toContain('let ');
    expect(cooking.getIngredientsToBuy.toString()).not.toContain('const ');
  });
})
