# check
#### Check and validate values by criteria in JavaScript

___check___ provides a single object (ideally called `check` in lowercase) which has different methods and alias for simple verification and validation of any values. I'll describe them using TypeScript style for convenience.

***

## General
- ### check.isTrue(input: any): boolean
  Checks whether the `input` is truthy.  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isTrue(true); // true
  check.isTrue(false); // false
  check.isTrue(new Object()); // true
  ```

- ### check.isFalse(input: any): boolean
  Checks whether the `input` is falsy.  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isFalse(true); // false
  check.isFalse(false); // true
  check.isFalse(new Object()); // false
  ```

## Types
- ### check.is(Type: Function, input: any): boolean
  Checks whether the input is an instance of provided class  
  @param `Type` Test class  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.is(Number, {}); // false; see `check.isNumber()` below
  check.is(Array, []); // true; see `check.isArray()` below
  check.is(MyObject, new MyObject()); // true
  ```

- ### check.isNot(Type: Function, input: any): boolean
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

- ### check.isEither(types: Function[], input: any): boolean
  Checks whether the input is an instance of any of provided classes  
  @param `types` Array of test classes  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isEither([Number, String], {}); // false
  check.isEither([RegExp, String], /test/); // true
  check.isEither([Number, RegExp, Array], 4); // true
  ```

- ### check.isNeither(types: Function[], input: any): boolean
  Returns `true` if the input is not an instance of any of provided classes  
  @param `types` Array of test classes  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNeither([Number, String], {}); // true
  check.isNeither([RegExp, String], /test/); // false
  check.isNeither([Number, RegExp, Array], 4); // false
  ```
  _opposite for `check.isEither()`_

~~_8 more methods in the chapter Types_~~  

## Array
~~_2 more methods in the chapter Array_~~  

## Number
~~_24 more methods in the chapter Number_~~  

## Multiple
~~_5 more methods in the chapter Multiple_~~  
