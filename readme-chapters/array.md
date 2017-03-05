[← Back to `README.md`](../README.md)

## Array
- ### check.isEmpty(array: any[]): boolean
  Checks whether the array is empty  
  @param `array` Test array  

  #### Examples:
  ```javascript
  check.isEmpty([]); // true
  check.isEmpty(""); // false
  check.isEmpty(new Object()); // false
  ```

- ### check.isNotEmpty(array: any[]): boolean
  Returns `true` if the array is not empty  
  @param `array` Test array  

  #### Examples:
  ```javascript
  check.isNotEmpty([]); // false
  check.isNotEmpty(""); // false
  check.isNotEmpty(new Object()); // false
  ```