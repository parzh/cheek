## Bundle
- ### check.bundle(inputs: any[], methodNames: string[]): boolean[][]
  Returns a two-dimensional array of input-method verifications.  
  The returned array contains the same number of arrays as `inputs` does.  
  @param `inputs` An array of test values  
  @param `methodNames` An array of `check` object methods names  

  #### Examples:
  ```javascript
  check.bundle([5, -2], ["isInteger", "isPositive"]);
  // [ [true, true], [true, false] ]

  check.bundle([null, undefined, new Object()], ["isDefined", "isPrimitive"]);
  // [ [false, true], [false, true], [true, false] ]

  check.bundle([5, [3, 4]], ["isNumber", "isInRange", "isNatural"]);
  // SyntaxError: Not enough arguments for method 'check.isInRange' to proceed
  ```

- ### check.everyMethod(input, methodNames: string[]): boolean
  Returns `true` if all of the verifications return `true`  
  @param `input` Test value  
  @param `methodNames` An array of `check` object methods names  

  #### Examples:
  ```javascript
  check.everyMethod(-5, ["isNumber", "isFinite", "isPositive"]); // false
  check.everyMethod(-5, ["isNumber", "isFinite", "isNegative"]); // true
  check.everyMethod("my text", ["isString", "isPrimitive"]); // true
  ```

- ### check.someMethod(input, methodNames: string[]): boolean
  Returns `true` if any of the verifications returns `true`  
  @param `input` Test value  
  @param `methodNames` An array of `check` object methods names  

  #### Examples:
  ```javascript
  check.someMethod(42, ["isNumber", "isString"]); // true; same as `check.isEither([Number, String], 42)`
  check.someMethod(42, ["isNotNatural", "isFloat"]); // false
  check.someMethod(NaN, ["isObject", "isNull"]); // false
  ```

- ### check.everyInput(methodName: string, inputs: any[]): boolean
  Returns `true` if all input values pass verification.  
  Consider the order of arguments.  
  @param `methodName` 'check.' object method name  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  check.everyInput("isNumber", [5, 4, -2]); // true
  check.everyInput("isNumber", [5, 4, -2, "my text"]); // false
  check.everyInput("isNatural", [1, 2, 3]); // true
  ```

- ### check.someInput(methodName: string, inputs: any[]): boolean
  Returns `true` if any of the input values passes verification.  
  Consider the order of arguments.  
  @param `methodName` 'check.' object method name  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  check.someInput("isNotDefined", [5, 4, null, -2]); // true
  check.someInput("isObject", [5, 4, -2, "my text"]); // false
  check.someInput("isNaN", [1, 2, 3]); // false
  ```