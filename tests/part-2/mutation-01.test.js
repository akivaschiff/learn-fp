const _ = require('lodash');
const { data, getProductReports } = require('../../src/part-2/mutation-01');

describe('A hidden mutation', () => {
  const products = getProductReports(data);
  const hasDuplicateIds = _.uniqBy(products, p => p.barcode.id).length !== products.length;
  test('causes products with duplicate ids', () => {
    expect(hasDuplicateIds).toBe(false);
  });
  const optionalIds = _.chain(products)
    .map(p => p.barcode.optionalId)
    .compact()
    .value();
  const hasDuplicateOptionalIds = _.uniq(optionalIds).length !== optionalIds.length;
  test('causes products with duplicate optionalIds', () => {
    console.log(hasDuplicateOptionalIds);
    expect(hasDuplicateOptionalIds).toBe(false);
  });
})
