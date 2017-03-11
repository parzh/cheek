[← Back to `README.md`](../README.md)

## Types
- ### cheek.is(Type: Function, input): boolean
  Checks whether the input is an instance of provided class  
  @param `Type` Test class  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.is(MyObject, new MyObject()); // true
  cheek.is(Number, {}); // false; see `cheek.isNumber()`
  cheek.is(Array, []); // true; see `cheek.isArray()`
  ```

- ### cheek.isNot(Type: Function, input): boolean
  Returns `true` if the input is not an instance of provided class  
  @param `Type` Test class  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isNot(MyObject, new MyObject()); // false
  cheek.isNot(Number, {}); // true
  cheek.isNot(Array, []); // false
  ```
  _reversed `cheek.is()`_

- ### cheek.isEither(types: Function[], input): boolean
  Checks whether the input is an instance of any of provided classes  
  @param `types` Array of test classes  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isEither([Number, String], {}); // false
  cheek.isEither([RegExp, String], /test/); // true
  cheek.isEither([Number, RegExp, Array], 4); // true
  ```

- ### cheek.isNeither(types: Function[], input): boolean
  Returns `true` if the input is not an instance of any of provided classes  
  @param `types` Array of test classes  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isNeither([Number, String], {}); // true
  cheek.isNeither([RegExp, String], /test/); // false
  cheek.isNeither([Number, RegExp, Array], 4); // false
  ```
  _reversed `cheek.isEither()`_

- ### cheek.isPrimitive(input): boolean
  Checks whether the input is a primitive value  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isPrimitive(42); // true
  cheek.isPrimitive(new Array()); // false
  cheek.isPrimitive(null); // true
  ``` 

- ### cheek.isObject(input): boolean
  Returns `true` if the input is not a primitive value  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isObject(42); // false
  cheek.isObject(new Array()); // true
  cheek.isObject(null); // false
  ``` 

  _reversed `cheek.isPrimitive()`_

- ### cheek.isString(input): boolean
  Checks whether the input is a string  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isString(""); // true
  cheek.isString(new String()); // true
  cheek.isString(new (class extends String {})()); // true
  ``` 

- ### cheek.isNotString(input): boolean
  Returns `true` if the input is not a string  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isNotString(""); // false
  cheek.isNotString(new String()); // false
  cheek.isNotString(new (class {})()); // true
  ``` 

  _reversed `cheek.isString()`_

- ### cheek.isNumber(input): boolean
  Checks whether the input is a number  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isNumber(5); // true
  cheek.isNumber(new Number()); // true
  cheek.isNumber(NaN); // true
  ```

- ### cheek.isNotNumber(input): boolean
  Returns `true` if the input is not a number  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isNotNumber(undefined); // true
  cheek.isNotNumber(new Number()); // false
  cheek.isNotNumber(NaN); // false
  ```

  _reversed `cheek.isNumber()`_  
  _not to be confused with `cheek.isNaN()`_

- ### cheek.isArray(input): boolean
  Checks whether the input is an array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isArray({}); // false
  cheek.isArray([]); // true
  cheek.isArray(new (class extends Array {})()); // true
  ```

  ```javascript
  function(...args) {
    cheek.isArray(arguments); // false
    cheek.isArray(args); // true
  }
  ```

- ### cheek.isNotArray(input): boolean
  Returns `true` if the input is not an array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isNotArray({}); // true
  cheek.isNotArray([]); // false
  cheek.isNotArray(new (class {})()); // true
  ```

  _reversed `cheek.isArray()`_

- ### cheek.isBoolean(input): boolean
  Checks whether the input is a boolean value  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isBoolean(false); // true
  cheek.isBoolean(new Boolean()); // true
  cheek.isBoolean(undefined); // false
  ``` 

- ### cheek.isNotBoolean(input): boolean
  Returns `true` if the input is not a boolean value  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isNotBoolean(false); // false
  cheek.isNotBoolean(new Boolean()); // false
  cheek.isNotBoolean(null); // true
  ``` 

  _reversed `cheek.isBoolean()`_