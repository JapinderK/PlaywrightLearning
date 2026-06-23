let apiCall = new Promise(function (resolve, reject) {
    reject("500 Error");
});
apiCall.then(function (data) {
    console.log("Success");
}).catch(function (error) {
    console.log(error);
})

//catch() only runs when the operation is rejected/failed.