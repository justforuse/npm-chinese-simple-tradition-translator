'use strict';
var jsons = require('./fonts.json');

function isChineseSimple(html) {
  for (var i = 0; i < jsons.length; i++) {
    var json = jsons[i];

    if (html.indexOf(json.jf) > -1) {
      //console.log("found " + json.jf);
      return true;
    }
  }
  return false;
}

function doTranslation(html, mode) {
  var search;
  var replace;

  var isSimple = true;
  if (mode === undefined) {
    isSimple = isChineseSimple(html);

  } else if (mode === 's2t') {
    isSimple = true;
  } else if (mode === 't2s') {
    isSimple = false;
  }

  for (var i = 0; i < jsons.length; i++) {
    var json = jsons[i];
    if (isSimple) {
      search = json.jf;
      replace = json.fj;
    } else {
      search = json.fj;
      replace = json.jf;
    }
    html = html.replace(new RegExp(search, 'g'), replace);
  }
  return html;
}

exports.translate = function(text, mode) {
  return doTranslation(text, mode);
};

exports.translateFile = function(srcFile, dstFile, mode, callback) {
  var fs = require('fs');
  fs.readFile(srcFile, 'utf8', function(err, data) {
    if (err) {
      callback(err);
    } else {
      //console.log(data);
      var ret = doTranslation(data, mode);
      var dst = (dstFile !== undefined) ? dstFile : srcFile;
      fs.writeFile(dst, ret, function(err) {
        callback(err);
      });
    }
  });
};
