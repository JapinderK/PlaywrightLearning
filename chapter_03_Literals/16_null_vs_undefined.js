// -------------------------------------------------------------
// | Feature         | null                | undefined         |
// |-----------------|---------------------|-------------------|
// | Type            | object              | undefined         |
// | Default value?  | No                  | Yes (unassigned)  |
// | Explicit assign?| Yes                 | No                |
// | Use case        | Intentional absence | Uninitialized var |
// | Equality        | == undefined is true| == null is true   |
// -------------------------------------------------------------

// 16_null_vs_undefined.js
// Difference between null and undefined in JavaScript

// undefined: A variable that has been declared but not assigned a value is undefined
let a;
console.log('a:', a); // Output: a: undefined

// null: null is an assignment value. It can be assigned to a variable as a representation of no value
let b = null;
console.log('b:', b); // Output: b: null

// Example: Function with no return statement returns undefined
function test() {}
console.log('test():', test()); // Output: test(): undefined

// Example: Explicitly assigning null
let person = { name: 'Alice', age: null };
console.log('person:', person); // Output: person: { name: 'Alice', age: null }

// Summary:
// undefined means a variable has been declared but not yet assigned a value.
// null is an assignment value that represents no value or no object.

// === Comparison between null and undefined
console.log('null === undefined:', null === undefined); // Output: false
// Strict equality (===) checks for both value and type, so null and undefined are not strictly equal.
