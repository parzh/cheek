# check
#### Check and validate values by criteria in JavaScript

___check___ provides a single object (ideally called `check` in lowercase) which has different methods and alias for simple verification and validation of any values. I'll describe them using TypeScript style for convenience.

***

## General
### check.isTrue(input: any): boolean
Checks whether the `input` is truthy.  
@param `input` Test value

#### Examples:
```javascript
check.isTrue(true); // true
check.isTrue(false); // false
check.isTrue(new Object()); // true
```

### check.isFalse(input: any): boolean
Checks whether the `input` is falsy.  
@param `input` Test value

#### Examples:
```javascript
check.isFalse(true); // false
check.isFalse(false); // true
check.isFalse(new Object()); // false
```

