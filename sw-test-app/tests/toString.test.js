import toString from '../src/util_library/toString';
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('toString function', () => {
    it('should convert null to an empty string', () => {
    // it('should convert null to string "null"', () => {
        // original:
        expect(toString(null)).to.equal('');
        
        // modified:
        // expect(toString(null)).to.equal('null');
    });

    it('should convert undefined to an empty string', () => {
    // it('should convert undefined to string "undefined"', () => {
        // original:
        expect(toString(undefined)).to.equal('');

        //modified:
        // expect(toString(undefined)).to.equal('undefined');
    });

    it('should preserve the sign of -0', () => {
        expect(toString(-0)).to.equal('-0');
    });

    it('should convert an array to a comma-separated string', () => {
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    });

    it('should convert a number to a string', () => {
        expect(toString(123)).to.equal('123');
    });

    it('should convert a boolean to a string', () => {
        expect(toString(true)).to.equal('true');
        expect(toString(false)).to.equal('false');
    });

    it('should convert an array with mixed types including numbers and strings', () => {
        expect(toString([1, 'two', 3])).to.equal('1,two,3');
    });
    
    it('should convert an array with null and undefined to strings with empty values for these elements', () => {
        expect(toString([null, undefined, 1])).to.equal(',,1');
    });
    
    it('should convert an array with boolean values to their string representations', () => {
        expect(toString([true, false])).to.equal('true,false');
    });

    it("converts a Symbol to a string", () => {
        const symbol = Symbol("test symbol");
        expect(toString(symbol)).to.equal('Symbol(test symbol)');
    });
});