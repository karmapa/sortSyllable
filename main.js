//user input
var list = './test.lst';
var textFolder = './test';
//------------------//
var fs = require('fs');
var sortSyllable = require('./sortSyllable.js');
var bom = String.fromCharCode(0xfeff);
var fns = fs.readFileSync(list, 'utf8')
            .replace(bom, '').split(/\r?\n/);
var totaltext;
function readFile(fn) {
  var text = fs.readFileSync(textFolder+ '/' + fn, 'utf8');
  totaltext += text;
}

fns.map(readFile);
sortSyllable.sortSyllable(totaltext);