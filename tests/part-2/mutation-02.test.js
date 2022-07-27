const { data, getHighPriorityRecipeOfEachPriceType } = require('../../src/part-2/mutation-02');

describe('Another hidden mutation', () => {

  test('causes result to be non-deterministic', () => {
    const expectedResults = ['cookies', 'fancyPasta', 'cheeseCake'];
    expect(getHighPriorityRecipeOfEachPriceType(data)).toEqual(expectedResults);
    expect(getHighPriorityRecipeOfEachPriceType(data)).toEqual(expectedResults);
  });
})
