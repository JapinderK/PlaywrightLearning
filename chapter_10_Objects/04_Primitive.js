//Primitive vs referbce types

let a = 10;
let b = a; //copy Primitive value
b = 99;
console.log(a); //10
console.log(b); //99


// Objects - copied by reference
let obj = { val: 10 };
let obj2 = obj;
obj2.val = 99;
console.log(obj.val);  // 99
console.log(obj2.val); // 99

// Reassigning the variable breaks the reference link
let obj3 = { val: 10 };
let obj4 = obj3;
obj4 = { val: 99 };
console.log(obj3.val); // 10
console.log(obj4.val); // 99