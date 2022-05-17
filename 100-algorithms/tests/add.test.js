const { add, sum } = require('../add');

test('adds 1 + 2 equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 3 + 2 equal 5', () => {
  expect(add(3, 2)).toBe(5);
});

test('sum of 1, 2, 3, 4, 5 equal 15', () => {
  expect(sum(1, 2, 3, 4, 5)).toBe(15);
});

test('sum of 3, 2 equal 5', () => {
  expect(sum(3, 2)).toBe(5);
});
