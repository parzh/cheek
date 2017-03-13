# cheek

*__cheek__* (formerly *__check__*) is a library of various validation methods.

```JavaScript
cheek.isArray(["Hello", "world"]); // true
cheek.is(MyObject, new MyObject()); // true
```

It allows you to keep your code clean and increases its readability

```JavaScript
let every = cheek.every([8, 11, -5, 32]);

if (every.isInRange([5, 20], "exclusively")) // false
  // you shall not pass!
```

while doing its work pretty well.

```JavaScript
cheek.bundle(["isDefined", "isPositive", "isEmptyString"], [null, 15, ""]);
/*  [
 *   [false, false, false],
 *   [true, true, false],
 *   [true, false, true]
 *  ]
 */
```

## Chapters:

- [General](readme-chapters/general.md)
- [Existance](readme-chapters/existance.md)
- [Types](readme-chapters/types.md)
- [Array](readme-chapters/array.md)
- [String](readme-chapters/string.md)
- [Number](readme-chapters/number.md)
- [Bundle](readme-chapters/bundle.md)
- [Proxy](readme-chapters/proxy.md)

## TODO:

See [issues](https://github.com/parzh/cheek/issues).
