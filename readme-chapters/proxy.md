[← Back to `README.md`](../README.md)

Each one of these methods returns Proxy object that allows to perform validations directly on itself.

## Proxy
- ### cheek.input(input): Proxy
  Prepares single input for further validation.  
  Does not allow to perform validations for multiple inputs.  
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
  // TypeError: The method 'cheek.bundle' requires multiple inputs. Use 'cheek.inputs( ... ).bundle' instead

  input.everyMethod(["isNotDefined", "isFalse"]); // false
  input.someMethod(["isUndefined", "isFalsy"]); // false

  input.everyInput("isPositive");
  // TypeError: The method 'cheek.everyInput' requires multiple inputs. Use 'cheek.inputs( ... ).everyInput' instead

  input.someInput("isPositive");
  // TypeError: The method 'cheek.someInput' requires multiple inputs. Use 'cheek.inputs( ... ).someInput' instead
  ```

- ### cheek.inputs(inputs: any[]): Proxy
  Prepares a bunch of inputs for further validation.  
  Does not allow to perform validations for single inputs.  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  let inputs = cheek.inputs([42, 42.6, new Object(), null]);

  inputs.bundle(["isPrimitive", "isNumber"]);
  // [ [true, true], [true, true], [false, false], [true, false] ]

  inputs.everyMethod(["isPrimitive", "isNumber"]); // false

  inputs.isNotDefined();
  // TypeError: The method 'cheek.isNotDefined' requires a single input. Use 'cheek.input( ... ).isNotDefined' instead
  ``` 

- ### cheek.every(inputs: any[]): Proxy
  Checks whether all input values pass verification.  
  "Boosted" option for `cheek.everyInput()`.  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  let every = cheek.every([42, 42.6, new Object(), "text"]);

  every.isPrimitive(); // false
  every.isNumber(); // false
  every.isDefined(); // true

  cheek.every([1, 2, -3, 4]).isInRange([-2, 2]); // false
  ``` 

  _alias: `cheek.each()`_  

- ### cheek.some(inputs: any[]): Proxy
  Checks whether any of the input values passes verification.  
  "Boosted" option for `cheek.someInput()`.  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  let some = cheek.some([42, 42.6, new Object(), null]);
  
  some.isNotDefined(); // true
  some.isNotInRange(); // SyntaxError: Not enough arguments for method 'cheek.isNotInRange' to proceed
  some.isInRange([10, 39], "exclusive"); // false
  ``` 

  _alias: `cheek.any()`_  

- ### cheek.none(inputs: any[]): Proxy
  Checks whether none of the input values passes verification  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  let none = cheek.none([42, 42.6, new Object(), null]);

  none.isDefined(); // false
  none.isString([]); // true
  none.isInRange([10, 39], "exclusive"); // true
  ``` 

  _reversed `cheek.some()`_  
  _alias: `cheek.neither()`_  

[← Back to `README.md`](../README.md)
