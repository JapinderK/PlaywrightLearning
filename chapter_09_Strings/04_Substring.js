//Slice - case sensitive
let str = "Login_Test_Pass_001";

console.log(str.slice(0, 5)); //login
console.log(str.slice(11)); //start index is 11

//to get the test number
console.log(str.slice(-3));


//substring(start,end) , takes no negative index

str.substring(6, 10);

console.log(str.at(0));