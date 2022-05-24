const addTwoDigits = require('../addTwoDigits.js');

describe('split digits in a number and sum', () => {
  test('a number 2 plus 9 equal 11 ', () => {
    expect(addTwoDigits(29)).toBe(11);
  });
});
