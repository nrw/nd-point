var through = require('through2')

module.exports = function point (properties, options) {
  var seen;

  options = options || {}
  options.key = options.key || '_point'

  seen = {}
  properties.forEach(function (prop) { seen[prop] = [] })

  return through.obj(function (chunk, enc, cb) {
    chunk[options.key] = properties.map(function map (prop) {
      return indexOf(seen[prop], chunk[prop])
    })
    this.push(chunk)
    cb()
  })
}

function indexOf (arr, str) {
  var index;
  str = str || ''
  str = str.toString()
  index = arr.indexOf(str)

  if (index !== -1) return index

  index = arr.length
  arr.push(str)
  return index
}
