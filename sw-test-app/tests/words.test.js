import words from '../src/util_library/words';
const expect = require('chai').expect;

describe('words', () => {
  it('should split string into words using default pattern', () => {
    const result = words('fred, barney, & pebbles');
    expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
  });

  it('should split string into words using provided pattern', () => {
    const result = words('fred, barney, & pebbles', /[^, ]+/g);
    expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
  });

  it('should handle empty string', () => {
    const result = words('');
    expect(result).to.deep.equal([]);
  });

  it('should handle string with Unicode words', () => {
    const result = words('你好, 世界');
    expect(result).to.deep.equal(['你好', '世界']);
  });

  it('should handle string with mixed Unicode and ASCII words', () => {
    const result = words('Hello, 你好, World');
    expect(result).to.deep.equal(['Hello', '你好', 'World']);
  });

  it('should split the string based on a custom pattern that matches words', () => {
    const result = words('fred, barney, & pebbles', /[^, ]+/g);
    expect(result).to.eql(['fred', 'barney', '&', 'pebbles']);
  });

  it('should return an empty array when custom pattern matches no words', () => {
    const result = words('fred, barney, & pebbles', /\d+/g);
    expect(result).to.eql([]);
  });
});
