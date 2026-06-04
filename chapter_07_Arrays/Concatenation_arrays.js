let a = [1, 2];
let b = [3, 4];

//concat()
let c = a.concat(b);
console.log(c);

//spread - modern concatenation using(....)
let d = [...a, ...b];
console.log(d);

//Join
let arr = ["pass", "fail", "skip"].join("|");
console.log(arr); //pass|fail|skip
