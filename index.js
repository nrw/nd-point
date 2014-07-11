module.exports = Point

function Point (properties) {
  var seen = {}
  properties.forEach(function (prop) { seen[prop] = [] })

  return point

  function point (obj) {
    return properties.map(function map (prop) {
      return indexOf(seen[prop], obj[prop])
    })
  }
}

function indexOf (arr, str) {
  str = str || ''
  str = str.toString()
  var index = arr.indexOf(str)

  if (index !== -1) return index

  index = arr.length
  arr.push(str)
  return index
}
