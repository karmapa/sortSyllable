function sortSyllable (content) {
  if ('string' !== typeof content) {
    return [];
  }
  var tokens = tokenize(content);
  return doSort(tokens);
}

function tokenize (str) {
  var obj = {}
  str.replace(/[\u0f00-\u0f0a\u0f10-\u0fff]+/g, function(syl) {
    if (!obj[syl]) {
      obj[syl] = 0;
    }
    obj[syl]++;
  }); 
  return obj;
}

function doSort(obj) {
  var arr = [];
  for (var syl in obj) {
    if (obj.hasOwnProperty(syl)) {
         arr.push([syl, obj[syl]]);
    }
  }
  arr.sort(function(a, b) {
    return b[1] - a[1];
  });
  return arr;
}

module.exports = sortSyllable;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          