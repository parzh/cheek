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
  // TypeError: "The method 'cheek.bundle' requires multiple inputs. Use 'cheek.inputs( ... ).bundle' instead"

  input.everyMethod(["isNotDefined", "isFalse"]); // false
  input.someMethod(["isUndefined", "isFalsy"]); // false

  input.everyInput("isPositive");
  // TypeError: "The method 'cheek.everyInput' requires multiple inputs. Use 'cheek.inputs( ... ).everyInput' instead"

  input.someInput("isPositive");
  // TypeError: "The method 'cheek.someInput' requires multiple inputs. Use 'cheek.inputs( ... ).someInput' instead"
  ```

- ### cheek.inputs(inputs: any[]): Proxy
  Returns Proxy object that allows to perform validations directly on itself  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  let _inputs = cheek.inputs([42, 42.6, new Object(), null]);

  _inputs.bundle(["isPrimitive", "isNumber"]);
  // [ [true, true], [true, true], [false, false], [true, false] ]
  ``` 

- ### cheek.every(inputs: any[]): Proxy
  Returns Proxy object that allows to perform validations directly on itself  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  let _every = cheek.every([42, 42.6, new Object(), "text"]);

  _every.isPrimitive(); // false
  _every.isNumber(); // false
  _every.isDefined(); // true
  ``` 

  _alias: `cheek.each()`_  

- ### cheek.some(inputs: any[]): Proxy
  Returns Proxy object that allows to perform validations directly on itself  
  @param `inputs` An array of test values  

  #### Examples:
  ```javascript
  let _some = cheek.some([42, 42.6, new Object(), null]);

  
  _some.isNotDefined(); // true
  _some.isNotInRange(); // SyntaxError: Not enough arguments for method 'cheek.isNotInRange' to proceed

  _some.isInRange([10, 39], "exclusive");
  // SyntaxError: Not enough arguments for method 'cheek.isInRange' to proceed
  /* It is a bug */
  ``` 

  _alias: `cheek.any()`_  
