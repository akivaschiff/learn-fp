import * as _ from 'lodash';

/**
 * ideas:
 * read new data in the middle of the process. This should be extracted to top.
 * mutate data in place and override existing fields
 * global state problems (like the bug we had in boti)
 * maybe start "small". The simple mutation fix
 * passing functions can be a jump
 * take inspiration from our exercise
 * use reverse that it should mess it up!
 * use second order functions
 */

function main() {
  const ingredients: number[] = [];
  console.log('hello', ingredients);

  // const products = _.chain(ingredients)
  //   .groupBy('recipe')
  //   .mapValues(recipeIngredients => _.chain(recipeIngredients)
  //     .flatMap(ingredients => ingredients.components)
  //     .map(_formatAmount)
  //     .map(_multiplyByAmounts)
  //     .filter(_amountIsSignificant)
  //     .reduce(_createRecipeJson)
  //     .value()
  //   )
  //   .difference(_nonKosherRecipes)
  //   .
  //
  // const products = [];
}

main();
