let str = " Hello, World! ";
console.log(str.toUpperCase());

console.log(str.toLowerCase());
//trim
console.log(str.trim());

console.log(str.trimStart());
console.log(str.trimEnd());

//replace
let msg = "Test: FAIL, Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS"));

console.log(msg.replaceAll("FAIL", "PASS"));

console.log(msg.replace(/FAIL/, "Pass"));

//Concatenation
console.log("Hello" + " " + "World");

console.log("Hello".concat(" ", "World"));

console.log(`${"Hello"} ${"World"}`);


//replace
let url = "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/, "qa"));

//split -> creates an array out of a string

let r = "pass,fail,skip".split(",");
console.log(r);

//join

let result = "test_login_pass".split("_").join(" ");

console.log(result); //test login pass

let parts = ["2024", "03", "01"];
let date = parts.join("-");
console.log(date);