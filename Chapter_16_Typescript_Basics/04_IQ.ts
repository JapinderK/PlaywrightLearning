let responseCode:number[]=[200,201,400,500,302,403]

function getFailedCodes(codes:number[]):number[]{
return codes.filter(function(code:number):boolean{
    return code>=400
})
}

console.log("All Codes", responseCode);
console.log("Failed codes",getFailedCodes(responseCode));