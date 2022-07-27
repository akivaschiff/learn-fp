const _ = require('lodash');

const data = [
  { name: 'blueberryMuffins', ingredients: [{ amount: 20 }, { amount: 18 }] },
  { name: 'cookies', ingredients: [{ amount: 12 }, { amount: 11 }] },
  { name: 'hummus', ingredients: [{ amount: 32 }, { amount: 9 }] },
  { name: 'lasagna', ingredients: [{ amount: 51 }, { amount: 14 }] },
  { name: 'fancyPasta', ingredients: [{ amount: 65 }, { amount: 5 }] },
  { name: 'salmon', ingredients: [{ amount: 50 }, { amount: 40 }] },
  { name: 'cheeseCake', ingredients: [{ amount: 110 }, { amount: 10 }] },
]

// this is the priority order from lowest to highest
const recipePriorities = ['blueberryMuffins', 'cookies', 'hummus', 'lasagna', 'fancyPasta', 'salmon', 'cheeseCake'];

function getHighPriorityRecipeOfEachPriceType(recipes) {
  return _.chain(recipes)
    .map(_calcSum)
    .groupBy(_getPriceType)
    .mapValues(recipes => _.chain(recipes)
      .map(recipe => recipe.name)
      .map(name => ({ name, priority: _calculateRecipePriority(name) }))
      .minBy(item => item.priority)
      .value()
    )
    .values()
    .map(recipe => recipe.name)
    .value();
}

function _calculateRecipePriority(recipeName) {
  return _.chain(recipePriorities).reverse().indexOf(recipeName).value();
}

function _calcSum(recipe) {
  return _.extend(recipe, { sum: _.sumBy(recipe.ingredients, i => i.amount) });
}

function _getPriceType(recipe) {
  if (recipe.sum > 80) {
    return 'expensive';
  } else if (recipe.sum > 40) {
    return 'average'
  }
  return 'cheap';
}

module.exports = {
  getHighPriorityRecipeOfEachPriceType,
  data,
}
