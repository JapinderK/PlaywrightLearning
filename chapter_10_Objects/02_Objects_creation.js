let c = { status: "pass" };
let d = { status: "pass" };

console.log(c);
console.log(d); 

//c and d are different as their reference is differnt although values are same 
if (c === d) {
    return true;
} else {
    return false;
} //false