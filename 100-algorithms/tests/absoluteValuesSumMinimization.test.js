const absoluteValuesSumMinimization = require('../absoluteValuesSumMinimization');

describe('absoluteValuesSumMinimization', () => {
  test('should return 4', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7])).toBe(4);
  });
  test('should return 4', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7, 6])).toBe(4);
  });
  test('should return 7', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6])).toBe(7);
  });
});
