import isEmpty from '../src/util_library/isEmpty';

const expect = require('chai').expect;

describe('isEmpty.js : ', () => {
    it('should return true for null', () => {
      expect(isEmpty(null)).to.be.true;
    });
  
    it('should return true for true', () => {
      expect(isEmpty(true)).to.be.true;
    });
  
    it('should return false for a non-empty array', () => {
      expect(isEmpty([1, 2, 3])).to.be.false;
    });
  
    it('should return true for an empty array', () => {
      expect(isEmpty([])).to.be.true;
    });
   
    it('should return false for a non-empty string', () => {
      expect(isEmpty('abc')).to.be.false;
    });
  
    it('should return true for an empty string', () => {
      expect(isEmpty('')).to.be.true;
    });
  
    it('should return false for a non-empty object', () => {
      expect(isEmpty({ 'a': 1 })).to.be.false;
    });
  
    it('should return true for an empty object', () => {
      expect(isEmpty({})).to.be.true;
    });
  
    it('should return false for a non-empty map', () => {
      const nonEmptyMap = new Map([['key', 'value']]);
      expect(isEmpty(nonEmptyMap)).to.be.false;
    });
  
    it('should return true for an empty map', () => {
      const emptyMap = new Map();
      expect(isEmpty(emptyMap)).to.be.true;
    });
  
    it('should return false for a non-empty set', () => {
      const nonEmptySet = new Set([1, 2, 3]);
      expect(isEmpty(nonEmptySet)).to.be.false;
    });
  
    it('should return true for an empty set', () => {
      const emptySet = new Set();
      expect(isEmpty(emptySet)).to.be.true;
    });

    it('should return true for an empty object with prototype properties', () => {
        function MyObject() {}
        MyObject.prototype.someProperty = 'someValue';

        const emptyObjectWithPrototype = new MyObject();
        expect(isEmpty(emptyObjectWithPrototype)).to.be.true;
    });

    it('should return true for an object prototype with no own properties', () => {
      function MyObject() {}
      MyObject.prototype.testProperty = 123;
      
      const prototypeOfMyObject = Object.getPrototypeOf(new MyObject());
      expect(isEmpty(prototypeOfMyObject)).to.be.true;
    });

    it('should return false for an object prototype with own properties', () => {
      function MyObject() {
          this.ownProperty = 456;
      }
      MyObject.prototype.testProperty = 123;
      
      const prototypeOfMyObject = Object.getPrototypeOf(new MyObject());
      expect(isEmpty(prototypeOfMyObject)).to.be.false;
    });

    it('should return true for an object with a splice function and length 0', () => {
      expect(isEmpty({ splice: Function.prototype, length: 0 })).to.be.true;
    });

    it('should return true for an empty buffer', () => {
      expect(isEmpty(Buffer.alloc(0))).to.be.true;
    });

    it('should return true for an empty typed array', () => {
      expect(isEmpty(new Uint8Array())).to.be.true;
    });

    it('should return true for an empty arguments object', () => {
      (function() {
          expect(isEmpty(arguments)).to.be.true;
      })();
    });
});
  
  
  
  
  