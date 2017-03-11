[← Back to `README.md`](../README.md)

## Bundle
- ### cheek.bundle(methodNames: string[], inputs: any[]): boolean[][]
  Returns a two-dimensional array of input-method verifications.  
  The returned array contains the same number of arrays as `inputs` does.  
  @param `methodNames` An array of `cheek` object methods names  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  cheek.bundle(["isInteger", "isPositive"], [5, -2]);
  // [ [true, true], [true, false] ]

  cheek.bundle(["isDefined", "isPrimitive"], [null, undefined, new Object()]);
  // [ [false, true], [false, true], [true, false] ]

  cheek.bundle(["isNumber", "isInRange", "isNatural"], [5, [3, 4]]);
  // SyntaxError: Not enough arguments for method 'cheek.isInRange' to proceed
  ```

- ### cheek.everyMethod(methodNames: string[], input): boolean
  Returns `true` if all of the verifications return `true`  
  @param `methodNames` An array of `cheek` object methods names  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.everyMethod(["isNumber", "isFinite", "isPositive"], -5); // false
  cheek.everyMethod(["isNumber", "isFinite", "isNegative"], -5); // true
  cheek.everyMethod(["isString", "isPrimitive"], "my text"); // true
  ```

- ### cheek.someMethod(methodNames: string[], input): boolean
  Returns `true` if any of the verifications returns `true`  
  @param `input` Test value  
  @param `methodNames` An array of `cheek` object methods names  

  #### Examples:
  ```javascript
  cheek.someMethod(["isNumber", "isString"], 42); // true; same as `cheek.isEither([Number, String], 42)`
  cheek.someMethod(["isNotNatural", "isFloat"], 42); // false
  cheek.someMethod(["isObject", "isNull"], NaN); // false
  ```

- ### cheek.everyInput(methodName: string, inputs: any[]): boolean
  Returns `true` if all input values pass verification  
  @param `methodName` 'cheek.' object method name  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  cheek.everyInput("isNumber", [5, 4, -2]); // true
  cheek.everyInput("isNumber", [5, 4, -2, "my text"]); // false
  cheek.everyInput("isNatural", [1, 2, 3]); // true
  ```

- ### cheek.someInput(methodName: string, inputs: any[]): boolean
  Returns `true` if any of the input values passes verification  
  @param `methodName` 'cheek.' object method name  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  cheek.someInput("isNotDefined", [5, 4, null, -2]); // true
  cheek.someInput("isObject", [5, 4, -2, "my text"]); // false
  cheek.someInput("isNaN", [1, 2, 3]); // false
  ```

[← Back to `README.md`](../README.md)
