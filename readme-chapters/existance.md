[← Back to `README.md`](../README.md)

## Existance
- cheek.isUndefined(input): boolean
  Checks whether the input is exactly `undefined`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isUndefined(undefined); // true
  cheek.isUndefined(); // true
  cheek.isUndefined(null); // false
  cheek.isUndefined(foo); // ReferenceError: foo is not defined
  ```

  _not to be confused with `cheek.isNotDefined()`_

- cheek.isNull(input): boolean
  Checks whether the input is exactly `null`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNull(null); // true
  cheek.isNull(); // false
  cheek.isNull("abc".match(/d/)); // true
  ```

- cheek.isNotNull(input): boolean
  Returns `true` if the input is anything but `null`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNotNull(null); // false
  cheek.isNotNull(undefined); // true
  cheek.isNotNull("aaa".match(/a+/)); // true
  ```

  _reversed `cheek.isNull()`_

- cheek.isDefined(input): boolean
  Checks whether the input is neither `undefined` nor `null`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isDefined(null); // false
  cheek.isDefined(undefined); // false
  cheek.isDefined(""); // true
  ```

- cheek.isNotDefined(input): boolean
  Returns `true` if the input is either `undefined` or `null`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNotDefined(null); // true
  cheek.isNotDefined(undefined); // true
  cheek.isNotDefined(bar); // ReferenceError: bar is not defined
  ```

  _reversed `cheek.isDefined()`_  
  _not to be confused with `cheek.isUndefined()`_