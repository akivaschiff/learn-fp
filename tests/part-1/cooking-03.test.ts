const cooking = require('../../src/part-1/cooking-03');

describe('Kosher recipes', () => {

  const { ingredients, recipes } = cooking.data;
  const yourResults = cooking.getKosherRecipeNames(recipes, ingredients);

  test('are calculated correctly', () => {
    // we sort the results just so we can compare them in alphabetical order
    expect(yourResults).toEqual(['cereal']);
  });
  test('uses variables instead of lodash', () => {
    expect(cooking.getKosherRecipeNames.toString()).not.toContain('let ');
    expect(cooking.getKosherRecipeNames.toString()).not.toContain('const ');
  });
})
