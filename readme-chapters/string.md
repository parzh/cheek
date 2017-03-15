[← Back to `README.md`](../README.md)

## String
- ### check.isEmptyString(input: string): boolean
  Checks whether the input is an empty string  
  @param `input` Test string  

  #### Examples:
  ```javascript
  check.isEmptyString(""); // true
  check.isEmptyString("text"); // false
  check.isEmptyString([]); // false
  ```

- ### check.isNotEmptyString(input: string): boolean
  Returns `true` if the input is not an empty string  
  @param `input` Test string  

  #### Examples:
  ```javascript
  check.isNotEmptyString(""); // false
  check.isNotEmptyString("text"); // true
  check.isNotEmptyString([]); // true
  ```

  _reversed `check.isEmptyString()`_  

- ### check.includes(source, substr): boolean
  Checks whether the source string includes substring  
  @param `source` Test string  
  @param `substr` Inner string to test  

  #### Examples:
  ```javascript
  check.includes("Hello", "ell"); // true
  check.includes("World", "ell"); // false
  check.includes("", ""); // true
  ```

- ### check.startsWith(source, substr): boolean
  Checks whether the source string starts with substring  
  @param `source` Test string  
  @param `substr` Inner string to test  

  #### Examples:
  ```javascript
  check.startsWith("Hello", "Hell"); // true
  check.startsWith("Hello", "ell"); // false
  check.startsWith("", ""); // true
  ```

- ### check.endsWith(source, substr): boolean
  Checks whether the source string ends with substring  
  @param `source` Test string  
  @param `substr` Inner string to test  

  #### Examples:
  ```javascript
  check.endsWith("World", "rld"); // true
  check.endsWith("World", "orl"); // false
  check.endsWith("", ""); // true
  ```

[← Back to `README.md`](../README.md)
