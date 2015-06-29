'use strict';
var assert = require('assert');
var chineseSimpleTraditionTranslator = require('../');

describe('chinese-simple-tradition-translator node module', function() {
  it('test translate from simple to traditional', function() {
    var ret = chineseSimpleTraditionTranslator.translate("三国演义");
    assert.equal(ret, '三國演義');
  });

  it('test translate from traditional to simple', function() {
    var ret = chineseSimpleTraditionTranslator.translate("三國演義");
    assert.equal(ret, '三国演义');
  });
  it('test translate from simple to traditional with mode', function() {
    var ret = chineseSimpleTraditionTranslator.translate("三国演义", "s2t");
    assert.equal(ret, '三國演義');
  });

  it('test translate from simple to traditional with mode', function() {
    var ret = chineseSimpleTraditionTranslator.translate("三国演义", "t2s");
    assert.equal(ret, '三国演义');
  });


  it('test translate from traditional to simple with mode', function() {
    var ret = chineseSimpleTraditionTranslator.translate("三國演義", "t2s");
    assert.equal(ret, '三国演义');
  });


  it('test translate from traditional to simple with mode', function() {
    var ret = chineseSimpleTraditionTranslator.translate("三國演義", "s2t");
    assert.equal(ret, '三國演義');
  });


  it('test translate file from simple to traditional with mode', function() {
    chineseSimpleTraditionTranslator.translateFile("test_s.json", "output.json", undefined, function(err) {
      assert(false, err);
      var json = require("output2.json");
      assert.equal(json.text, false);
    });
  });

  it('test translate file from traditional to simple with mode', function() {
    chineseSimpleTraditionTranslator.translateFile("test_t.json", "output.json", "t2s", function(err) {
      assert(false, err);
      var json = require("output.json");
      console.log("json text " + json.text);
      assert.equal(json.text, "三國演義");
    });
  });
});
