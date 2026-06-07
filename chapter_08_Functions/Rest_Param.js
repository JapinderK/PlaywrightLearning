//Rest of the param
//It takes any number of params
//syntax - ...name;
//spread should be the last param of a fn
function logResult(testName, ...result) //result will store any number of params in array format
{
    console.log(testName);
    console.log(result);
}

logResult("Login", 1, 2, 3, 4,);//Login [ 1, 2, 3, 4 ]
logResult("Reg", "Hello", "Test");  //Reg [ 'Hello', 'Test' ]