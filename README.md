#sortSyllable

sort tibetan syllables

[![Build Status](https://travis-ci.org/karmapa/sortSyllable.svg?branch=master)](https://travis-ci.org/karmapa/sortSyllable)

## Useage

```javascript
var sortSyllable = require('./sortsyllable.js');
sortSyllable('tibetan str');
```
**sortSyllable** fetches tibetan syllables by symbols. After that, it calculates the frequency of the same syllable. Then it sorts by frequency from high to low.
```javascript
sortSyllable('དགག་དགག་དབྱེ་དབྱར་དང་ཀོ་ལྤགས་གཞི།');
/*output will be
[ [ 'དགག', 2, '25.000000%' ],
  [ 'དབྱེ', 1, '12.500000%' ],
  [ 'དབྱར', 1, '12.500000%' ],
  [ 'དང', 1, '12.500000%' ],
  [ 'ཀོ', 1, '12.500000%' ],
  [ 'ལྤགས', 1, '12.500000%' ],
  [ 'གཞི', 1, '12.500000%' ] ]
*/
```

## incorrect I/O alert
```javascript
sortSyllable()           //'no input'
sortSyllable('abc');     //'no tibetan in input'
sortSyllable(123);       //'input type is integer'
sortSyllable([array]);   //'input type is array'
sortSyllable({object});  //'input type is object'
```
