[← Back to `README.md`](../README.md)

## Array
- ### cheek.isEmpty(array: any[]): boolean
  Checks whether the array is empty  
  @param `array` Test array  

  #### Examples:
  ```javascript
  cheek.isEmpty([]); // true
  cheek.isEmpty(""); // false
  cheek.isEmpty(new Object()); // false
  ```

- ### cheek.isNotEmpty(array: any[]): boolean
  Returns `true` if the array is not empty  
  @param `array` Test array  

  #### Examples:
  ```javascript
  cheek.isNotEmpty([]); // false
  cheek.isNotEmpty(""); // false
  cheek.isNotEmpty(new Object()); // false
  ```