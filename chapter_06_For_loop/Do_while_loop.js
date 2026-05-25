//Always execute atleast one time
// used to find a locator 
let retry = 0;

do {
    console.log("Execute code!");
    console.log("Retrying ......", retry);
    retry++;
} while (retry < 3);