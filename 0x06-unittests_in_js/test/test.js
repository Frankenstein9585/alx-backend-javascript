const assert = require('assert');

describe('array', () => {
  describe('#indexOf()', () => {
    // eslint-disable-next-line jest/expect-expect,jest/prefer-expect-assertions
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
