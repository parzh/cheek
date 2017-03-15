# cheek

*__cheek__* (formerly *__check__*) is a library of various validation methods.

```javascript
cheek.isArray(["Hello", "world"]); // true
cheek.is(MyObject, new MyObject()); // true

cheek.bundle(["isDefined", "isPositive", "isEmptyString"], [null, 15, ""]);
/*  [
 *     [ false, false, false ],
 *     [ true, true, false ],
 *     [ true, false, true ]
 *  ]
 */
```

It allows you to keep your code clean and *vastly* increases its readability.

```javascript
let every = cheek.every([8, 11, -5, 32]);

if (every.isInRange([-20, 20], "exclusively")) // false
  // you shall not pass!

// ***

for (var i = 0; i = inputs.length; i++)
	if (inputs[i] instanceof InvalidObject)
		throw new Error("The input is invalid");

for (let input of inputs)
	if (input instanceof InvalidObject)
		throw new Error("The input is invalid");

if (cheek.any(inputs).is(InvalidObject))
	throw new Error("The input is invalid");
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
