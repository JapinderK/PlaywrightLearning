//let is a block scoped

let a = 10;
let retry = 10;
retry = retry + 1;
console.log(retry);

//let retry = 11;  //SyntaxError: Identifier 'retry' has already been declared

let status = "pending";
if (status === "pending")
{
    let executionTime = 12000;
    console.log(executionTime);
}
//console.log(executionTime);   //ReferenceError: executionTime is not defined