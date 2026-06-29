function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 OK")
        }, 2000);
        })
    };


async function seq() {
    console.log("Starting the Test");
    let start = Date.now();
    let r1 = await apiCall("Login");
    
    let r2 = await apiCall("Dashboard");
    console.log(r2);
    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time: ~" + (Date.now() - start) + "ms");
}

seq();