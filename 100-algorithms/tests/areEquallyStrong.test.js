const areEquallyStrong = require('../areEquallyStrong');

describe('find out if you two are equally strong', () => {
  test('should return true', () => {
    expect(areEquallyStrong(10, 15, 15, 10)).toBe(true);
  });
  test('should return true', () => {
    expect(areEquallyStrong(15, 10, 15, 10)).toBe(true);
  });
  test('should return false', () => {
    expect(areEquallyStrong(15, 10, 15, 9)).toBe(false);
  });
});
