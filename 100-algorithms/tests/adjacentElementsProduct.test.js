const adjacentElementsProduct = require('../adjacentElementsProduct');

describe('find the pair of adjacent element that has return the largest value', () => {
  test('should return 21', () => {
    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);
  });
});
