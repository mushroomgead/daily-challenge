const allLargestStrings = require('../allLargestStrings');

describe('return array containing all of its longest strings', () => {
  test('should return ["aba", "vcd", "aba"]', () => {
    expect(allLargestStrings(['aba', 'aa', 'ad', 'vcd', 'aba'])).toEqual(
      expect.arrayContaining(['aba', 'vcd', 'aba'])
    );
  });
});
