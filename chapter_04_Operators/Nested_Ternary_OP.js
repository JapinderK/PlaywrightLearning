//  Nested Ternary

// Multiple Condition
let age = 20;

let will_vote = age > 18 ? "Yes" : "No";
console.log(will_vote);
// Ternary = condition ? "true resul" : "false result";

let gender = "Male";
let can_vote = age > 18 ? (gender== "Male" ? "Yes" : "No") : "No";
console.log(can_vote);

//----------------------------------------------
let temp = 35;
let condition = temp >= 40 ? "Too hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp > 10) ? "Cool" : "Cold";
console.log("Weather condition is ", condition);