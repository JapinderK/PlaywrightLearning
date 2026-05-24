//JS Engine
//Line by Line , JIT Compilation

console.log(greeting);   //undefined
var greeting = "hello";

//Behind the scenes:
//var greeting;  <--hoisted with undefined
//console.log(greeting); <--undefined
//greeting = "Hello";    <--assignmment sstays in place
//console.log(greeting);  <--Hellp
