// Template Literal in JavaScript
// Template literals are string literals that allow embedded expressions and multi-line strings.
// They use backticks (`) instead of single (' ') or double (" ") quotes.

// Example 1: Basic template literal
let greeting = `Hello, world!`;
console.log(greeting); // Output: Hello, world!

// Example 2: Multi-line string
let multiLine = `This is line 1
This is line 2`;
console.log(multiLine);
// Output:
// This is line 1
// This is line 2

// Example 3: String interpolation (embedding variables)
let name = 'Alice';
let message = `Hello, ${name}!`;
console.log(message); // Output: Hello, Alice!

// Example 4: Embedding expressions
let a = 5, b = 10;
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.


//Example 5 : Real life
let env = "Staging";
const userID = 1234;

let url = `https//api-${env}.tekion.com/users/${userID}`;
console.log(url);

