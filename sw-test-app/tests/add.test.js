import add from '../src/util_library/add';

const expect = require('chai').expect;
const assert = require('chai').assert;

// Test suite for add.js: 

describe('Add.js:', () => {
    let a = 1.25;
    let b = 2;
    let c = -3;
    let result;

    // Test case 1 - addition
    it(`addition - adds ${a} and ${b}, should return ${a + b} with type "number"`, (done) => {
        result = add(a, b);        
        expect(result).to.equal((a + b));
        assert.isNumber(result, 'add.js returns variable with type "number"');
        done();
    });

    // Test case 2 - substraction (by adding a negative number)
    it(`substraction (by adding a negative number) - adds ${a} and ${c}, should return ${a + c} with type "number"`, (done) => {
        result = add(a, c);        
        expect(result).to.equal((a + c));
        assert.isNumber(result, 'add.js returns variable with type "number"');
        done();
    });
});
