import capitalize from '../src/util_library/capitalize';
const expect = require('chai').expect;

describe('capitalize function', () => {
    it('should capitalize the first character and lower case the rest', () => {
        expect(capitalize('FRED')).to.equal('Fred');
        expect(capitalize('freD')).to.equal('Fred');
        expect(capitalize('fRed')).to.equal('Fred');
        expect(capitalize('fRed FRED')).to.equal('Fred fred');
    });

    it('should handle first char being space', () => {
        expect(capitalize(' fRED')).to.equal(' fred');
    });

    it('should handle all char being space', () => {
        expect(capitalize('  ')).to.equal('  ');
    });

    it('should return an empty string if provided an empty string', () => {
        expect(capitalize('')).to.equal('');
    });

    it('should handle single-character strings', () => {
        expect(capitalize('a')).to.equal('A');
        expect(capitalize('Z')).to.equal('Z');
    });

    it('should return the same string for non-alphabetic characters', () => {
        expect(capitalize('123')).to.equal('123');
        expect(capitalize('#$%')).to.equal('#$%');
    });

    it('should handle mixed alphanumeric strings', () => {
        expect(capitalize('a1b2c3')).to.equal('A1b2c3');
        expect(capitalize('1FRED')).to.equal('1fred');
        expect(capitalize('#FRED')).to.equal('#fred');
    });

    it('should throw an error for null input', () => {
        expect(() => capitalize(null)).to.throw();
    });

    it('should throw an error for undefined input', () => {
        expect(() => capitalize(undefined)).to.throw();
    });

    it('should throw an error for non-string input', () => {
        expect(() => capitalize(123)).to.throw();
        expect(() => capitalize({})).to.throw();
        expect(() => capitalize([])).to.throw();
    });

});