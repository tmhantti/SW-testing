import add from '../src/util_library/add';

const expect = require('chai').expect;
const assert = require('chai').assert;


describe('Add.js:', () => {
    let a = 1.25;
    let b = 2;
    let c = -3;
    let result;

    it(`addition - adds ${a} and ${b}, should return ${a + b} with type "number"`, (done) => {
        result = add(a, b);        
        expect(result).to.equal((a + b));
        assert.isNumber(result, 'add.js returns variable with type "number"');
        done();
    });

    it(`substraction (by adding a negative number) - adds ${a} and ${c}, should return ${a + c} with type "number"`, (done) => {
        result = add(a, c);        
        expect(result).to.equal((a + c));
        assert.isNumber(result, 'add.js returns variable with type "number"');
        done();
    });

    it('should return 0 for 0 + 0', () => {
        expect(add(0, 0)).to.equal(0);
    });

    it('should return 0 for -1 + (-1)', () => {
        expect(add(-1, -1)).to.equal(-2);
    });

    it('should return 199.98 for 99.99 + 99.99', () => {
        expect(add(99.99, 99.99)).to.equal(199.98);
    });

    it('should return 0 for 5 + (-5)', () => {
        expect(add(5, -5)).to.equal(0);
    });

    it('should return 0 for -5 + 5', () => {
        expect(add(-5, 5)).to.equal(0);
    });

    it('should return 5 for 0 + 5', () => {
        expect(add(0, 5)).to.equal(5);
    });

    it('should return 5 for 5 + 0', () => {
        expect(add(5, 0)).to.equal(5);
    });

    it('should handle Infinity and -Infinity correctly', () => {
        expect(add(Infinity, Infinity)).to.equal(Infinity);
        expect(add(-Infinity, -Infinity)).to.equal(-Infinity);
    });

    it('should handle very small fractional numbers', () => {
        expect(add(0.0000001, 0.0000002)).to.be.closeTo(0.0000003, 1e-10);
    });

    it('should handle very large numbers', () => {
        expect(add(1e+308, 1e+308)).to.equal(2e+308);
    });

});
