console.log(null >= 0);
console.log(null === "0");
console.log(null == "0")
console.log(null === 0);
console.log(null == 0);

console.log(0 >= null);
console.log("0" == null);
console.log("0" === null);
console.log(0 == null);
console.log(0 === null);


///nullish ???
let a = null;
let assigned_value = a ?? 10;
console.log("Assigned value to a using nullish operator is: ",assigned_value);
