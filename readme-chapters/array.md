[← Back to `README.md`](../README.md)

## Array
- ### cheek.isEmptyArray(input: any[]): boolean
  Checks whether the array is empty  
  @param `input` Test array  

  #### Examples:
  ```javascript
  cheek.isEmptyArray([]); // true
  cheek.isEmptyArray(""); // false
  cheek.isEmptyArray([null, null]); // true
  ```

- ### cheek.isNotEmptyArray(input: any[]): boolean
  Returns `true` if the array is not empty  
  @param `input` Test array  

  #### Examples:
  ```javascript
  cheek.isNotEmptyArray([1, 2, 3]); // true
  cheek.isNotEmptyArray(""); // false
  cheek.isNotEmptyArray([new Object()]); // true
  ```

- ### cheek.contains(array: any[], element: any): boolean
  Checks whether the array contains the element  
  @param `array` Test array  
  @param `element` Test element  

  #### Examples:
  ```javascript
  let myFive = new Number(5);

  cheek.contains([3, 4, 5], 5); // true
  cheek.contains([3, 4, 5], new Number(5)); // false
  cheek.contains([3, 4, new Number(5)], new Number(5)); // false
  cheek.contains([3, 4, myFive], myFive); // true

  cheek.contains([3, , 5], undefined); // false
  ```

- ### cheek.lacks(array: any[], element: any): boolean
  Returns `true` if the array does not contain the element  
  @param `array` Test array  
  @param `element` Test element  

  #### Examples:
  ```javascript
  cheek.lacks([3, 4, 5], 6); // true
  cheek.lacks([3, 4, 5], 5); // false
  cheek.lacks([3, undefined, 5], undefined); // false
  ```

- ### cheek.isFirstIn(array: any[], input: any): boolean
  Checks whether the input is the first element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isFirstIn([1, 2, 3], 1); // true
  cheek.isFirstIn([1, 2, 3], 2); // false
  ```

- ### cheek.isNotFirstIn(array: any[], input: any): boolean
  Returns `true` if the input is not the first element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isNotFirstIn([1, 2, 3], 1); // false
  cheek.isNotFirstIn([1, 2, 3], 2); // true
  ```

- ### cheek.isLastIn(array: any[], input: any): boolean
  Checks whether the input is the last element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isLastIn([1, 2, 3], 3); // true
  cheek.isLastIn([1, 2, 3], 2); // false
  ```

- ### cheek.isNotLastIn(array: any[], input: any): boolean
  Returns `true` if the input is not the last element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isNotLastIn([1, 2, 3], 3); // false
  cheek.isNotLastIn([1, 2, 3], 2); // true
  ```

[← Back to `README.md`](../README.md)
