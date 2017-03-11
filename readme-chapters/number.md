[← Back to `README.md`](../README.md)

## Number
- ### cheek.isNaN(input: number): boolean
  Checks whether the input is exactly `NaN`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNaN(NaN); // true
  cheek.isNaN(); // false
  cheek.isNaN(0 / 0); // true
  ```

  _not to be confused with `cheek.isNotNumber()`_  

- ### cheek.isNotNaN(input: number): boolean
  Returns `true` if the input is not `NaN`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNotNaN(NaN); // false
  cheek.isNotNaN(null); // true
  cheek.isNotNaN(0 / 0); // false
  ```

  _reversed `cheek.isNaN()`_  

- ### cheek.isFinite(input: number): boolean
  Checks whether the input is a finite number  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isFinite(42); // true
  cheek.isFinite(NaN); // false
  cheek.isFinite(new Object()); // false
  ```

- ### cheek.isNotFinite(input: number): boolean
  Returns `true` if the input is not a finite number  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNotFinite(5) // false
  cheek.isNotFinite(NaN) // true
  cheek.isNotFinite(new Object()) // true
  ```

  _reversed `cheek.isFinite()`_  
  _alias: `cheek.isInfinite()`_  

- ### cheek.isInteger(input: number): boolean
  Checks whether the input is an integer  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isInteger(42); // true
  cheek.isInteger(42.5); // false
  cheek.isInteger(0); // true
  ```

  _alias: `cheek.isNotFloat()`_  

- ### cheek.isNotInteger(input: number): boolean
  Returns `true` if the input is not an integer  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNotInteger(42); // false
  cheek.isNotInteger(42.5); // true
  cheek.isNotInteger(0.0); // false
  ```

  _reversed `cheek.isInteger()`_  
  _alias: `cheek.isFloat()`_  

- ### cheek.isNatural(input: number, zero: boolean = true): boolean
  Checks whether the input is a natural number  
  @param `input` Test value  
  @param `zero` If undefined or `true`, zero is considered as natural number

  #### Examples:
  ```javascript
  cheek.isNatural(5); // true
  cheek.isNatural(42.5); // false
  cheek.isNatural(-0); // true
  cheek.isNatural(0, false); // false
  ```

- ### cheek.isNotNatural(input: number, zero: boolean = true): boolean
  Returns `true` if input not a natural number  
  @param `input` Test value  
  @param `zero` If undefined or `true`, zero **is** considered as natural number

  #### Examples:
  ```javascript
  cheek.isNotNatural(5); // false
  cheek.isNotNatural(42.5); // true
  cheek.isNotNatural(0); // false
  cheek.isNotNatural(0, false); // true
  ```

  _reversed `cheek.isNatural()`_  

- ### cheek.isPercent(input: number): boolean
  Checks whether the input is a fraction between 0 and 1 inclusively  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isPercent(0.42); // true
  cheek.isPercent(42); // false
  cheek.isPercent(0.0); // true
  ```

- ### cheek.isNotPercent(input: number): boolean
  Returns 'true' if the input is not a fraction between 0 and 1 inclusively  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNotPercent(0.5); // false
  cheek.isNotPercent(5); // true
  cheek.isNotPercent(-0.0); // false
  ```

  _reversed `cheek.isPercent()`_  

- ### cheek.isEqualTo(input: number, operand: number): boolean
  Checks whether the input is equal to the operand.  
  Values of `input` and `operand` are interchangeable.  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  cheek.isEqualTo(42, 42); // true
  cheek.isEqualTo(42, 5); // false
  cheek.isEqualTo(NaN, NaN); // false

  // bad usage
  cheek.isEqualTo("text", "text"); // true
  cheek.isEqualTo(new Object(), new Object()); // false
  ```

  _alias: `cheek.eq()`, `cheek.equals()`_  

- ### cheek.isEqualToAny(input: number, operands: number[]): boolean
  Checks whether the input is equal to any of the operands  
  @param `input` Test value  
  @param `oparends` An array of comparison values  

  #### Examples:
  ```javascript
  cheek.isEqualToAny(5, [1, 2, 3, 4, 5]); // true
  cheek.isEqualToAny(5, [3, 14, 15, 9, 26]); // false

  let arr = new Array(10).fill(0).map((el, pos) => pos);
  cheek.isEqualToAny(5, arr); // true
  ```

  _alias: `cheek.eqa()`_  

- ### cheek.isGreaterThan(input: number, operand: number): boolean
  Checks whether the input is greater than the operand  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  cheek.isGreaterThan(42, 5); // true
  cheek.isGreaterThan(5, 42); // false
  cheek.isGreaterThan(NaN, NaN); // false
  ```

  _alias: `cheek.gt()`_  

- ### cheek.isGreaterThanOrEqualTo(input: number, operand: number): boolean
  Checks whether the input is greater than or equal to the operand  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  cheek.isGreaterThanOrEqualTo(42, 5); // true
  cheek.isGreaterThanOrEqualTo(42, 42); // true
  cheek.isGreaterThanOrEqualTo(NaN, NaN); // false
  ```

  _alias: `cheek.gte()`_  

- ### cheek.isLessThan(input: number, operand: number): boolean
  Checks whether the input is less than the operand  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  cheek.isLessThan(5, 42); // true
  cheek.isLessThan(42, 5); // false
  cheek.isLessThan(NaN, NaN); // false
  ```

  _alias: `cheek.lt()`_  

- ### cheek.isLessThanOrEqualTo(input: number, operand: number): boolean
  Checks whether the input is less than or equal to the operand  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  cheek.isLessThan(5, 42); // true
  cheek.isLessThan(5, 5); // true
  cheek.isLessThan(NaN, NaN); // false
  ```

  _alias: `cheek.lte()`_  

- ### cheek.isPositive(input: number): boolean
  Checks whether the input is greater than zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isPositive(5); // true
  cheek.isPositive(0); // false
  cheek.isPositive(-5); // false
  ```

- ### cheek.isNotPositive(input: number): boolean
  Returns `true` if the input is less than or equal to zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNotPositive(5); // false
  cheek.isNotPositive(0); // true
  cheek.isNotPositive(-5); // true
  ```

  _reversed `cheek.isPositive()`_  
  _not to be confused with `cheek.isNegative()`_  

- ### cheek.isNegative(input: number): boolean
  Checks whether the input is less than zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNegative(-5); // true
  cheek.isNegative(0); // false
  cheek.isNegative(5); // false
  ```

- ### cheek.isNotNegative(input: number): boolean
  Checks whether the input is greater than or equal to zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNotNegative(-5); // false
  cheek.isNotNegative(0); // true
  cheek.isNotNegative(5); // true
  ```

  _reversed `cheek.isNegative()`_  
  _alias: `cheek.isNonNegative()`_  
  _not to be confused with `cheek.isPositive()`_  

- ### cheek.isZero(input: number): boolean
  Checks whether the input is equal to zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isZero(0); // true
  cheek.isZero(new Number()); // true
  cheek.isZero(null); // false
  ```

- ### cheek.isNotZero(input: number): boolean
  Returns `true` if the input is unequal to zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNotZero(0); // false
  cheek.isNotZero(new Number()); // false
  cheek.isNotZero(null); // true
  ```

  _reversed `cheek.isZero()`_  
  _alias: `cheek.isNonZero()`_  

- ### cheek.isNotDivisibleBy(numerator: number, denominator: number): boolean
  Returns `true` if `numerator` is not divisible by `denominator`  
  @param `input` Test value

  #### Examples:
  ```javascript
  cheek.isNotDivisibleBy(42, 5); // true
  cheek.isNotDivisibleBy(40, 5); // false
  cheek.isNotDivisibleBy(0, 0); // false
  ```

  _reversed `cheek.isDivisibleBy()`_  
  _alias: `cheek.isIndivisibleBy()`_  

- ### cheek.isInRange(input: number, range: number[], inclusively: boolean | "inclusive" | "exclusive" | "excl" = true): boolean
  Checks whether the input is in provided range  
  @param `input` Test value  
  @param `range` Array of two numbers: min and max value of range  
  @param `inclusively` If `true`, edge-matching will return `true`

  #### Examples:
  ```javascript
  cheek.isInRange(15, [5, 42]); // true
  cheek.isInRange(5, [5, 42]); // true
  cheek.isInRange(5, [5, 42], "exclusively"); // false
  ```

- ### cheek.isNotInRange(input: number, range: number[], inclusively: boolean | "inclusive" | "exclusive" | "excl" = true): boolean
  Returns `true` if the input is not in provided range  
  @param `input` Test value  
  @param `range` Array of two numbers: min and max value of range  
  @param `inclusively` If `true`, edge-matching will return `true`

  #### Examples:
  ```javascript
  cheek.isNotInRange(15, [5, 42]); // false
  cheek.isNotInRange(5, [5, 42], "inclusively"); // false
  cheek.isNotInRange(5, [5, 42], "excl"); // true
  ```

  _reversed `cheek.isInRange()`_  
