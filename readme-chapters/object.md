[← Back to `README.md`](../README.md)

## Contents
- `.isCircular(object)`
- `.isNotCircular(object)`
- `.hasProperty(object, property)`
- `.hasNoProperty(object, property)`
- `.equals(input, operand)`

## Object
- ### check.isCircular(object: any): boolean
  Checks whether the object is a circular structure  
  @param `object` Test object  

  #### Examples:
  ```javascript
  let arr = [0];

  check.isCircular(arr); // false

  arr.push(arr);

  check.isCircular(arr); // true
  ```

- ### check.isNotCircular(object: any): boolean
  Returns `true` if the object is not a circular structure  
  @param `object` Test object  

  #### Examples:
  ```javascript
  let arr = [0];

  check.isNotCircular(arr); // true

  arr.push(arr);

  check.isNotCircular(arr); // false
  ```

  _reversed `check.isCircular()`_  

- ### check.hasProperty(object: any, key: string | string[]): boolean
  Check whether a property or path `key` is present in `object`  
  @param `object` Test object  

  #### Examples:
  ```javascript
  let obj = {
      prop1: { foo: { bar: 5 } },
      prop2: { foo: { bar: undefined } },
      prop3: 42
  };

  check.hasProperty(obj, "prop1"); // true (obj.prop1)
  check.hasProperty(obj, "prop4"); // false (obj.prop4)
  check.hasProperty(obj, "bar"); // false (obj.bar)

  check.hasProperty(obj, ["prop1", "bar"]); // false (obj.prop1.bar)
  check.hasProperty(obj, ["prop1", "foo", "bar"]); // true (obj.prop1.foo.bar)
  check.hasProperty(obj, ["prop2", "foo", "bar"]); // true (obj.prop2.foo.bar)
  check.hasProperty(obj, ["prop3", "foo", "bar"]); // false (obj.prop3.foo.bar)
  ```

  _alias: `check.prop()`_  

- ### check.hasNoProperty(object: any, key: string | string[]): boolean
  Retrns `true` if a property or path `key` is not present in `object`  
  @param `object` Test object  

  #### Examples:
  ```javascript
  let obj = {
      prop1: { foo: { bar: 5 } },
      prop2: { foo: { bar: undefined } },
      prop3: 42
  };

  check.hasNoProperty(object, "prop1"); // false
  check.hasNoProperty(object, "prop4"); // true
  check.hasNoProperty(object, "bar"); // true

  check.hasNoProperty(object, ["prop1", "bar"]); // true
  check.hasNoProperty(object, ["prop1", "foo", "bar"]); // false
  check.hasNoProperty(object, ["prop2", "foo", "bar"]); // false
  check.hasNoProperty(object, ["prop3", "foo", "bar"]); // true
  ```

  _reversed `check.hasProperty()`_  
  _alias: `check.noprop()`_  

- ### check.equals(object: any, operand: any): boolean
  Checks whether two compared objects are effectively the same  
  @param `object` Test object  
  @param `operand` Comparison object  

  #### Examples:
  ```javascript
  let obj = { prop: "value" };

  check.equals(obj, obj); // true
  check.equals(obj, { prop: "value" }); // true
  check.equals({}, {}); // true
  check.equals(obj, {}); // false
  check.equals(obj, NaN); // false

  check.equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }); // true
  check.equals(5, new Number(5)); // true
  check.equals(NaN, 0 / 0); // true
  check.equals(0, -0); // true
  check.equals([], {}); // true
  check.equals([], { length: 0 }); // true
  ```

  _not to be confused with `check.isEqualTo()`_  

[← Back to `README.md`](../README.md)
