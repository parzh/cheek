# check
#### Check and validate values by criteria in JavaScript

___check___ provides a single object (ideally called `check` in lowercase) which has different methods and alias for simple verification and validation of any values.  
I'll describe them using TypeScript style for convenience. Just remember that it is the JavaScript here, and arguments are actually `argument: any`.

## TODO:

  ```javascript
  check.bundle(methodNames, inputs);
  check.everyMethod(methodNames, inputs);
  check.someMethod(methodNames, inputs);
  ```

  ```javascript
  check.input(input)/*.isInRange(range, inclusively)*/;
  ```

***

## General
- ### check.isTrue(input): boolean
  Checks whether the `input` is truthy.  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isTrue(true); // true
  check.isTrue(false); // false
  check.isTrue(new Object()); // true
  ```

- ### check.isFalse(input): boolean
  Checks whether the `input` is falsy.  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isFalse(true); // false
  check.isFalse(false); // true
  check.isFalse(new Object()); // false
  ```

## Types
- ### check.is(Type: Function, input): boolean
  Checks whether the input is an instance of provided class  
  @param `Type` Test class  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.is(Number, {}); // false; see `check.isNumber()` below
  check.is(Array, []); // true; see `check.isArray()` below
  check.is(MyObject, new MyObject()); // true
  ```

- ### check.isNot(Type: Function, input): boolean
  Returns `true` if the input is not an instance of provided class  
  @param `Type` Test class  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNot(Number, {}); // true
  check.isNot(Array, []); // false
  check.isNot(MyObject, new MyObject()); // false
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
  check.isString(new (class extends String {})()); // true
  ``` 

- ### check.isNotString(input): boolean
  Returns `true` if the input is not a string  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNotString(""); // false
  check.isNotString(new String()); // false
  check.isNotString(new (class {})()); // true
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
  check.isArray(new (class extends Array {})()); // true
  ```

  ```javascript
  function(...args) {
    let checkArguments = check.isArray(arguments); // false
    let checkArgs = check.isArray(args); // true
  }
  ```

- ### check.isNotArray(input): boolean
  Returns `true` if the input is not an array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNotArray({}); // true
  check.isNotArray([]); // false
  check.isNotArray(new (class {})()); // true
  ```

  _reversed `check.isArray()`_


## Array
- ### check.isEmpty(array: any[]): boolean
  Checks whether the array is empty  
  @param `array` Test array  

  #### Examples:
  ```javascript
  check.isEmpty([]); // true
  check.isEmpty(""); // false
  check.isEmpty(new Object()); // false
  ```

- ### check.isNotEmpty(array: any[]): boolean
  Returns `true` if the array is not empty  
  @param `array` Test array  

  #### Examples:
  ```javascript
  check.isNotEmpty([]); // false
  check.isNotEmpty(""); // false
  check.isNotEmpty(new Object()); // false
  ```

## Number
~~_24 more methods in the chapter Number_~~  

## Bundle

- ### check.bundle(inputs: any[], methodNames: string[]): boolean[][]
  Returns a two-dimensional array of input-method verifications.  
  The returned array contains the same number of arrays as `inputs` does.  
  @param `inputs` An array of test values  
  @param `methodNames` An array of 'check' object methods names  

  #### Examples:
  ```javascript
  check.bundle([5, -2], ["isInteger", "isPositive"]);
  // [ [true, true], [true, false] ]

  check.bundle([null, undefined, new Object()], ["isDefined", "isPrimitive"]);
  // [ [false, true], [false, true], [true, false] ]

  check.bundle([5, [3, 4]], ["isNumber", "isInRange", "isNatural"]);
  // SyntaxError: Not enough arguments for method 'check.isInRange' to proceed
  ```

- ### check.everyMethod(input, methodNames: string[]): boolean
  Returns `true` if all of the verifications return `true`  
  @param `input` Test value  
  @param `methodNames` An array of 'check' object methods names  

  #### Examples:
  ```javascript
  check.everyMethod(-5, ["isNumber", "isFinite", "isPositive"]); // false
  check.everyMethod(-5, ["isNumber", "isFinite", "isNegative"]); // true
  check.everyMethod("my text", ["isString", "isPrimitive"]); // true
  ```

- ### check.someMethod(input, methodNames: string[]): boolean
  Returns `true` if any of the verifications returns `true`  
  @param `input` Test value  
  @param `methodNames` An array of 'check' object methods names  

  #### Examples:
  ```javascript
  check.
  check.
  check.
  ```

- ### check.everyInput(methodName: string, inputs: any[]): boolean
  Returns `true` if all input values pass verification.  
  Consider the order of arguments.  
  @param `methodName` 'check.' object method name  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  check.
  check.
  check.
  ```

- ### check.someInput(methodName: string, inputs: any[]): boolean
  Returns `true` if any of the input values passes verification.  
  Consider the order of arguments.  
  @param `methodName` 'check.' object method name  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  check.
  check.
  check.
  ```
