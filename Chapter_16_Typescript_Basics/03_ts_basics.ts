let unknownValue: unknown = "hello";

if (typeof unknownValue === "string") {
    console.log("Hi");
}  //this is true as the moment we provide string value to unknownValue its type becomes string.

let message: string = "Hello";

let username1: string;
let userID: number;

//Function annotation
function greet(name: string): string{
    return `Hello, ${name}`;
}

//Arrow function annotation
const multiply = (a:number,b:number):number => a*b;

//object annotations
let user:{name:string; age:number}={
    name:"John",
    age:38
}
//never: function never returns anything
function throwError(message:string):never{
    throw new Error(message);
}