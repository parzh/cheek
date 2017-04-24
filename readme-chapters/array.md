[← Back to `README.md`](../README.md)

## Contents
- [`.isEmptyArray(input)`](./array.md#checkisemptyarrayinput-any-boolean)
- [`.isNotEmptyArray(input)`](./array.md#checkisnotemptyarrayinput-any-boolean)
- [`.contains(array, element)`](./array.md#checkcontainsarray-any-element-any-boolean)
- [`.lacks(array, element)`](./array.md#checklacksarray-any-element-any-boolean)
- [`.isFirstIn(array, input)`](./array.md#checkisfirstinarray-any-input-any-boolean)
- [`.isNotFirstIn(array, input)`](./array.md#checkisnotfirstinarray-any-input-any-boolean)
- [`.isLastIn(array, input)`](./array.md#checkislastinarray-any-input-any-boolean)
- [`.isNotLastIn(array, input)`](./array.md#checkisnotlastinarray-any-input-any-boolean)

## Array
- ### check.isEmptyArray(input: any[]): boolean
  Checks whether the input is an empty array  
  @param `input` Test array  

  #### Examples:
  ```javascript
  check.isEmptyArray([]); // true
  check.isEmptyArray(""); // false
  check.isEmptyArray([null, null]); // true
  ```

- ### check.isNotEmptyArray(input: any[]): boolean
  Returns `true` if the input is not an empty array  
  @param `input` Test array  

  #### Examples:
  ```javascript
  check.isNotEmptyArray([1, 2, 3]); // true
  check.isNotEmptyArray(""); // true
  check.isNotEmptyArray([new Object()]); // true
  ```

  _reversed `check.isEmptyArray()`_  

- ### check.contains(array: any[], element: any): boolean
  Checks whether the array contains the element  
  @param `array` Test array  
  @param `element` Test element  

  #### Examples:
  ```javascript
  let myFive = new Number(5);

  check.contains([3, 4, 5], 5); // true
  check.contains([3, 4, 5], new Number(5)); // false
  check.contains([3, 4, new Number(5)], new Number(5)); // false
  check.contains([3, 4, myFive], myFive); // true

  check.contains([3, , 5], undefined); // false
  ```

- ### check.lacks(array: any[], element: any): boolean
  Returns `true` if the array does not contain the element  
  @param `array` Test array  
  @param `element` Test element  

  #### Examples:
  ```javascript
  check.lacks([3, 4, 5], 6); // true
  check.lacks([3, 4, 5], 5); // false
  check.lacks([3, undefined, 5], undefined); // false
  ```

- ### check.isFirstIn(array: any[], input: any): boolean
  Checks whether the input is the first element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isFirstIn([1, 2, 3], 1); // true
  check.isFirstIn([1, 2, 3], 2); // false
  ```

  _alias: `check.hasFirst()`_  

- ### check.isNotFirstIn(array: any[], input: any): boolean
  Returns `true` if the input is not the first element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNotFirstIn([1, 2, 3], 1); // false
  check.isNotFirstIn([1, 2, 3], 2); // true
  ```

- ### check.isLastIn(array: any[], input: any): boolean
  Checks whether the input is the last element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isLastIn([1, 2, 3], 3); // true
  check.isLastIn([1, 2, 3], 2); // false
  ```

  _alias: `check.hasLast()`_  

- ### check.isNotLastIn(array: any[], input: any): boolean
  Returns `true` if the input is not the last element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  check.isNotLastIn([1, 2, 3], 3); // false
  check.isNotLastIn([1, 2, 3], 2); // true
  ```

[← Back to `README.md`](../README.md)
