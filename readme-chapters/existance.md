## Existance
- check.isUndefined(input): boolean
  Checks whether the input is exactly `undefined`  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isUndefined(undefined); // true
  check.isUndefined(); // true
  check.isUndefined(null); // false
  check.isUndefined(foo); // ReferenceError: foo is not defined
  ```

  _not to be confused with `check.isNotDefined()`_

- check.isNull(input): boolean
  Checks whether the input is exactly `null`  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNull(null); // true
  check.isNull(); // false
  check.isNull("abc".match(/d/)); // true
  ```

- check.isNotNull(input): boolean
  Returns `true` if the input is anything but `null`  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNotNull(null); // false
  check.isNotNull(undefined); // true
  check.isNotNull("aaa".match(/a+/)); // true
  ```

  _reversed `check.isNull()`_

- check.isDefined(input): boolean
  Checks whether the input is neither `undefined` nor `null`  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isDefined(null); // false
  check.isDefined(undefined); // false
  check.isDefined(""); // true
  ```

- check.isNotDefined(input): boolean
  Returns `true` if the input is either `undefined` or `null`  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNotDefined(null); // true
  check.isNotDefined(undefined); // true
  check.isNotDefined(bar); // ReferenceError: bar is not defined
  ```

  _reversed `check.isDefined()`_  
  _not to be confused with `check.isUndefined()`_