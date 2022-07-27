const _ = require('lodash');
const cooking = require('../../src/part-1/cooking-01');

describe('Possible recipes', () => {

  const { ingredients, recipes } = cooking.data;
  const yourResults = cooking.getPossibleRecipeNames(recipes, ingredients);

  test('are calculated correctly', () => {
    // we sort the results just so we can compare them in alphabetical order
    expect(_.sortBy(yourResults)).toEqual(['cereal', 'fruit']);
  });
  test('uses variables instead of lodash', () => {
    expect(cooking.getPossibleRecipeNames.toString()).not.toContain('let ');
    expect(cooking.getPossibleRecipeNames.toString()).not.toContain('const ');
  });
})
