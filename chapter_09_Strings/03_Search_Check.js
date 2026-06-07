let url = "https://staging.vwo.com/api/login?retry=true";

//includes
console.log(url.includes("staging")); //true

console.log(url.includes("production")); //false

//startsWith //endsWith

console.log(url.startsWith("https")); //true
console.log(url.startsWith("http")); //false

console.log(url.endsWith("true")); //true

//indexOf /lastIndexOf

console.log((url.indexOf("a")));
console.log((url.lastIndexOf("a")));

console.log(url.indexOf("nothere")); //-1 -> Not found
console.log(url.indexOf("x"));

//search
console.log(url.search(/login/)); //28 -> from which index the l is present
console.log(url.search(/vwo/)); 