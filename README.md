## check

> IMPORTANT: `checkjs` was discontinued in favour of [`@valuer/main`](https://gitlab.com/valuer/main). Consider using it instead.

*__check__* (or *__checkjs__*) is a library of various validation methods.

```javascript
// somewhere in the code
const numbers = [8, 11, -5, 32];

if (check.every(numbers).isPositive())
	doSomething(); // this does not happen
```

## Install
	npm i checkjs
	# consider npm i @valuer/main instead
