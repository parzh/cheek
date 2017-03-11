[← Back to `README.md`](../README.md)

## General
- ### cheek.isTruthy(input): boolean
  Checks whether the input evaluates to `true`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isTruthy(true); // true
  cheek.isTruthy("text"); // true
  cheek.isTruthy(new Object()); // true
  ```

- ### cheek.isFalsy(input): boolean
  Checks whether the input evaluates to `false`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isFalsy(true); // false
  cheek.isFalsy(""); // true
  cheek.isFalsy([]); // false
  ```

  _reversed `cheek.isTruthy()`_

- ### cheek.isTrue(input): boolean
  Checks whether the input is exactly `true`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isTrue(true); // true
  cheek.isTrue(new Boolean()); // false
  cheek.isTrue(42); // false
  cheek.isTrue(undefined); // false
  ```

- ### cheek.isFalse(input): boolean
  Checks whether the input is exactly `false`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isFalse(true); // false
  cheek.isFalse(new Boolean()); // true
  cheek.isFalse(42); // false
  cheek.isFalse(null); // false
  ```

[← Back to `README.md`](../README.md)
