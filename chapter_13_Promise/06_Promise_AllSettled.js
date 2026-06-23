Promise.allSettled([Promise.resolve("Test A Passed"), Promise.reject("Test B failed"), Promise.resolve("Test C Passes")]).then(function (result) {
    result.forEach(function (r, i) {
    console.log("Test "+(i+1)+":",r.status,"-",r.value || r.reason)
    })
})

//This is like a test report -
//you want results for All tests, not just stop at the first failure