[← Back to `README.md`](../README.md)

## Contents
- [`.bundle(methodNames, inputs)`](./bundle.md#checkbundlemethodnames-string-inputs-any-boolean)
- [`.everyMethod(methodNames, input)`](./bundle.md#checkeverymethodmethodnames-string-input-boolean)
- [`.someMethod(methodNames, input)`](./bundle.md#checksomemethodmethodnames-string-input-boolean)
- [`.everyInput(methodName, inputs)`](./bundle.md#checkeveryinputmethodname-string-inputs-any-boolean)
- [`.someInput(methodName, inputs)`](./bundle.md#checksomeinputmethodname-string-inputs-any-boolean)

## Bundle
- ### check.bundle(methodNames: string[], inputs: any[]): boolean[][]
  Returns a two-dimensional array of input-method verifications.  
  The returned array contains the same number of arrays as `inputs` does.  
  @param `methodNames` An array of `check` object methods names  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  check.bundle(["isInteger", "isPositive"], [5, -2]);
  // [ [true, true], [true, false] ]

  check.bundle(["isDefined", "isPrimitive"], [null, undefined, new Object()]);
  // [ [false, true], [false, true], [true, false] ]

  check.bundle(["isNumber", "isInRange", "isNatural"], [5, [3, 4]]);
  // SyntaxError: Not enough arguments for method 'check.isInRange' to proceed
  ```

- ### check.everyMethod(methodNames: string[], input): boolean
  Returns `true` if all of the verifications return `true`  
  @param `methodNames` An array of `check` object methods names  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.everyMethod(["isNumber", "isFinite", "isPositive"], -5); // false
  check.everyMethod(["isNumber", "isFinite", "isNegative"], -5); // true
  check.everyMethod(["isString", "isPrimitive"], "my text"); // true
  ```

- ### check.someMethod(methodNames: string[], input): boolean
  Returns `true` if any of the verifications returns `true`  
  @param `input` Test value  
  @param `methodNames` An array of `check` object methods names  

  #### Examples:
  ```javascript
  check.someMethod(["isNumber", "isString"], 42); // true; same as `check.isEither([Number, String], 42)`
  check.someMethod(["isNotNatural", "isFloat"], 42); // false
  check.someMethod(["isObject", "isNull"], NaN); // false
  ```

- ### check.everyInput(methodName: string, inputs: any[]): boolean
  Returns `true` if all input values pass verification  
  @param `methodName` 'check.' object method name  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  check.everyInput("isNumber", [5, 4, -2]); // true
  check.everyInput("isNumber", [5, 4, -2, "my text"]); // false
  check.everyInput("isNatural", [1, 2, 3]); // true
  ```

- ### check.someInput(methodName: string, inputs: any[]): boolean
  Returns `true` if any of the input values passes verification  
  @param `methodName` 'check.' object method name  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  check.someInput("isNotDefined", [5, 4, null, -2]); // true
  check.someInput("isObject", [5, 4, -2, "my text"]); // false
  check.someInput("isNaN", [1, 2, 3]); // false
  ```

[← Back to `README.md`](../README.md)
