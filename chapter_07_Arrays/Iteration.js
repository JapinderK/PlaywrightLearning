let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++)
{
    console.log(tests[i]);
}

console.log("-----------------------------------------------------");


//for...of...
for (test of tests) {
    console.log(test);   
}

console.log("-----------------------------------------------------");

//for...forEach-- array with index printing
tests.forEach((test, index) => {
    console.log(test, "|", index);
})

console.log("-----------------------------------------------------");

for (let i in tests)
{
    console.log(i, "->", tests[i]);
}

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}