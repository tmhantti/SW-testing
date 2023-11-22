import toNumber from '../src/util_library/toNumber';

const expect = require('chai').expect;
const assert = require('chai').assert;

describe('toNumber', () => {
  it('should convert a valid number to itself', () => {
    expect(toNumber(3.2)).to.equal(3.2);
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    expect(toNumber(Infinity)).to.equal(Infinity);
  });

  it('should return NaN for Symbol values', () => {
    expect(isNaN(toNumber(Symbol('test')))).to.be.true;
  });

  it('should convert string representation of numbers to actual numbers', () => {
    expect(toNumber('3.2')).to.equal(3.2);
    expect(toNumber('-123')).to.equal(-123);
  });

  it('should handle object values by using valueOf method if available', () => {
    const objWithValueOf = {
      valueOf: () => 42
    };
    const objWithoutValueOf = { key: 'value' };

    expect(toNumber(objWithValueOf)).to.equal(42);
    expect(toNumber(objWithoutValueOf)).to.be.NaN;
  });

  it('should handle binary and octal string values', () => {
    expect(toNumber('0b1010')).to.equal(10);
    expect(toNumber('0o777')).to.equal(511);
  });

  it('should handle bad hex string values and return NaN', () => {
    expect(isNaN(toNumber('-0x123'))).to.be.true;
  });

  it('should return 0 for string "0"', () => {
    expect(toNumber('0')).to.equal(0);
  });

  it('should return NaN for invalid input', () => {
    expect(isNaN(toNumber('invalid'))).to.be.true;
  });
});