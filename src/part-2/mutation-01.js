const _ = require('lodash');

const data = [
  { name: 'flour', barcode: { id: '293234' }, expireBy: '2023-09-10', category: 3 },
  { name: 'cheese', barcode: { id: '235234', optionalId: '726' }, expireBy: '2022-09-01', category: 26 },
  { name: 'walnuts', barcode: { id: '92638', optionalId: '1934' }, expireBy: '2022-09-31', category: 3 },
  { name: 'tomato', barcode: { id: '601346' }, expireBy: '2022-09-03', category: 5 },
  { name: 'beets', barcode: { id: '23632' }, expireBy: '2022-09-27', category: 72 },
  { name: 'lightsabers', barcode: { id: '74345' }, expireBy: '2023-05-04', category: 1 },
  { name: 'sugar', barcode: { id: '12543', optionalId: '9345' }, expireBy: '2050-03-17', category: 3 },
  { name: 'apples', barcode: { id: '75956', optionalId: '3572' }, expireBy: '2022-08-19', category: 3 },
  { name: 'oreos', barcode: { id: '34583' }, expireBy: '2099-01-01', category: 1 },
  { name: 'pizza', barcode: { id: '12846' }, expireBy: '2022-09-07', category: 26 },
]

const defaultProductTemplate = {
  name: null,
  defaultType: null,
  sourceName: 'nabisco',
  barcode: {
    id: null,
    optionalId: null,
  },
  expireBy: '2022-12-31',
  category: 0,
  inStock: true,
}

function getProductReports(products) {
  return _.chain(products)
    .map(product => _addCategoryTotal(product, products))
    .filter(product => product.categoryTotal > 1)
    .map(product => _.merge(defaultProductTemplate, product))
    .value();
}

function _addCategoryTotal(product, products) {
  return { ...product, categoryTotal: _.filter(products, p => p.category === product.category).length };
}

module.exports = {
  data,
  getProductReports,
}
