# jstransformer-iced-coffee-script

[IcedCoffeeScript](http://maxtaco.github.io/coffee-script/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-iced-coffee-script/master.svg)](https://travis-ci.org/jstransformers/jstransformer-iced-coffee-script)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-iced-coffee-script/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-iced-coffee-script)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-iced-coffee-script/master.svg)](http://david-dm.org/jstransformers/jstransformer-iced-coffee-script)
[![NPM version](https://img.shields.io/npm/v/jstransformer-iced-coffee-script.svg)](https://www.npmjs.org/package/jstransformer-iced-coffee-script)

## Installation

    npm install jstransformer-iced-coffee-script

## API

```js
var coffee = require('jstransformer')(require('jstransformer-iced-coffee-script'))

coffee.render('n = 42', {bare: true}).body
//=> var n; n = 42;
```

## License

MIT
