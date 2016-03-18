var sortSyllable = require('./sortsyllable');
var assert = require('assert');

describe('wrong input', function () {

  it('string', function () {
    var sorted1 = sortSyllable('123');
    var sorted2 = sortSyllable('abc');
    var sorted3 = sortSyllable(123 + 'abc');
    assert.equal(sorted1, 'no tibetan in input');
    assert.equal(sorted2, 'no tibetan in input');
    assert.equal(sorted3, 'no tibetan in input');
  });
  it('integer', function () {
    var sorted = sortSyllable(123);
    assert.equal(sorted, 'input type is integer');
  });
  it('array', function() {
    var sorted = sortSyllable([1, 2, 3]);
    assert.equal(sorted, 'input type is array');
  });
  it('object', function () {
    var sorted = sortSyllable({1: 'a', 2: 'b'});
    assert.equal(sorted, 'input type is object');
  });
  it('no input', function () {
    var sorted = sortSyllable();
    assert.equal(sorted, 'no input');
  });
  it("can't define", function () {
    var sorted = sortSyllable(true);
    assert.equal(sorted, 'input type is not string');
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
                   [ 'ལྤགས', 1, '7.692308%' ] ]
    assert.equal(sorted.toString, output.toString);
  })
})