[← Back to `README.md`](../README.md)

## Bundle
- ### cheek.bundle(inputs: any[], methodNames: string[]): boolean[][]
  Returns a two-dimensional array of input-method verifications.  
  The returned array contains the same number of arrays as `inputs` does.  
  @param `inputs` An array of test values  
  @param `methodNames` An array of `cheek` object methods names  

  #### Examples:
  ```javascript
  cheek.bundle([5, -2], ["isInteger", "isPositive"]);
  // [ [true, true], [true, false] ]

  cheek.bundle([null, undefined, new Object()], ["isDefined", "isPrimitive"]);
  // [ [false, true], [false, true], [true, false] ]

  cheek.bundle([5, [3, 4]], ["isNumber", "isInRange", "isNatural"]);
  // SyntaxError: Not enough arguments for method 'cheek.isInRange' to proceed
  ```

- ### cheek.everyMethod(input, methodNames: string[]): boolean
  Returns `true` if all of the verifications return `true`  
  @param `input` Test value  
  @param `methodNames` An array of `cheek` object methods names  

  #### Examples:
  ```javascript
  cheek.everyMethod(-5, ["isNumber", "isFinite", "isPositive"]); // false
  cheek.everyMethod(-5, ["isNumber", "isFinite", "isNegative"]); // true
  cheek.everyMethod("my text", ["isString", "isPrimitive"]); // true
  ```

- ### cheek.someMethod(input, methodNames: string[]): boolean
  Returns `true` if any of the verifications returns `true`  
  @param `input` Test value  
  @param `methodNames` An array of `cheek` object methods names  

  #### Examples:
  ```javascript
  cheek.someMethod(42, ["isNumber", "isString"]); // true; same as `cheek.isEither([Number, String], 42)`
  cheek.someMethod(42, ["isNotNatural", "isFloat"]); // false
  cheek.someMethod(NaN, ["isObject", "isNull"]); // false
  ```

- ### cheek.everyInput(methodName: string, inputs: any[]): boolean
  Returns `true` if all input values pass verification.  
  Consider the order of arguments.  
  @param `methodName` 'cheek.' object method name  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  cheek.everyInput("isNumber", [5, 4, -2]); // true
  cheek.everyInput("isNumber", [5, 4, -2, "my text"]); // false
  cheek.everyInput("isNatural", [1, 2, 3]); // true
  ```

- ### cheek.someInput(methodName: string, inputs: any[]): boolean
  Returns `true` if any of the input values passes verification.  
  Consider the order of arguments.  
  @param `methodName` 'cheek.' object method name  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  cheek.someInput("isNotDefined", [5, 4, null, -2]); // true
  cheek.someInput("isObject", [5, 4, -2, "my text"]); // false
  cheek.someInput("isNaN", [1, 2, 3]); // false
  ```

[← Back to `README.md`](../README.md)
