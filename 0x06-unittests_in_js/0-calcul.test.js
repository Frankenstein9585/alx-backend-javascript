const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
    it('should return 5', () => {
        assert.equal(calculateNumber(1, 4), 5);
    });

    it('should return -2', () => {
        assert.equal(calculateNumber(-4, 2), -2);
    });

    it('should return 6', () => {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });

    it('should return 7', () => {
        assert.equal(calculateNumber(3.5, 3), 7);
    });

    it('should return -3', () => {
        assert.equal(calculateNumber(-1.5, -1.6), -3);
    });
});
