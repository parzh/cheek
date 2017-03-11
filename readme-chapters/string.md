[← Back to `README.md`](../README.md)

## String
- ### cheek.isEmptyString(input: string): boolean
  Checks whether the input is an empty string  
  @param `input` Test string  

  #### Examples:
  ```javascript
  cheek.isEmptyString(""); // true
  cheek.isEmptyString("text"); // false
  cheek.isEmptyString([]); // false
  ```

- ### cheek.isNotEmptyString(input: string): boolean
  Returns `true` if the input is not an empty string  
  @param `input` Test string  

  #### Examples:
  ```javascript
  cheek.isNotEmptyString(""); // false
  cheek.isNotEmptyString("text"); // true
  cheek.isNotEmptyString([]); // true
  ```

- ### cheek.includes(source, substr): boolean
  Checks whether the source string includes substring  
  @param `source` Test string  
  @param `substr` Inner string to test  

  #### Examples:
  ```javascript
  cheek.includes("Hello", "ell"); // true
  cheek.includes("World", "ell"); // false
  cheek.includes("", ""); // true
  ```

- ### cheek.startsWith(source, substr): boolean
  Checks whether the source string starts with substring  
  @param `source` Test string  
  @param `substr` Inner string to test  

  #### Examples:
  ```javascript
  cheek.startsWith("Hello", "Hell"); // true
  cheek.startsWith("Hello", "ell"); // false
  cheek.startsWith("", ""); // true
  ```

- ### cheek.endsWith(source, substr): boolean
  Checks whether the source string ends with substring  
  @param `source` Test string  
  @param `substr` Inner string to test  

  #### Examples:
  ```javascript
  cheek.endsWith("World", "rld"); // true
  cheek.endsWith("World", "orl"); // false
  cheek.endsWith("", ""); // true
  ```
