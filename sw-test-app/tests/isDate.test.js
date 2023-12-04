import isDate from '../src/util_library/isDate';
const expect = require('chai').expect;

describe('isDate function', () => {
    it('should return true for a Date object', () => {
        expect(isDate(new Date())).to.be.true;
    });

    it('should return false for a date string', () => {
        expect(isDate('Mon April 23 2012')).to.be.false;
    });

    it('should return false for a number', () => {
        expect(isDate(1234567890)).to.be.false;
    });

    it('should return false for an object', () => {
        expect(isDate({})).to.be.false;
    });

    it('should return false for an array', () => {
        expect(isDate([])).to.be.false;
    });

    it('should return false for an array with Date object', () => {
        expect(isDate([new Date()])).to.be.false;
    });

    it('should return false for null', () => {
        expect(isDate(null)).to.be.false;
    });

    it('should return false for undefined', () => {
        expect(isDate(undefined)).to.be.false;
    });

    it('should return true for a Date object with a specific date', () => {
        expect(isDate(new Date('2023-01-01'))).to.be.true;
    });
    
    it('should return true for a Date object created with year, month, and day parameters', () => {
        expect(isDate(new Date(2023, 0, 1))).to.be.true;
    });
    
    it('should return true for a Date object created with a timestamp', () => {
        expect(isDate(new Date(1672531200000))).to.be.true;
    });
    
    it('should return true for a Date object created with Date.now()', () => {
        expect(isDate(new Date(Date.now()))).to.be.true;
    });
    
    it('should return true for a Date object created with Date.parse()', () => {
        expect(isDate(new Date(Date.parse('2023-01-01')))).to.be.true;
    });

    it('should return true for an invalid Date object', () => {
        expect(isDate(new Date('invalid date string'))).to.be.true;
    });

    it('should return false for an object mimicking a Date', () => {
        const fakeDate = { getTime: () => 1234567890 };
        expect(isDate(fakeDate)).to.be.false;
    });

    it('should return false for boolean values', () => {
        expect(isDate(true)).to.be.false;
        expect(isDate(false)).to.be.false;
    });

    it('should return false for a symbol', () => {
        expect(isDate(Symbol())).to.be.false;
    });

});
