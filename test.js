var sortSyllable = require('./sortsyllable');
var assert = require('assert');

describe('wrong input', function () {

  it('string', function () {
    var sorted = sortSyllable(123 + 'abc');
    assert.equal(Array.isArray(sorted), true);
    assert.equal(sorted.toString(), '');
  });
  it('integer', function () {
    var sorted = sortSyllable(123);
    assert.equal(Array.isArray(sorted), true);
    assert.equal(sorted.toString(), '');
  });
  it('array', function() {
    var sorted = sortSyllable([1, 2, 3]);
    assert.equal(Array.isArray(sorted), true);
    assert.equal(sorted.toString(), '');
  });
  it('object', function () {
    var sorted = sortSyllable({1: 'a', 2: 'b'});
    assert.equal(Array.isArray(sorted), true);
    assert.equal(sorted.toString(), '');
  });
  it('no input', function () {
    var sorted = sortSyllable();
    assert.equal(Array.isArray(sorted), true);
    assert.equal(sorted.toString(), '');
  });
  it("boolean", function () {
    var sorted = sortSyllable(true);
    assert.equal(Array.isArray(sorted), true);
    assert.equal(sorted.toString(), '');
  });
});

describe('correct input', function () {
  it('correct input', function () {
    var sorted = sortSyllable('ད་ད་ད་ད་ག་ག་ད་བ་དབ་ར་དང་ཀོ་ལྤགས');
    var output = [ [ 'ད', 5, '38.461538%' ],
                   [ 'ག', 2, '15.384615%' ],
                   [ 'བ', 1, '7.692308%' ],
                   [ 'དབ', 1, '7.692308%' ],
                   [ 'ར', 1, '7.692308%' ],
                   [ 'དང', 1, '7.692308%' ],
                   [ 'ཀོ', 1, '7.692308%' ],
                   [ 'ལྤགས', 1, '7.692308%' ] ];
    assert.equal(sorted.toString, output.toString);
  })
})