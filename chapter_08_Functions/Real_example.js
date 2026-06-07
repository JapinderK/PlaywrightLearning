function validateStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode < 300)
    {
        console.log("Request is successful");
    }
}

//Function as an expression
const validateStatusCode_Ex = function (statusCode) {
     if (statusCode >= 200 && statusCode < 300)
    {
        console.log("Request is successful");
    }
}


//Arrow function
const validateStatusCode_Arrow = (statusCode) => {
     if (statusCode >= 200 && statusCode < 300)
    {
        console.log("Request is successful");
    }
}