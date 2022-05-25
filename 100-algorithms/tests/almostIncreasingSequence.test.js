const almostIncreasingSequence = require('../almostIncreasingSequence');

describe('determine whether it is possible to obtain a stricly increasing sequence by removing no more one element from array', () => {
  test('should return false', () => {
    expect(almostIncreasingSequence([1, 3, 2, 1])).toBe(false);
  });

  test('should return true', () => {
    expect(almostIncreasingSequence([1, 3, 2])).toBe(true);
  });

  test('should return false', () => {
    expect(almostIncreasingSequence([2, 2, 1])).toBe(false);
  });

  test('should return true', () => {
    expect(almostIncreasingSequence([2, 2])).toBe(true);
  });
});
