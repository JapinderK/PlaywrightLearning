let unknownValue: unknown = "hello";

if (typeof unknownValue === "string") {
    console.log("Hi");
}  //this is true as the moment we provide string value to unknownValue its type becomes string.

let message: string = "Hello";

let username1: string;
let userID: number;

//Function annotation
function user(name: string): string{
    return `Hello, ${name}`;
}