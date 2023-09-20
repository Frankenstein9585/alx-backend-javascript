const calculateNumber = require('./1-calcul.js');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber: ADD', () => {
    it('Two whole numbers', () => {
        expect(calculateNumber('SUM',1, 4)).to.equal(5);
    });

    it('One negative one positive', () => {
       expect(calculateNumber('SUM',-4, 2)).to.equal(-2);
    });

    it('Two decimals', () => {
        expect(calculateNumber('SUM',1.5, 3.7)).to.equal(6);
    });

    it('One decimal one whole', () => {
        expect(calculateNumber('SUM', 3.5, 3)).to.equal(7);
    });

});

describe('calculateNumber: SUBTRACT', () => {
    it('Two decimals (positive)', () => {
        expect(calculateNumber('SUBTRACT', 5.5, 0.4)).to.equal(6);
    });

    it('Two decimals (negative)', () => {
        expect(calculateNumber('SUBTRACT', 0.4, 5.5)).to.equal(-6);
    });

    it('Two whole numbers (negative)', () => {
        expect(calculateNumber('SUBTRACT', 2, 4)).to.equal(-2);
    });

    it('Two whole numbers (positive)', () => {
        expect(calculateNumber('SUBTRACT', 4, 2)).to.equal(2);
    });

    it('One decimal one whole', () => {
        expect(calculateNumber('SUBTRACT', 3.5, 3)).to.equal(1);
    });
});

describe('calculateNumber: DIVIDE', () => {
    it('by 0', () => {
        expect(calculateNumber('DIVIDE', 5.5, 0)).to.equal('Error');
    });

    it('Two whole numbers', () => {
        expect(calculateNumber('DIVIDE', 2, 4)).to.equal(0.5);
    });

    it('Two decimals', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('One decimal one whole number', () => {
        expect(calculateNumber('DIVIDE', 1.4, 2)).to.equal(0.5);
    });
});
