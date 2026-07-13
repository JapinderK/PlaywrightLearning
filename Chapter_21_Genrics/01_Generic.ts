function getString(name:string):string{
    return "Typescript";
}

getString("Java");

//getString(123); //Not allowed in case of TS as we define type as string in function

function getResult<T>(result:T[]){
    return result[0]!;  //! means non null assertion operator. It tells the compiler: "This value is not null or undefined- stop warning me"
}


let firstTest= getResult<number>([200,300,400]);
let firstTC= getResult<string>(["Login","String","Cart"])

console.log(firstTest);
