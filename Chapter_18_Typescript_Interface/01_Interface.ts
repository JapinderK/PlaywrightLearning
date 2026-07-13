interface TestCase{
    id:number;
    name:string;
    status:string;
    duration:number;
}
let test1:TestCase={
    id:1,
    name:"Login test",
    status: "Pass",
    duration:1500
}

let test2:TestCase={
    id:1,
    name:"API test",
    status: "Failed",
    duration:1500
}

console.log("TC"+test2.id+test2.name+test2.status+test2.duration)