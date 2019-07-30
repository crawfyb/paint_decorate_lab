const assert = require('assert');
const Decorator = require('../decorator.js');

describe('decorator', function() {
  let decorator;
  beforeEach(function(){
    decorator = new Decorator;
  });
  it('should start with empty paint stock', function() {
    const actual = decorator.amountOfStock();
    assert.strictEqual(actual, 0)

  });
  it('add can of paint to stock', function(){
    decorator.addCan()
  })

});
