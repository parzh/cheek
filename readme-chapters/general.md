[← Back to `README.md`](../README.md)

## General
- ### check.isTruthy(input): boolean
  Checks whether the input evaluates to `true`  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isTruthy(true); // true
  check.isTruthy("text"); // true
  check.isTruthy(new Object()); // true
  ```

- ### check.isFalsy(input): boolean
  Checks whether the input evaluates to `false`  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isFalsy(true); // false
  check.isFalsy(""); // true
  check.isFalsy([]); // false
  ```

  _reversed `check.isTruthy()`_

- ### check.isTrue(input): boolean
  Checks whether the input is exactly `true`  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isTrue(true); // true
  check.isTrue(new Boolean()); // false
  check.isTrue(42); // false
  check.isTrue(undefined); // false
  ```

- ### check.isFalse(input): boolean
  Checks whether the input is exactly `false`  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isFalse(true); // false
  check.isFalse(new Boolean()); // true
  check.isFalse(42); // false
  check.isFalse(null); // false
  ```

[← Back to `README.md`](../README.md)
