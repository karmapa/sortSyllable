//User input
var list = './test.lst';
var textFolder = './test';
//-------------------------//
var fs = require('fs');
var bom = String.fromCharCode(0xfeff);
var fns = fs.readFileSync(list, 'utf8')
            .replace(bom, '').split(/\r?\n/);

function sortSyllables(fns) {
  var obj = {};
  var totalcount = 0;
  var files;
  for (var i = 0; i < fns.length; i++) {
    file = fs.readFileSync(textFolder+ '/' + fns[i], 'utf8');
    file.replace(/[\u0f00-\u0f0a\u0f10-\u0fff]+/g, function(syl) {
      totalcount++;
      if (!obj[syl]) {
        obj[syl] = 0;
      }
      obj[syl]++;
    });
  }
  doSort(obj, totalcount);
}

function doSort(obj, totalcount) {
  var sylcount = 0;
  var arr = [];
  var freq;
  for (var syl in obj) {
    sylcount++;
    freq = (obj[syl] / totalcount * 100).toFixed(6);
    arr.push([syl, obj[syl], freq + '%']);
  }
  arr.sort(function(a, b) {
    return b[1] - a[1];
  });
  console.log(arr.join('\n'));
}

sortSyllables(fns);
