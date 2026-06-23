// let p = new Promise(function (resolve, reject) {
//     resolve(42);
// })
// p.then(function (value) {
//     console.log("Answer:", value);
// })

// //Answer:42

// let p = new Promise(function (resolve, reject) {
//     reject("Something broke");
// });
// p.catch(function (err) {
//     console.log("Caught:", err);
// })

// //Caught:Something broke

// let p = Promise.resolve(5);
// p.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log("Result:", val);
// })
//Result:50

// Promise.resolve(1).then(function (val) {
//     console.log(val);
//     return val + 1;
// }).then(function (val) {
//     console.log(val);
//     return val + 1;
// }).then(function (val) {
//     console.log(val);
// })
// //1
// //2
// //3

// Promise.resolve("start").then(function (val) {
//     console.log(val);
//     throw new Error("Broke at step 2");
// }).then(function () {
//     console.log("This will NOT run");
// }).catch(function (err) {
//     console.log("Caught:", err.message);
// })

//Caught: Broke at step 2
let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.reject("Search: FAIL");
let t3 = Promise.resolve("Logout: PASS");

// Promise.all([t1, t2, t3]).then(function (result) {
//     console.log(result);
// })
//[ 'Login: PASS', 'Search: PASS', 'Logout: PASS' ]

Promise.all([t1, t2, t3]).then(function (r) { console.log("All:", r); }).catch(function (err) { console.log("Stopped:", err); });

//Stopped: Search: FAIL

Promise.allSettled([Promise.resolve("API 200"), Promise.reject("API 500"), Promise.resolve("API 201")]).then(function (result) {
    result.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + "-> " + val);
    })
})

// fulfilled-> API 200
// rejected -> API 500
// fulfilled-> API 201
