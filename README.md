# check
#### Yet another value-validator in JavaScript ... Or is it?

___check___ provides an object (ideally called `check` in lowercase) which has different methods for simple verification and validation of any value.  
I'll describe them using TypeScript style for convenience. Just remember that it is the JavaScript here, and arguments are actually `argument: any`.  
Consider also that the library is baby-aged. Changes that occur may be pretty dramatic.

## TODO:

- swap arguments for bundle-check methods  

  ```javascript
  check.bundle(methodNames, inputs);
  check.everyMethod(methodNames, inputs);
  check.someMethod(methodNames, inputs);
  ```

- rename `check.isEmpty()` to `check.isEmptyArray()`

- add methods:
  - `check.isArraylike(input)` to the chapter Types
  - `check.isPercent(input: number)` to the chapter Number
  - to the chapter Array:
    - `check.contains(array: any[], input)`
    - `check.hasFirst(array: any[], input)`
    - `check.hasLast(array: any[], input)`
  - to the chapter String:
    - `check.isEmptyString(input: string)`
    - `check.containsChar(source: string, input: string)`
    - `check.startsWith(source: string, input: string)`
    - `check.endsWith(source: string, input: string)`
  - to the chapter Other:
    - `check.every(inputs: any[])`
    - `check.some(inputs: any[])`

- add chaining to `check.input()`  

  ```javascript
  // should conjunction or disjunction be here?
  check.input(42).isPrimitive().isNumber().isInRange([40, 50], "inclusively"); // true
  ```

- improve performance of `check.someMethod()` and `check.someInput()` methods

***

## Chapters:

- [General](readme-chapters/general.md)
- [Existance](readme-chapters/existance.md)
- [Types](readme-chapters/types.md)
- [Array](readme-chapters/array.md)
- [Number](readme-chapters/number.md)
- [Other](readme-chapters/other.md)
