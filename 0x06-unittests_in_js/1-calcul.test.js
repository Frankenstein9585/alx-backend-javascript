const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber: ADD', () => {
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

describe('calculateNumber: SUBTRACT', () => {
    it('Two decimals (positive)', () => {
        assert.equal(calculateNumber('SUBTRACT', 5.5, 0.4), 6);
    });

    it('Two decimals (negative)', () => {
        assert.equal(calculateNumber('SUBTRACT', 0.4, 5.5), -6);
    });

    it('Two whole numbers (negative)', () => {
        assert.equal(calculateNumber('SUBTRACT', 2, 4), -2);
    });

    it('Two whole numbers (positive)', () => {
        assert.equal(calculateNumber('SUBTRACT', 4, 2), 2);
    });

    it('One decimal one whole', () => {
        assert.equal(calculateNumber('SUBTRACT', 3.5, 3), 1);
    });
});

describe('calculateNumber: DIVIDE', () => {
    it('by 0', () => {
        assert.equal(calculateNumber('DIVIDE', 5.5, 0), 'Error');
    });

    it('Two whole numbers', () => {
        assert.equal(calculateNumber('DIVIDE', 2, 4), 0.5);
    });

    it('Two decimals', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('One decimal one whole number', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 2), 0.5);
    });
});
