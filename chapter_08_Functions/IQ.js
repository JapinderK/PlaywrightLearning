function runTest(name, status, duration) {
    return `${name}: ${status} (${duration})`;
}
runTest("Login", "Passed", 1000);   //No output since no console.log (No assignment)
const result = runTest("Registration", "Failed", 2000);


//---------------------------------------------------------------------------------------------------------------------
function logTest(name)
{
    console.log(`Running: ${name}`);
    //no return statement
}
let result2 = logTest("Login");      
console.log(result2);

//Output->
// Running : Login
// undefined

//undefined because there is no return statement and console.log will work only if there is a return statement


greet("Alice");
function greet(name) {
    return `Hello ${name}`;
}
//No output, No error

//--------------------------------------------------------------------------------------------------------------------
//Function as an expression
sayHi("Bob");
const sayHi = function (name) {
    return `Hello ${name}`;
}
//Output -> ReferenceError

//---------------------------------------------------------------------------------------------------------------------
