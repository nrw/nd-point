var test = require('tape')
var Point = require('../')

test('basic', function (t) {
  var point = Point(['division', 'level', 'style'])

  var objs = [{
    division: 'doubles',
    level: 'beginner',
    style: 'freestyle'
  }, {
    division: 'doubles',
    level: 'intermediate',
    style: 'freestyle'
  }, {
    division: 'singles',
    level: 'beginner',
    style: 'freestyle'
  }, {
    division: 'doubles',
    level: 'advanced',
    style: 'compulsory'
  }]
  t.same(point(objs[0]), [0, 0, 0])
  t.same(point(objs[1]), [0, 1, 0])
  t.same(point(objs[2]), [1, 0, 0])
  t.same(point(objs[3]), [0, 2, 1])
  t.end()
})

test('another example', function (t) {
  var point = Point(['division', 'level', 'style'])

  var objs = [{
    division: 'doubles',
    style: 'freestyle'
  }, {
    division: 'doubles',
    level: 'intermediate',
    style: 'freestyle'
  }, {
    division: 'singles',
    level: 'beginner',
    style: 'freestyle'
  }, {
    division: 'doubles',
    level: 'advanced',
    style: 'compulsory'
  }]
  t.same(point(objs[0]), [0, 0, 0])
  t.same(point(objs[1]), [0, 1, 0])
  t.same(point(objs[2]), [1, 2, 0])
  t.same(point(objs[3]), [0, 3, 1])
  t.end()
})
