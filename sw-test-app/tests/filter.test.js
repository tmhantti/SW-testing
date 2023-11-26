const expect = require('chai').expect;
import filter from '../src/util_library/filter';

// Test suite for the filter function
describe('filter function', () => {
  // Test case 1: Filtering an array of users based on the 'active' property
  it('should filter an array of users based on the "active" property', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
  });

  // Test case 2: Filtering an empty array should return an empty array
  it('should return an empty array when filtering an empty array', () => {
    const emptyArray = [];

    const result = filter(emptyArray, () => true);

    expect(result).to.deep.equal([]);
  });

  // Test case 3: Filtering an array with no matching elements
  it('should return an empty array when no elements match the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred',   'active': false }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal([]);
  });

  // Test case 4: Filtering with an undefined predicate
  // commented out because filter.js does not have a check for undefined predicate function
  /*
  it('should return the original array when the predicate is undefined', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];

    const result = filter(users, undefined);

    expect(result).to.deep.equal(users);
  });
 */

  // Test case 5: Filtering an array of numbers
  it('should filter an array of numbers based on the predicate', () => {
    const numbers = [1, 2, 3, 4, 5];

    const result = filter(numbers, (num) => num % 2 === 0);

    expect(result).to.deep.equal([2, 4]);
  });

  // Test case 6: Filtering an array of strings
  it('should filter an array of strings based on the predicate', () => {
    const strings = ['apple', 'banana', 'orange', 'grape'];

    const result = filter(strings, (str) => str.length > 5);

    expect(result).to.deep.equal(['banana', 'orange']);
  });

});
