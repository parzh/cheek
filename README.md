# check

*__check__* (or *__checkjs__*) is a library of various validation methods.

```javascript
if (check.isArray(input))
	myArray.push(...input);

else myArray.push(input);
```

It allows you to keep your code clean and *vastly* increases its readability.

```javascript
// somewhere in the code
let numbers = [8, 11, -5, 32];

if (check.every(numbers).isPositive())
	doSomething(); // this does not happen
```

It has become much easier to do the same type of tests over the array of elements.

```javascript
// a long time ago
for (var i = 0; i = objects.length; i++)
	if (objects[i] instanceof InvalidObject)
		throw new Error("The object is invalid");

// more recently
for (let object of objects)
	if (object instanceof InvalidObject)
		throw new Error("The object is invalid");

// now
if (check.any(objects).is(InvalidObject))
	throw new Error("The object is invalid");
```

The most of checkings could be done in a single line with `check`.

```javascript
// how did you use it
if (!app.profile || !app.profile.person || !app.profile.person.age)
	throw new TypeError("Cannot find the age property");

else if (app.profile.person.age < 5 || app.profile.person.age > 42)
	throw new RangeError("The age is not in range");

// maybe even like this
try {
	if (app.profile.person.age < 5 || app.profile.person.age > 42)
		throw new RangeError("The age is not in range");
}

catch(error) {
	if (!(error instanceof RangeError))
		throw new TypeError("Cannot find the age property");
}

// how will you use it in future
if (check(app).hasNoProperty(["profile", "person", "age"]))
	throw new TypeError("Cannot find the age property");

else if (check(app.profile.person.age).isNotInRange([5, 42]))
	throw new RangeError("The age is not in range");
```

`check` is constantly evolving. You may suggest or ask for new method in [issues] if you haven't found it in the `check`.

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

See [issues].

[issues]: https://github.com/parzh/check/issues
