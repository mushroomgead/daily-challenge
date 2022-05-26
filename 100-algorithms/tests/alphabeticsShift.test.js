const alphabeticsShift = require('../alphabeticsShift');

describe('replace each its character by the next one in the English alphabet.', () => {
  test('crazy should be return dsbaz', () => {
    expect(alphabeticsShift('crazy')).toBe('dsbaz');
  });
});
