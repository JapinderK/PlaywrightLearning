console.log(typeof "hello");
console.log(typeof 123); // int -> number
console.log(typeof 31.4); // float -> number
// typeof true
// typeof undefined  -> undefined
// typeof null  -> object
// typeof [] -> object
console.log(typeof []); // -> object
console.log(typeof NaN); // -> number

///---------------------------------
let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client error" : "Server error";

console.log(`Status ${statusCode}: ${category}`);