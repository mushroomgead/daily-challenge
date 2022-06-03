const arrayConversion = require('../arrayConversion');

describe('sum the number (2 time at the time) in array until array contains only one element', () => {
  test('should be return 186', () => {
    expect(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])).toBe('186');
  });
});
