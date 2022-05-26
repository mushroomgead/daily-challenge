const alphabeticSubsequence = require('../alphabeticSubsequence');

describe('check string is subsequence of the plaintext alphabet', () => {
  test('effg should return false', () => {
    expect(alphabeticSubsequence('effg')).toBe(false);
  });
  test('cdce should return false', () => {
    expect(alphabeticSubsequence('cdce')).toBe(false);
  });
  test('zab should return false', () => {
    expect(alphabeticSubsequence('zab')).toBe(false);
  });
  test('ace should return false', () => {
    expect(alphabeticSubsequence('ace')).toBe(true);
  });
  test('bxz should return false', () => {
    expect(alphabeticSubsequence('bxz')).toBe(true);
  });
});
