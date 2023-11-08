import add from '../src/util_library/add';

const expect = require('chai').expect;

// simple test suite for add.js: 

describe('Add.js - adding numbers (1 + 2 should be 3:', () => {
    let noItemsInTheCart = 1;
    let noItemsAddedToCart = 2;
    let expectedSum= noItemsInTheCart + noItemsAddedToCart;

    // Test Case 1
    it(`adds ${noItemsInTheCart} and ${noItemsAddedToCart}, and returns ${expectedSum}`, (done) => {
        let sumOfItemsInTheCart = add(noItemsInTheCart, noItemsAddedToCart);        
        expect(sumOfItemsInTheCart).to.equal((expectedSum));
        done();
    });


    //Test Case 2
    // ... 


}); 
