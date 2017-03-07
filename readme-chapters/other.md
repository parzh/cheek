[← Back to `README.md`](../README.md)

## Other
- ### cheek.input(input): Proxy
  Returns Proxy object that allows to perform validations directly on itself  
  @param `input` Test value  

  #### Examples:
  ```javascript
  let input = cheek.input(-42.5);

  input.isDefined(); // true
  input.is(Number); // true
  input.isNot(Number); // false
  input.isEither([String, Array]); // false
  input.isNeither([String, Array]); // true

  input.bundle(["isDefined", "isTrue"]);
  // TypeError: The method 'cheek.bundle' requires multiple inputs and cannot be performed via 'cheek.input( ... )'

  input.everyMethod(["isNotDefined", "isFalse"]); // false
  input.someMethod(["isUndefined", "isFalsy"]); // false

  input.everyInput("isPositive");
  // TypeError: The method 'cheek.everyInput' requires multiple inputs and cannot be performed via 'cheek.input( ... )'

  input.someInput("isPositive");
  // TypeError: The method 'cheek.someInput' requires multiple inputs and cannot be performed via 'cheek.input( ... )'
  ```