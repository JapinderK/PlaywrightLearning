let arr = [1, 2, 3];

let scores = new Array(3);  //this will create an empty array
let scores2 = new Array("A", "B", "C");

console.log(scores); //[ <3 empty items> ]

let arr2 = Array.of(1, 2, 3);
console.log(arr2);

let arr3 = Array.from("hello");  //converts string to characters always
console.log(arr3);

let arr4 = Array.from("1234567");  //if more than 6 then convert it into a 2-d array and print
console.log(arr4);

