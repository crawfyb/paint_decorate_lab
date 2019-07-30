const assert = require('assert');
const Paint = require('../paint.js')

describe('Paint', function() {
  let paint;
  beforeEach(function(){
    paint = new Paint(10);
  });
  it('should show number of litres', function() {
    const actual = paint.litres;
    assert.strictEqual(actual, 10);
  });
  it('should check if empty', function() {
    const actual = paint.checkIfEmpty();
    assert.strictEqual(actual, false);

  });
  it('should empty paint', function() {
    paint.usePaint(2);
    const actual = paint.litres;
    assert.strictEqual(actual, 8);


  })
});
