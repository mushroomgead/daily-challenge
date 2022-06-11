const sumValueEqualSpecifiedNumber = require('../sumValueEqualSpecifiedNumber');

describe('find the sum value that equal a specified number', () => {
  test('if specific number is 9, min of number is 0 and max is 100 should return 9, 18, 27, 36, 45, 54, 63, 72, 81, 90', () => {
    expect(sumValueEqualSpecifiedNumber(9, 0, 100)).toEqual([
      9, 18, 27, 36, 45, 54, 63, 72, 81, 90,
    ]);
  });
});
