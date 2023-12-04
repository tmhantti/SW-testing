const expect = require('chai').expect;
import every from '../src/util_library/every';

describe('every', () => {
  it('should return true for an array of truthy values with a truthy predicate', () => {
    const array = [true, 1, 'yes'];
    const predicate = (value) => Boolean(value);
    const result = every(array, predicate);
    expect(result).to.be.true;
  });

  it('should return false for an array with at least one falsy value and a truthy predicate', () => {
    const array = [true, 1, null, 'yes'];
    const predicate = (value) => Boolean(value);
    const result = every(array, predicate);
    expect(result).to.be.false;
  });

  it('should return true for an empty array with any predicate', () => {
    const array = [];
    const predicate = () => true;
    const result = every(array, predicate);
    expect(result).to.be.true;
  });

  it('should return true for an array with all elements meeting the custom predicate', () => {
    const array = [10, 20, 30, 40];
    const predicate = (value) => value % 10 === 0;
    const result = every(array, predicate);
    expect(result).to.be.true;
  });

  it('should return false for an array with at least one element failing the custom predicate', () => {
    const array = [10, 20, 30, 41];
    const predicate = (value) => value % 10 === 0;
    const result = every(array, predicate);
    expect(result).to.be.false;
  });

  it('should return true for a null array', () => {
    expect(every(null, Boolean)).to.be.true;
  });

  it('should return true for an empty array', () => {
    expect(every([], Boolean)).to.be.true;
  });

  it('should return false if any element fails the predicate', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).to.be.false;
  });
});
