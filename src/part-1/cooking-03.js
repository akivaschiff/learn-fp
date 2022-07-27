const _ = require('lodash');

const data = {
  ingredients: [
    { name: 'milk', isKosher: true, category: 'dairy' },
    { name: 'cheerios', isKosher: true },
    { name: 'cheese', isKosher: true, category: 'dairy'  },
    { name: 'meat', isKosher: true, category: 'meat' },
    { name: 'crocodile', isKosher: false, category: 'meat' },
    { name: 'flour', isKosher: true },
  ],
  recipes: [
    { name: 'cereal', ingredients: ['cheerios', 'milk'] },
    { name: 'fruit', ingredients: ['apples'] },
    { name: 'lasagne', ingredients: ['cheese', 'meat'] },
    { name: 'porkCake', ingredients: ['flour', 'milk', 'pork'] },
  ],
};

function getKosherRecipeNames(allRecipes, availableIngredients) {
  const recipes = [];
  allRecipes.forEach(recipe => {
    let ingredients = [];
    let areIngredientsKosher = true;
    let hasDairyIngredient = false;
    availableIngredients.forEach(i => {
      if (recipe.ingredients.includes(i.name)) {
        ingredients.push(i);
      }
    })
    ingredients.forEach(ingredient => {
      if (ingredient.category === 'dairy') {
        hasDairyIngredient = true;
      }
      if (!ingredient.isKosher) {
        areIngredientsKosher = false;
      }
    });
    if (hasDairyIngredient) {
      ingredients = ingredients.filter(i => i.category !== 'meat');
    }
    if (areIngredientsKosher) {
      if (ingredients.length === recipe.ingredients.length) {
        recipes.push(recipe.name)
      }
    }
  })
  return recipes;
}

module.exports = {
  data,
  getKosherRecipeNames,
}
