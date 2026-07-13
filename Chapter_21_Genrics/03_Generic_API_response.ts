function wrapResponse<T>(statusCode:number, data:T):{statusCode:number; data:T}{
    return {
        statusCode:statusCode,
        data:data
    };
}
let userResp=wrapResponse(200,"admin");
const response1 = wrapResponse(200, {name:"John", age:30});
const response2 = wrapResponse(404, "Not Found");

console.log("User Response:", userResp);
console.log("Response 1:", response1);
console.log("Response 2:", response2);