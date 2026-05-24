let age = 20;

let will_vote = age > 18 ? "Yes" : "No";
console.log(will_vote);
// Ternary = condition ? "true resul" : "false result";


let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client error" : "Server error";

console.log(`Status ${statusCode}: ${category}`);