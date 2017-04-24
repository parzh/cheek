[← Back to `README.md`](../README.md)

Each one of these methods returns Proxy object that allows to perform validations directly on itself.

## Contents
- [`.input(input)`](./proxy.md#checkinputinput-proxy)
- [`.inputs(inputs)`](./proxy.md#checkinputsinputs-any-proxy)
- [`.every(inputs)`](./proxy.md#checkeveryinputs-any-proxy)
- [`.some(inputs)`](./proxy.md#checksomeinputs-any-proxy)
- [`.none(inputs)`](./proxy.md#checknoneinputs-any-proxy)

## Proxy
- ### check.input(input): Proxy
  Prepares single input for further validation.  
  Does not allow to perform validations for multiple inputs.  
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
  // TypeError: The method 'check.bundle' requires multiple inputs. Use 'check.inputs( ... ).bundle' instead

  input.everyMethod(["isNotDefined", "isFalse"]); // false
  input.someMethod(["isUndefined", "isFalsy"]); // false

  input.everyInput("isPositive");
  // TypeError: The method 'check.everyInput' requires multiple inputs. Use 'check.inputs( ... ).everyInput' instead

  input.someInput("isPositive");
  // TypeError: The method 'check.someInput' requires multiple inputs. Use 'check.inputs( ... ).someInput' instead
  ```

  _alias: `check()`_  

- ### check.inputs(inputs: any[]): Proxy
  Prepares a bunch of inputs for further validation.  
  Does not allow to perform validations for single inputs.  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  let inputs = check.inputs([42, 42.6, new Object(), null]);

  inputs.bundle(["isPrimitive", "isNumber"]);
  // [ [true, true], [true, true], [false, false], [true, false] ]

  inputs.everyInput("isPrimitive"); // false

  inputs.isNotDefined();
  // TypeError: The method 'check.isNotDefined' requires a single input. Use 'check.input( ... ).isNotDefined' instead
  ``` 

- ### check.every(inputs: any[]): Proxy
  Checks whether all input values pass verification.  
  "Boosted" option for `check.everyInput()`.  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  let every = check.every([42, 42.6, new Object(), "text"]);

  every.isPrimitive(); // false
  every.isNumber(); // false
  every.isDefined(); // true

  check.every([1, 2, -3, 4]).isInRange([-2, 2]); // false
  ``` 

  _alias: `check.each()`_  

- ### check.some(inputs: any[]): Proxy
  Checks whether any of the input values passes verification.  
  "Boosted" option for `check.someInput()`.  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  let some = check.some([42, 42.6, new Object(), null]);
  
  some.isNotDefined(); // true
  some.isNotInRange(); // SyntaxError: Not enough arguments for method 'check.isNotInRange' to proceed
  some.isInRange([10, 39], "exclusive"); // false
  ``` 

  _alias: `check.any()`_  

- ### check.none(inputs: any[]): Proxy
  Checks whether none of the input values passes verification  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  let none = check.none([42, 42.6, new Object(), null]);

  none.isDefined(); // false
  none.isString([]); // true
  none.isInRange([10, 39], "exclusive"); // true
  ``` 

  _reversed `check.some()`_  
  _alias: `check.neither()`_  
  _not to be confused with `check.isNeither()`_  

[← Back to `README.md`](../README.md)
