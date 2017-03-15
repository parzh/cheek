[← Back to `README.md`](../README.md)

## Number
- ### check.isNaN(input: number): boolean
  Checks whether the input is exactly `NaN`  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNaN(NaN); // true
  check.isNaN(); // false
  check.isNaN(0 / 0); // true
  ```

  _not to be confused with `check.isNotNumber()`_  

- ### check.isNotNaN(input: number): boolean
  Returns `true` if the input is not `NaN`  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNotNaN(NaN); // false
  check.isNotNaN(null); // true
  check.isNotNaN(0 / 0); // false
  ```

  _reversed `check.isNaN()`_  

- ### check.isFinite(input: number): boolean
  Checks whether the input is a finite number  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isFinite(42); // true
  check.isFinite(NaN); // false
  check.isFinite(new Object()); // false
  ```

- ### check.isNotFinite(input: number): boolean
  Returns `true` if the input is not a finite number  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNotFinite(5) // false
  check.isNotFinite(NaN) // true
  check.isNotFinite(new Object()) // true
  ```

  _reversed `check.isFinite()`_  
  _alias: `check.isInfinite()`_  

- ### check.isInteger(input: number): boolean
  Checks whether the input is an integer  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isInteger(42); // true
  check.isInteger(42.5); // false
  check.isInteger(0); // true
  ```

  _alias: `check.isNotFloat()`_  

- ### check.isNotInteger(input: number): boolean
  Returns `true` if the input is not an integer  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNotInteger(42); // false
  check.isNotInteger(42.5); // true
  check.isNotInteger(0.0); // false
  ```

  _reversed `check.isInteger()`_  
  _alias: `check.isFloat()`_  

- ### check.isNatural(input: number, zero: boolean = true): boolean
  Checks whether the input is a natural number  
  @param `input` Test value  
  @param `zero` If undefined or `true`, zero is considered as natural number

  #### Examples:
  ```javascript
  check.isNatural(5); // true
  check.isNatural(42.5); // false
  check.isNatural(-0); // true
  check.isNatural(0, false); // false
  ```

- ### check.isNotNatural(input: number, zero: boolean = true): boolean
  Returns `true` if input not a natural number  
  @param `input` Test value  
  @param `zero` If undefined or `true`, zero **is** considered as natural number

  #### Examples:
  ```javascript
  check.isNotNatural(5); // false
  check.isNotNatural(42.5); // true
  check.isNotNatural(0); // false
  check.isNotNatural(0, false); // true
  ```

  _reversed `check.isNatural()`_  

- ### check.isPercent(input: number): boolean
  Checks whether the input is a fraction between 0 and 1 inclusively  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isPercent(0.42); // true
  check.isPercent(42); // false
  check.isPercent(0.0); // true
  ```

- ### check.isNotPercent(input: number): boolean
  Returns `true` if the input is not a fraction between 0 and 1 inclusively  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNotPercent(0.5); // false
  check.isNotPercent(5); // true
  check.isNotPercent(-0.0); // false
  ```

  _reversed `check.isPercent()`_  

- ### check.isEqualTo(input: number, operand: number): boolean
  Checks whether the input is equal to the operand.  
  Values of `input` and `operand` are interchangeable.  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  check.isEqualTo(42, 42); // true
  check.isEqualTo(42, 5); // false
  check.isEqualTo(NaN, NaN); // false

  // bad usage
  check.isEqualTo("text", "text"); // true
  check.isEqualTo(new Object(), new Object()); // false
  ```

  _alias: `check.eq()`, `check.equals()`_  

- ### check.isEqualToAny(input: number, operands: number[]): boolean
  Checks whether the input is equal to any of the operands  
  @param `input` Test value  
  @param `oparends` An array of comparison values  

  #### Examples:
  ```javascript
  check.isEqualToAny(5, [1, 2, 3, 4, 5]); // true
  check.isEqualToAny(5, [3, 14, 15, 9, 26]); // false

  let arr = new Array(10).fill(0).map((el, pos) => pos);
  check.isEqualToAny(5, arr); // true
  ```

  _alias: `check.eqa()`_  

- ### check.isGreaterThan(input: number, operand: number): boolean
  Checks whether the input is greater than the operand  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  check.isGreaterThan(42, 5); // true
  check.isGreaterThan(5, 42); // false
  check.isGreaterThan(NaN, NaN); // false
  ```

  _alias: `check.gt()`_  

- ### check.isGreaterThanOrEqualTo(input: number, operand: number): boolean
  Checks whether the input is greater than or equal to the operand  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  check.isGreaterThanOrEqualTo(42, 5); // true
  check.isGreaterThanOrEqualTo(42, 42); // true
  check.isGreaterThanOrEqualTo(NaN, NaN); // false
  ```

  _alias: `check.gte()`_  

- ### check.isLessThan(input: number, operand: number): boolean
  Checks whether the input is less than the operand  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  check.isLessThan(5, 42); // true
  check.isLessThan(42, 5); // false
  check.isLessThan(NaN, NaN); // false
  ```

  _alias: `check.lt()`_  

- ### check.isLessThanOrEqualTo(input: number, operand: number): boolean
  Checks whether the input is less than or equal to the operand  
  @param `input` Test value  
  @param `operand` Comparison value  

  #### Examples:
  ```javascript
  check.isLessThanOrEqualTo(5, 42); // true
  check.isLessThanOrEqualTo(5, 5); // true
  check.isLessThanOrEqualTo(NaN, NaN); // false
  ```

  _alias: `check.lte()`_  

- ### check.isPositive(input: number): boolean
  Checks whether the input is greater than zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isPositive(5); // true
  check.isPositive(0); // false
  check.isPositive(-5); // false
  ```

  _alias: `check.pos()`_  

- ### check.isNotPositive(input: number): boolean
  Returns `true` if the input is less than or equal to zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNotPositive(5); // false
  check.isNotPositive(0); // true
  check.isNotPositive(-5); // true
  ```

  _reversed `check.isPositive()`_  
  _not to be confused with `check.isNegative()`_  

- ### check.isNegative(input: number): boolean
  Checks whether the input is less than zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNegative(-5); // true
  check.isNegative(0); // false
  check.isNegative(5); // false
  ```

  _alias: `check.neg()`_  

- ### check.isNotNegative(input: number): boolean
  Checks whether the input is greater than or equal to zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNotNegative(-5); // false
  check.isNotNegative(0); // true
  check.isNotNegative(5); // true
  ```

  _reversed `check.isNegative()`_  
  _alias: `check.isNonNegative()`_  
  _not to be confused with `check.isPositive()`_  

- ### check.isZero(input: number): boolean
  Checks whether the input is equal to zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isZero(0); // true
  check.isZero(new Number()); // true
  check.isZero(null); // false
  ```

- ### check.isNotZero(input: number): boolean
  Returns `true` if the input is unequal to zero  
  @param `input` Test value

  #### Examples:
  ```javascript
  check.isNotZero(0); // false
  check.isNotZero(new Number()); // false
  check.isNotZero(null); // true
  ```

  _reversed `check.isZero()`_  
  _alias: `check.isNonZero()`_  

- ### check.isDivisibleBy(numerator: number, denominator: number): boolean
  Cheks whether `numerator` is divisible by `denominator`  
  @param `numerator` This number will be divided by `denominator`  
  @param `denominator` This number will divide `numerator`  

  #### Examples:
  ```javascript
  check.isDivisibleBy(42, 5); // false
  check.isDivisibleBy(40, 5); // true
  check.isDivisibleBy(0, 0); // true
  ```

- ### check.isNotDivisibleBy(numerator: number, denominator: number): boolean
  Returns `true` if `numerator` is not divisible by `denominator`  
  @param `numerator` This number will be divided by the `denominator`  
  @param `denominator` This number will divide the `numerator`  

  #### Examples:
  ```javascript
  check.isNotDivisibleBy(42, 5); // true
  check.isNotDivisibleBy(40, 5); // false
  check.isNotDivisibleBy(0, 0); // false
  ```

  _reversed `check.isDivisibleBy()`_  
  _alias: `check.isIndivisibleBy()`_  

- ### check.isInRange(input: number, range: number[], inclusively: boolean | "inclusive" | "exclusive" | "excl" = true): boolean
  Checks whether the input is in provided range  
  @param `input` Test value  
  @param `range` Array of two numbers: min and max value of range  
  @param `inclusively` If undefined or `true`, edge-matching will return `true`

  #### Examples:
  ```javascript
  check.isInRange(15, [5, 42]); // true
  check.isInRange(5, [5, 42]); // true
  check.isInRange(5, [5, 42], "exclusively"); // false
  ```

- ### check.isNotInRange(input: number, range: number[], inclusively: boolean | "inclusive" | "exclusive" | "excl" = true): boolean
  Returns `true` if the input is not in provided range  
  @param `input` Test value  
  @param `range` Array of two numbers: min and max value of range  
  @param `inclusively` If undefined or `true`, edge-matching will return `false`

  #### Examples:
  ```javascript
  check.isNotInRange(15, [5, 42]); // false
  check.isNotInRange(5, [5, 42], "inclusively"); // false
  check.isNotInRange(5, [5, 42], "excl"); // true
  ```

  _reversed `check.isInRange()`_  

[← Back to `README.md`](../README.md)
