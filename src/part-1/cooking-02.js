const _ = require('lodash');

const data = {
  recipes: [
    { name: 'cake', ingredients: [
        { name: 'flour', gramAmounts: 250 },
        { name: 'milk', gramAmounts: 120 },
        { name: 'eggs', gramAmounts: 100 },
        { name: 'bakingPowder', gramAmounts: 20 },
      ]
    },
    { name: 'shnitzel', ingredients: [
        { name: 'flour', gramAmounts: 100 },
        { name: 'chicken', gramAmounts: 500 },
        { name: 'eggs', gramAmounts: 150 },
      ]
    },
  ],
};

const IGNORABLE_SMALL_AMOUNT = 40;

function getIngredientsToBuy(allRecipes) {
  const allIngredients = [];
  const ingredientToAmount = {};
  allRecipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      if (ingredient.gramAmounts > IGNORABLE_SMALL_AMOUNT) {
        allIngredients.push(ingredient);
      }
    })
  })
  allIngredients.forEach(ingredient => {
    if (!ingredientToAmount[ingredient.name]) {
      ingredientToAmount[ingredient.name] = ingredient.gramAmounts;
    } else {
      ingredientToAmount[ingredient.name] += ingredient.gramAmounts;
    }
  })
  return Object.keys(ingredientToAmount).map(name => {
    return { name, gramAmounts: ingredientToAmount[name] || 0 };
  });
}

module.exports = {
  data,
  getIngredientsToBuy,
}
