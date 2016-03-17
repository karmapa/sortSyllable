exports.sortSyllable = function (m) {
  var obj = {};
  var totalcount = 0;
  m.replace(/[\u0f00-\u0f0a\u0f10-\u0fff]+/g, function(syl) {
    totalcount++;
    if (!obj[syl]) {
      obj[syl] = 0;
    }
    obj[syl]++;
  });
  return doSort(obj, totalcount);
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
  return arr;
}