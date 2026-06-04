let marks = [50, 60, 70, 75, 80, 86, 90, 55, 44, 91, 30, 90]

let grades = marks.map(m => m > 70 ? "Pass" : "Fail");

console.log(grades);

//Reduce - returns a total 

let total = marks.reduce((a, b) => a + b, 0);
console.log(total);

//filter
let passing = marks.filter(s => s > 70);
console.log(passing);