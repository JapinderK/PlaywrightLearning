interface APIResponse{
    body:string;
    headers?:object;   //optional param using ?
    responseTime?:number;
}

let response:APIResponse={
body:'Hi',

}

let response2:APIResponse={
body:'Hi',
headers:{},
responseTime:400

}

//interface cannot have a constructor, but can have methods. It is a contract for the class to implement the methods defined in the interface.