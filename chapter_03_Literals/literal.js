// literal.js
// Examples of all types of literals in JavaScript

// 1. Numeric Literals
let decimal = 42;
let floating = 3.14;
let hex = 0x2A; // Hexadecimal
let binary = 0b101010; // Binary
let octal = 0o52; // Octal

console.log('decimal:', typeof decimal);
console.log('floating:', typeof floating);
console.log('hex:', typeof hex);
console.log('binary:', typeof binary);

console.log('octal:', typeof octal);

// 2. String Literals
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${singleQuote}!`;

console.log('singleQuote:', typeof singleQuote);
console.log('doubleQuote:', typeof doubleQuote);
console.log('templateLiteral:', typeof templateLiteral);

// 3. Boolean Literals
let isTrue = true;
let isFalse = false;

console.log('isTrue:', typeof isTrue);
console.log('isFalse:', typeof isFalse);

// 4. Null Literal
let empty = null;

console.log('empty (null):', typeof empty); // object (quirk in JS)

// 5. Undefined Literal
let notAssigned;

console.log('notAssigned (undefined):', typeof notAssigned);

// 6. Object Literal
let person = { name: 'Alice', age: 30 };

console.log('person:', typeof person);

// 7. Array Literal
let numbers = [1, 2, 3, 4];

console.log('numbers (array):', typeof numbers); // object

// 8. RegExp Literal
let regex = /abc/i;

console.log('regex:', typeof regex);

// 9. BigInt Literal
let big = 1234567890123456789012345678901234567890n;

console.log('big (BigInt):', typeof big);

// 10. Symbol Literal
let sym = Symbol('desc');

console.log('sym (Symbol):', typeof sym);

// 11. Function Literal (Function Expression)
let add = function(a, b) { return a + b; };

console.log('add (function):', typeof add);

// 12. Template Literal (already shown above)

// 13. Nested Literals
let complex = { arr: [1, { nested: true }], str: `Value: ${decimal}` };

console.log('complex (nested object):', typeof complex);
