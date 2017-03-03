# check
#### Check and validate values by criteria in JavaScript

___check___ provides a single object (ideally called `check` in lowercase) which has different methods and alias for simple verification and validation of any values. I'll describe them using TypeScript style for convenience.

***

## General
### check.isTrue(input: any): boolean
Checks whether the `input` is truthy.  
@param `input` Test value

#### Examples:
```javascript
check.isTrue(true); // true
check.isTrue(false); // false
check.isTrue(new Object()); // true
```

### check.isFalse(input: any): boolean
Checks whether the `input` is falsy.  
@param `input` Test value

#### Examples:
```javascript
check.isFalse(true); // false
check.isFalse(false); // true
check.isFalse(new Object()); // false
```
_opposite for `check.isTrue()`_

## Types
### check.is(Type: Function, input: any): boolean
Checks whether the input is an instance of provided class
@param `Type` Test class
@param `input` Test value

#### Examples:
```javascript
check.is(Number, {}); // false; see `check.isNumber()` below
check.is(Array, []); // true; see `check.isArray()` below
check.is(MyObject, new MyObject()); // true
```

### check.isNot(Type: Function, input: any): boolean
Returns `true` if the input is not an instance of provided class
@param `Type` Test class
@param `input` Test value

#### Examples:
```javascript
check.isNot(Number, {}); // true
check.isNot(Array, []); // false
check.isNot(MyObject, new MyObject()); // false
```
_opposite for `check.is()`_
