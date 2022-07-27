const _ = require('lodash');

const data = {
  ingredients: ['cheerios', 'milk', 'apples'],
  recipes: [
    { name: 'cereal', ingredients: ['cheerios', 'milk'] },
    { name: 'fruit', ingredients: ['apples'] },
    { name: 'cake', ingredients: ['flour', 'milk', 'eggs'] },
  ],
}

function getPossibleRecipeNames(allRecipes, availableIngredients) {
  let recipes = [];
  for (const recipe of allRecipes) {
    const ingredients = [];
    availableIngredients.forEach(i => {
      if (recipe.ingredients.includes(i)) {
        ingredients.push(i);
      }
    })
    if (ingredients.length === recipe.ingredients.length) {
      recipes.push(recipe.name)
    }
  }
  return recipes;
}

module.exports = {
  data,
  getPossibleRecipeNames,
}
