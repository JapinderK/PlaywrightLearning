interface APIResponse{
    readonly statusCode:number;
    body:string;
    headers?:string;
}

///readonly means the value can't be changed once assigned
let response:APIResponse={
    statusCode:200,
    body:'{"user":"admin"}'
};
console.log("Status ", response.statusCode);
console.log("body ",response.body);
console.log("Headers ",response.headers);

//response.statusCode=404; //not allowed