// Difference between ' ' (single quotes) and " " (double quotes) in JavaScript
// Both are used to define string literals. There is no difference in behavior.
// The choice is mostly about coding style or to avoid escaping quotes inside the string.

let single = 'Hello, world!';
let double = "Hello, world!";

// Example: Using quotes inside strings
let withSingle = 'He said, "JavaScript is fun!"';
let withDouble = "It's a sunny day!";

console.log(single);      // Output: Hello, world!
console.log(double);      // Output: Hello, world!
console.log(withSingle);  // Output: He said, "JavaScript is fun!"
console.log(withDouble);  // Output: It's a sunny day!

// Concept of characters in JavaScript
// JavaScript does not have a separate 'char' type. A character is just a string of length 1.
let charA = 'A';
let charB = "B";
console.log(charA, typeof charA); // Output: A string
console.log(charB, typeof charB); // Output: B string
