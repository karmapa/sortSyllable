#sortSyllable

sort tibetan syllables

[![Build Status](https://travis-ci.org/karmapa/sortSyllable.svg?branch=master)](https://travis-ci.org/karmapa/sortSyllable)

## Useage

```javascript
var sortSyllable = require('./sortsyllable.js');
sortSyllable('tibetan str');
```
**sortSyllable** fetches tibetan syllables acrroding to symbols. After that, it counts the number of the syllables. Then it returns the syllables and syllable counts from high to low.
```javascript
sortSyllable('དགག་དགག་དབྱེ་དབྱར་དང་ཀོ་ལྤགས་གཞི།');
/*output will be
[ [ 'དགག' ,2 ],
  [ 'དབྱེ', 1 ],
  [ 'དབྱར', 1 ],
  [ 'དང', 1 ],
  [ 'ཀོ', 1 ],
  [ 'ལྤགས', 1 ],
  [ 'གཞི', 1 ] ]
*/
```

## incorrect I/O
Input must be tibetan string, others return an empty array.
```javascript
sortSyllable()           //[]
sortSyllable('abc');     //[]
sortSyllable(123);       //[]
sortSyllable([array]);   //[]
sortSyllable({object});  //[]
```
