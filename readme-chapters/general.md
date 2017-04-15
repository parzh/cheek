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

- ### check.and(input, operand): boolean
  Returns `true` if both agruments are truthy  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  check.and(true, true); // true
  check.and(42, ""); // false
  check.and(0, "text"); // false
  check.and("", null); // false
  ```

- ### check.nand(input, operand): boolean
  Returns `false` if both agruments are truthy  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  check.nand(true, true); // false
  check.nand(42, ""); // true
  check.nand(0, "text"); // true
  check.nand("", null); // true

  _reversed `check.and()`_  
  ```

- ### check.or(input, operand): boolean
  Returns `true` if at least one of agruments is truthy  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  check.or(true, true); // true
  check.or(42, ""); // true
  check.or(0, "text"); // true
  check.or("", null); // false
  ```

- ### check.nor(input, operand): boolean
  Returns `true` if both agruments are falsy  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  check.nor(true, true); // false
  check.nor(42, ""); // false
  check.nor(0, "text"); // false
  check.nor("", null); // true

  _reversed `check.or()`_  
  ```

- ### check.xor(input, operand): boolean
  Returns `true` if agruments are not equal  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  check.xor(true, true); // false
  check.xor(42, ""); // true
  check.xor(0, "text"); // true
  check.xor("", null); // false
  ```

[← Back to `README.md`](../README.md)
