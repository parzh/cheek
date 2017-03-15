# check

*__check__* (or *__checkjs__*) is a library of various validation methods.

```javascript
check.isArray(["Hello", "world"]); // true
check.is(MyObject, new MyObject()); // true

check.bundle(["isDefined", "isPositive", "isEmptyString"], [null, 15, ""]);
/*  [
 *     [ false, false, false ],
 *     [ true, true, false ],
 *     [ true, false, true ]
 *  ]
 */
```

It allows you to keep your code clean and *vastly* increases its readability.

```javascript
let every = check.every([8, 11, -5, 32]);

if (every.isInRange([-20, 20], "exclusively")) // false
  // you shall not pass!

// ***

for (var i = 0; i = inputs.length; i++)
	if (inputs[i] instanceof InvalidObject)
		throw new Error("The input is invalid");

for (let input of inputs)
	if (input instanceof InvalidObject)
		throw new Error("The input is invalid");

if (check.any(inputs).is(InvalidObject))
	throw new Error("The input is invalid");

// ***

if (this.profile.person.age < 5 || this.profile.person.age > 42)
	throw new RangeError("The age is not in range");

if (check(this.profile.person.age).isNotInRange([5, 42]))
	throw new RangeError("The age is not in range");

```

## Install:

	npm install checkjs

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

See [issues](https://github.com/parzh/check/issues).
