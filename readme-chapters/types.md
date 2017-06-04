[← Back to `README.md`](../README.md)

## Contents
- [`.is(Type, input)`](./types.md#checkistype-function-input)-boolean)
- [`.isNot(Type, input)`](./types.md#checkisnottype-function-input)-boolean)
- [`.isEither(types, input)`](./types.md#checkiseithertypes-function-input)-boolean)
- [`.isNeither(types, input)`](./types.md#checkisneithertypes-function-input)-boolean)
- [`.isPrimitive(input)`](./types.md#checkisprimitiveinput)-boolean)
- [`.isObject(input)`](./types.md#checkisobjectinput)-boolean)
- [`.isString(input)`](./types.md#checkisstringinput)-boolean)
- [`.isNotString(input)`](./types.md#checkisnotstringinput)-boolean)
- [`.isNumber(input)`](./types.md#checkisnumberinput)-boolean)
- [`.isNotNumber(input)`](./types.md#checkisnotnumberinput)-boolean)
- [`.isArray(input)`](./types.md#checkisarrayinput)-boolean)
- [`.isArraylike(input)`](./types.md#checkisarraylikeinput)-boolean)
- [`.isIterable(input)`](./types.md#checkisiterableinput)-boolean)
- [`.isNotIterable(input)`](./types.md#checkisnotiterableinput)-boolean)
- [`.isNotArray(input)`](./types.md#checkisnotarrayinput)-boolean)
- [`.isBoolean(input)`](./types.md#checkisbooleaninput)-boolean)
- [`.isNotBoolean(input)`](./types.md#checkisnotbooleaninput)-boolean)
- `.isGenerator(input)`
- `.isNotGenerator(input)`

## Types
- ### check.is(Type: Function, input): boolean
  Checks whether the input is an instance of provided class  
  @param `Type` Test class  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.is(MyObject, new MyObject()); // true
  check.is(Number, {}); // false; see `check.isNumber()`
  check.is(Array, []); // true; see `check.isArray()`
  ```

- ### check.isNot(Type: Function, input): boolean
  Returns `true` if the input is not an instance of provided class  
  @param `Type` Test class  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNot(MyObject, new MyObject()); // false
  check.isNot(Number, {}); // true
  check.isNot(Array, []); // false
  ```
  _reversed `check.is()`_  

- ### check.isEither(types: Function[], input): boolean
  Checks whether the input is an instance of any of provided classes  
  @param `types` Array of test classes  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isEither([Number, String], {}); // false
  check.isEither([RegExp, String], /test/); // true
  check.isEither([Number, RegExp, Array], 4); // true
  ```

- ### check.isNeither(types: Function[], input): boolean
  Returns `true` if the input is not an instance of any of provided classes  
  @param `types` Array of test classes  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNeither([Number, String], {}); // true
  check.isNeither([RegExp, String], /test/); // false
  check.isNeither([Number, RegExp, Array], 4); // false
  ```
  _reversed `check.isEither()`_  
  _not to be confused with `check.neither()`_  

- ### check.isPrimitive(input): boolean
  Checks whether the input is a primitive value  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isPrimitive(42); // true
  check.isPrimitive(new Array()); // false
  check.isPrimitive(null); // true
  ``` 

- ### check.isObject(input): boolean
  Returns `true` if the input is not a primitive value  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isObject(42); // false
  check.isObject(new Array()); // true
  check.isObject(null); // false
  ``` 

  _reversed `check.isPrimitive()`_  

- ### check.isString(input): boolean
  Checks whether the input is a string  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isString(""); // true
  check.isString(new String()); // true
  check.isString(new class extends String{}); // true
  ``` 

- ### check.isNotString(input): boolean
  Returns `true` if the input is not a string  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNotString(""); // false
  check.isNotString(new String()); // false
  check.isNotString(new class{}); // true
  ``` 

  _reversed `check.isString()`_  

- ### check.isNumber(input): boolean
  Checks whether the input is a number  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNumber(5); // true
  check.isNumber(new Number()); // true
  check.isNumber(NaN); // true
  ```

- ### check.isNotNumber(input): boolean
  Returns `true` if the input is not a number  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNotNumber(undefined); // true
  check.isNotNumber(new Number()); // false
  check.isNotNumber(NaN); // false
  ```

  _reversed `check.isNumber()`_  
  _not to be confused with `check.isNaN()`_

- ### check.isArray(input): boolean
  Checks whether the input is an array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isArray({}); // false
  check.isArray([]); // true
  check.isArray(new class extends Array{}); // true
  ```

  ```javascript
  function(...args) {
    check.isArray(arguments); // false
    check.isArray(args); // true
  }
  ```

- ### check.isArraylike(input): boolean
  Checks whether the input is array-like object  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isArraylike({ 0: "0", 1: "1" }); // false
  check.isArraylike({ length: 2 }); // true
  check.isArraylike(new class extends Array{}); // true
  ```

  ```javascript
  function(...args) {
    check.isArraylike(arguments); // true
    check.isArraylike(args); // true
  }
  ```

- ### check.isIterable(input): boolean
  Checks whether the input can be iterated over  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isIterable({ 0: "0", 1: "1" }); // false
  check.isIterable({ 0: "0", 1: "1", length: 2 }); // false
  check.isIterable(new class extends Array{}); // true
  ```

  ```javascript
  function(...args) {
    check.isIterable(arguments); // true
    check.isIterable(args); // true
  }
  ```

- ### check.isNotIterable(input): boolean
  Returns `true` if the input cannot be iterated over  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNotIterable({ 0: "0", 1: "1" }); // true
  check.isNotIterable({ 0: "0", 1: "1", length: 2 }); // true
  check.isNotIterable(new class extends Array{}); // false
  ```

  _reversed `check.isIterable()`_  

- ### check.isNotArray(input): boolean
  Returns `true` if the input is not an array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNotArray({}); // true
  check.isNotArray([]); // false
  check.isNotArray(new class{}); // true
  ```

  _reversed `check.isArray()`_  

- ### check.isBoolean(input): boolean
  Checks whether the input is a boolean value  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isBoolean(false); // true
  check.isBoolean(new Boolean()); // true
  check.isBoolean(undefined); // false
  ``` 

- ### check.isNotBoolean(input): boolean
  Returns `true` if the input is not a boolean value  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNotBoolean(false); // false
  check.isNotBoolean(new Boolean()); // false
  check.isNotBoolean(null); // true
  ``` 

  _reversed `check.isBoolean()`_  

- ### check.isGenerator(input): boolean
  Checks whether the input is a generator  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isGenerator(function*(){}); // true
  check.isGenerator(function(){}); // false
  check.isGenerator(42); // false
  ``` 

- ### check.isNotGenerator(input): boolean
  Returns `true` if the input is not a generator  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNotGenerator(function*(){}); // false
  check.isNotGenerator(function(){}); // true
  check.isNotGenerator(42); // true
  ``` 

  _reversed `check.isGenerator()`_  

[← Back to `README.md`](../README.md)
