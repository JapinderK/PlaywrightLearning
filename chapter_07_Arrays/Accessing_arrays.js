let status = ["pass", "fail", "skip"];  // indexes are 0,1,2 and from end its > -1,-2,-3

console.log(status[2]);

console.log(status.at(-1));   //accessing array elements from end

//Modify array
status[1] = "blocked";
console.log(status[1]);