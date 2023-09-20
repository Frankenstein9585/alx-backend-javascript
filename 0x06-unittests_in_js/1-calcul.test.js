const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber: ADD', () => {
    it('should return 5', () => {
        assert.equal(calculateNumber('SUM',1, 4), 5);
    });

    it('should return -2', () => {
        assert.equal(calculateNumber('SUM',-4, 2), -2);
    });

    it('should return 6', () => {
        assert.equal(calculateNumber('SUM',1.5, 3.7), 6);
    });

});

describe('calculateNumber: SUBTRACT', () => {
    it('should return 6', () => {
        assert.equal(calculateNumber('SUBTRACT', 5.5, 0.4), 6);
    });

    it('should return -2', () => {
        assert.equal(calculateNumber('SUBTRACT', 2, 4), -2);
    });
});

describe('calculateNumber: DIVIDE', () => {
    it('should return Error', () => {
        assert.equal(calculateNumber('DIVIDE', 5.5, 0), 'Error');
    });

    it('should return 0.5', () => {
        assert.equal(calculateNumber('DIVIDE', 2, 4), 0.5);
    });

    it('should return 0.2', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
});
