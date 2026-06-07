
//A function that takes another function as an argument or return a function
function loggin(testFn, testName) {
    let result = testFn();
    return result;
}

function loginTest() {
    console.log("Pass")
}

function loginTestFailed() {
    console.log("Failed");
}

loggin(loginTest, "Login Test");
loggin(loginTestFailed, "Login Test");