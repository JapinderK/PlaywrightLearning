// Backtick_single_double.js
// Difference between backtick (`), single (' '), and double (" ") quotes in JavaScript (in short):

// All three are used to define strings.
// Backticks (`) allow multi-line strings and variable interpolation (e.g., `${value}`), while single and double quotes do not.

let single = 'Single quotes';
let double = "Double quotes";
let backtick = `Backtick allows ${single} and ${double} in one string!`;

console.log(single);   // Output: Single quotes
console.log(double);   // Output: Double quotes
console.log(backtick); // Output: Backtick allows Single quotes and Double quotes in one string!


/*
  Feature              |  '' or ""  |  ``
  ---------------------|------------|------------
  Simple text          |     ✓      |   ✓
  Variable injection   |     ✗      |   ✓  -> ${var}
  Multi-line           |     ✗      |   ✓
  Expression inside    |     ✗      |   ✓  -> ${a + b}
*/