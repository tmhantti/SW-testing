import countBy from '../src/util_library/countBy';
const expect = require('chai').expect;

// test suite for countBy.js: 

describe('countBy', () => {
  it('should count the number of truthy values returned by the iteratee', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];

    const result = countBy(users, value => value.active);
    
    expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
  });

  it('should count the occurrences of values returned by the iteratee', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const result = countBy(numbers, value => value % 2 === 0 ? 'even' : 'odd');

    expect(result).to.deep.equal({ 'odd': 5, 'even': 4 });
  });

  it('should handle an empty array', () => {
    const result = countBy([], value => value);

    expect(result).to.deep.equal({});
  });

  it('should handle an empty object', () => {
    const result = countBy({}, value => value);

    expect(result).to.deep.equal({});
  });
});
