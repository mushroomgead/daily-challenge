const alternatingSums = require('../alternatingSums');

describe('saparate index by odd/even and then sum by group', () => {
  test('should return [180. 105]', () => {
    expect(alternatingSums([50, 60, 60, 45, 70])).toEqual([180, 105]);
  });
});
