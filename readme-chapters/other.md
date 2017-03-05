## Other
- ### check.input(input): Proxy
  Returns Proxy object that allows to perform validations directly on itself  
  @param `input` Test value  

  #### Examples:
  ```javascript
  let input = check.input(-42.5);

  input.isDefined(); // true
  input.is(Number); // true
  input.isNot(Number); // false
  input.isEither([String, Array]); // false
  input.isNeither([String, Array]); // true

  input.bundle(["isDefined", "isTrue"]);
  // TypeError: The method 'check.bundle' requires multiple inputs and cannot be performed via 'check.input( ... )'

  input.everyMethod(["isNotDefined", "isFalse"]); // false
  input.someMethod(["isUndefined", "isFalsy"]); // false

  input.everyInput("isPositive");
  // TypeError: The method 'check.everyInput' requires multiple inputs and cannot be performed via 'check.input( ... )'

  input.someInput("isPositive");
  // TypeError: The method 'check.someInput' requires multiple inputs and cannot be performed via 'check.input( ... )'
  ```