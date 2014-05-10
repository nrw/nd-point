# nd-point

Find the points objects should occupy in an n-dimensional array.

## Example

``` js
var point = require('nd-point')

p = point(['division','level','style'])

p.pipe(output)

var docs = [
  {division: 'doubles', level: 'beginner', style: 'freestyle'},
  {division: 'doubles', level: 'intermediate', style: 'freestyle'},
  {division: 'singles', level: 'beginner', style: 'freestyle'},
  {division: 'doubles', level: 'advanced', style: 'compulsory'}
]

// adds property '_point' to each document with the coordinates.
docs.forEach(function (doc) { p.write(doc) })
p.end()

// value of each doc's '_point': [0,0,0], [0,1,0], [1,0,0], [0,2,1]
```

## Usage

### var p = point(properties, options={})

Returns a new `point` through stream that takes json objects as input and
outputs the original documents with a `_point` property which is an array of
integers. You can set the property name of `_point` by setting `options.key`.

## How it works

With a new `point` stream, the first time a value is seen for a property, it is
assigned the next consecutive integer for that property. Properties are added
to the `_point` array in the order they were passed in.

``` js
p = point(['division','level','style'])

// for the first doc, all properties are making their first appearance.
p.write({division: 'doubles', level: 'beginner', style: 'freestyle'})
// _point = [0,0,0]

// 'intermediate' is a new level
p.write({division: 'doubles', level: 'intermediate', style: 'freestyle'})
// _point = [0,1,0]

// '' (empty) is a new level
p.write({division: 'doubles', style: 'freestyle'})
// _point = [0,2,0]
```

## What can I use this for?

Perhaps you have some interface elements that are represented nicely as a
multidimensional array. Based on an object's properties, you can find which dom
element it belongs in via its point path.

``` js
page
└─┬ tabbed-pane // [0]
  ├─┬ table // [0,0]
  │ ├─┬ row // [0,0,0]
  │ │ ├── column // [0,0,0,0]
  │ │ └── column // [0,0,0,1]
  │ └─┬ row // [0,0,1]
  │   └── column // [0,0,1,0]
  ├ tabbed-pane  // [1]
  └─┬ table // [1,0]
    ├─┬ row // [1,0,0]
    │ └── column // [1,0,0,0]
    ├─┬ row // [1,0,1]
    │ └── column // [1,0,1,0]
    ├ table // [1,1]
    └─┬ row // [1,1,0]
      └── column // [1,1,0,0]
```

## License

MIT
