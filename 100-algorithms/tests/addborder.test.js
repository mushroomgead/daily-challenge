const addborder = require('../addborder');

describe('Add asterisk to each of arrays', () => {
  test('before array of string should show *****', () => {
    const result = addborder(['abc']);
    expect(result[0]).toBe('*****');
  });

  test('the second element of an array should show *abc*', () => {
    const result = addborder(['abc']);
    expect(result[1]).toBe('*abc*');
  });

  test('the last element of an array should show *******', () => {
    const result = addborder(['abc']);
    expect(result[2]).toBe('*******');
  });
});
