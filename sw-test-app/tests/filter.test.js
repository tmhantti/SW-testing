const expect = require('chai').expect;
import filter from '../src/util_library/filter';

describe('filter function', () => {

  it('should filter an array of users based on the "active" property', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
  });

  it('should return an empty array when filtering an empty array', () => {
    const emptyArray = [];

    const result = filter(emptyArray, () => true);

    expect(result).to.deep.equal([]);
  });

  it('should return an empty array when no elements match the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred',   'active': false }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal([]);
  });

  it('should filter an array of numbers based on the predicate', () => {
    const numbers = [1, 2, 3, 4, 5];

    const result = filter(numbers, (num) => num % 2 === 0);

    expect(result).to.deep.equal([2, 4]);
  });

  it('should handle array the size of one', () => {
    const numbers = [1];

    const result = filter(numbers, (num) => num === 1);

    expect(result).to.deep.equal([1]);
  });

  it('should handle array that results in an empty result', () => {
    const numbers = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];

    const result = filter(numbers, (num) => num === 0);

    expect(result).to.deep.equal([]);
  });

  it('should filter an array of strings based on the predicate', () => {
    const strings = ['apple', 'banana', 'orange', 'grape'];

    const result = filter(strings, (str) => str.length > 5);

    expect(result).to.deep.equal(['banana', 'orange']);
  });
  
  it('should return an empty array for a null array', () => {
    expect(filter(null, () => true)).to.eql([[]]);
  });

  it('should filter elements based on a predicate from a non-null array', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).to.eql([users[0]]);
  });
});
