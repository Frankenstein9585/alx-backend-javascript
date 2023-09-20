const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
    it('Two whole numbers', () => {
        assert.equal(calculateNumber(1, 4), 5);
    });

    it('One negative one positive', () => {
        assert.equal(calculateNumber(-4, 2), -2);
    });

    it('One positive one negative', () => {
        assert.equal(calculateNumber(4, -2), 2);
    });

    it('Two positive decimals', () => {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });

    it('Two positive decimals(<.5)', () => {
        assert.equal(calculateNumber(1.4, 3.7), 5);
    });

    it('One decimal one whole', () => {
        assert.equal(calculateNumber(3.5, 3), 7);
    });

    it('One whole one decimal', () => {
        assert.equal(calculateNumber(3, 3.5), 7);
    });

    it('Two negative decimals', () => {
        assert.equal(calculateNumber(-1.5, -1.6), -3);
    });
});
