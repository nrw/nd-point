# nd-point [![build status](https://secure.travis-ci.org/nrw/nd-point.png)](http://travis-ci.org/nrw/nd-point)

Find the points objects should occupy in an n-dimensional array.

[![testling badge](https://ci.testling.com/nrw/nd-point.png)](https://ci.testling.com/nrw/nd-point)

## Example

``` js
var Point = require('nd-point')
var point = Point(['division','level','style'])

point({division: 'doubles', level: 'beginner', style: 'freestyle'}) // [0,0,0]
point({division: 'doubles', level: 'intermediate', style: 'freestyle'}) // [0,1,0]
point({division: 'singles', level: 'beginner', style: 'freestyle'}) // [1,0,0]
point({division: 'doubles', level: 'advanced', style: 'compulsory'}) // [0,2,1]
```

## Usage

### var point = Point(properties, options={})

Returns a new `point` function that takes json objects as input and returns the
point path (an array of integers) based on the object's properties.

## How it works

With a new `point` function, the first time a value is seen for a property, it
is assigned the next consecutive integer for that property. Properties are added
to the point path in the order they were passed in.

``` js
var point = Point(['division','level','style'])

// for the first doc, all properties are making their first appearance.
point({division: 'doubles', level: 'beginner', style: 'freestyle'})
// [0,0,0]

// 'intermediate' is a new level
point({division: 'doubles', level: 'intermediate', style: 'freestyle'})
// [0,1,0]

// '' (empty) is a new level
point({division: 'doubles', style: 'freestyle'})
// [0,2,0]
```

## Notes

You can use [`sortable-object-hash`](https://github.com/nrw/sortable-object-hash)
to order objects based on their properties before assigning them an `nd-point`.

## What can I use this for?

For interface elements that are represented nicely as a multidimensional array,
you can find which node an element belongs in via its point path. `nd-point`
allows you to find an object's n-dimensional point based on an its properties.

```
page
└─┬ tabbed-pane [0]
  ├─┬ table [0,0]
  │ ├─┬ row [0,0,0]
  │ │ ├── column [0,0,0,0]
  │ │ └── column [0,0,0,1]
  │ └─┬ row [0,0,1]
  │   └── column [0,0,1,0]
  ├ tabbed-pane [1]
  └─┬ table [1,0]
    ├─┬ row [1,0,0]
    │ └── column [1,0,0,0]
    ├─┬ row [1,0,1]
    │ └── column [1,0,1,0]
    ├ table [1,1]
    └─┬ row [1,1,0]
      └── column [1,1,0,0]
```

## License

MIT
