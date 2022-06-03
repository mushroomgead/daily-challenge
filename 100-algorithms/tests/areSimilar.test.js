const areSimilar = require('../areSimilar');

describe('Check value in array is similar', () => {
  test('should return true', () => {
    expect(areSimilar([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  test('should return true', () => {
    expect(areSimilar([1, 2, 3], [2, 1, 3])).toBe(true);
  });
  test('should return false', () => {
    expect(areSimilar([1, 2, 2], [2, 1, 1])).toBe(false);
  });
});
