'use strict'

const coffee = require('iced-coffee-script-3')
const merge = require('merge')

exports.name = 'iced-coffee-script'
exports.inputFormats = ['coffee', 'coffee-script', 'iced-coffee-script']
exports.outputFormat = 'js'

exports.render = function (src, options, locals) {
  // Bring the locals into the compile options.
  options = merge(options || {}, locals || {})

  return coffee.compile(src, options)
}
