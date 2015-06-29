#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Translate chinese between simple and traditional chinese.


## Install

```sh
$ npm install --save chinese-simple-tradition-translator
```


## Usage

```js
var chineseSimpleTraditionTranslator = require('chinese-simple-tradition-translator');

自动检测字体并翻译
var tranditional = chineseSimpleTraditionTranslator.translate('三國演義');
var simple= chineseSimpleTraditionTranslator.translate('三国演义');

读取文件并直接把翻译文字保存到目标文件，并设置使用s2t（简体到繁体）
chineseSimpleTraditionTranslator.translateFile("input.file", "output.file", "s2t", function(err) {
});
```


## License

MIT © [Pai Peng](www.paipeng.com)


[npm-image]: https://badge.fury.io/js/chinese-simple-tradition-translator.svg
[npm-url]: https://npmjs.org/package/chinese-simple-tradition-translator
[travis-image]: https://travis-ci.org/paipeng/chinese-simple-tradition-translator.svg?branch=master
[travis-url]: https://travis-ci.org/paipeng/chinese-simple-tradition-translator
[daviddm-image]: https://david-dm.org/paipeng/chinese-simple-tradition-translator.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/paipeng/chinese-simple-tradition-translator
