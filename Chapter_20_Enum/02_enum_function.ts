enum severity{
    Low,
    HIGH,
    MEDIUM,
    CRITICAL
}

console.log(severity.Low);  //It will print index 
console.log(severity.MEDIUM); //2
//if assign values during declaration then only it 

// enum severity{
//     Low = "Low",
//     HIGH= "High",
//     MEDIUM= "Medium",
//     CRITICAL="Critical"
// }

enum Environment{
    Dev="http://dev.api.com",
    QA="http://qa.api.com",
    Prod="http://prod.api.com"
}
console.log(Environment.QA);
