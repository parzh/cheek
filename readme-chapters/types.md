[← Back to `README.md`](../README.md)

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