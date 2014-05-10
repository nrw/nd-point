var test = require('tape')
var concat = require('concat-stream')
var point = require('../')

test('basic', function (t) {

  var stream = point(['division','level','style'])

  stream.pipe(concat(function (body) {
    t.same(body[0]._point, [0,0,0])
    t.same(body[1]._point, [0,1,0])
    t.same(body[2]._point, [1,0,0])
    t.same(body[3]._point, [0,2,1])
    t.end()
  }))

  var objs = [
    { division: 'doubles',
      level: 'beginner',
      style: 'freestyle'
    },
    { division: 'doubles',
      level: 'intermediate',
      style: 'freestyle'
    },
    { division: 'singles',
      level: 'beginner',
      style: 'freestyle'
    },
    { division: 'doubles',
      level: 'advanced',
      style: 'compulsory'
    }
  ]
  objs.forEach(function (obj) {
    stream.write(obj)
  })
  stream.end()
})

test('custom key', function (t) {

  var stream = point(['division','level','style'], {key: 'pnt'})

  stream.pipe(concat(function (body) {
    t.same(body[0].pnt, [0,0,0])
    t.same(body[1].pnt, [0,1,0])
    t.same(body[2].pnt, [1,2,0])
    t.same(body[3].pnt, [0,3,1])
    t.end()
  }))

  var objs = [
    { division: 'doubles',
      style: 'freestyle'
    },
    { division: 'doubles',
      level: 'intermediate',
      style: 'freestyle'
    },
    { division: 'singles',
      level: 'beginner',
      style: 'freestyle'
    },
    { division: 'doubles',
      level: 'advanced',
      style: 'compulsory'
    }
  ]
  objs.forEach(function (obj) {
    stream.write(obj)
  })
  stream.end()
})
