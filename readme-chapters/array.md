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
  cheek.isNotEmptyArray([new Object()]); // false
  ```

- ### cheek.contains(array: any[], element: any): boolean
  Checks whether the array contains the element  
  @param `array` Test array  
  @param `element` Test element  

  #### Examples:
  ```javascript
  cheek.contains(); // 
  cheek.contains(); // 
  cheek.contains(); // 
  ```

- ### cheek.lacks(array: any[], element: any): boolean
  Returns `true` if the array does not contain the element  
  @param `array` Test array  
  @param `element` Test element  

  #### Examples:
  ```javascript
  cheek.lacks(); // 
  cheek.lacks(); // 
  cheek.lacks(); // 
  ```

- ### cheek.isFirstIn(array: any[], input: any): boolean
  Checks whether the input is the first element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isFirstIn(); // 
  cheek.isFirstIn(); // 
  cheek.isFirstIn(); // 
  ```

- ### cheek.isNotFirstIn(array: any[], input: any): boolean
  Returns `true` if the input is not the first element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isNotFirstIn(); // 
  cheek.isNotFirstIn(); // 
  cheek.isNotFirstIn(); // 
  ```

- ### cheek.isLastIn(array: any[], input: any): boolean
  Checks whether the input is the last element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isLastIn(); // 
  cheek.isLastIn(); // 
  cheek.isLastIn(); // 
  ```

- ### cheek.isNotLastIn(array: any[], input: any): boolean
  Returns `true` if the input is not the last element of the array  
  @param `array` Test array  
  @param `input` Test value  

  #### Examples:
  ```javascript
  cheek.isNotLastIn(); // 
  cheek.isNotLastIn(); // 
  cheek.isNotLastIn(); // 
  ```
