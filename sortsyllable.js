var fs = require("fs");
var glob = require("glob");
var parseSyllable = require("./parsesyllable_advance.js");
var bom=String.fromCharCode(0xfeff);
var fns = fs.readFileSync("../jiangkangyur/jiangkangyur.lst", "utf8").replace(bom, '').split(/\r?\n/);
var obj = {};
var arr = [];
var sylcount = 0;
var totalcount = 0;

var parseFile = function(fn) {
	var file = fs.readFileSync("../jiangkangyur/"+fn, "utf8");
//	console.log(file);
	file.replace(/[\u0f00-\u0f0a\u0f10-\u0fff]+/g, function(syl) {
//		console.log(m);
		totalcount++;
		if(!obj[syl]) obj[syl] = 0;
		obj[syl]++;
	});
}

var doSort = function() {
	var freq;
	for(var syl in obj) {
		sylcount++;
		freq = (obj[syl]/totalcount*100).toFixed(6);
		arr.push([syl, obj[syl], freq+"%"]);
	}
	arr.sort(function(a, b){
		return b[1]-a[1];
	});
}

//console.log(fns);
fns.map(parseFile);
doSort();
//console.log("Syllables:"+sylcount, "Total:"+totalcount);
console.log(arr.join("\n")); //Syllables:22217 Total:25341384

/*glob("..//*.xml", function(err, fns) {
	fns.map(parseFile);
	doSort();
	console.log(arr.join("\n"));
});
*/