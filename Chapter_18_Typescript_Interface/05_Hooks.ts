interface TestHook{
(testName:string):void;
}

let beforeEachHook: TestHook= function(testName:string):void{
    console.log("Before Setting up ", testName)
}
 interface TestCase{
    id:number,
    name:string,
    status:string,
 }

 let test1:TestCase={
    id:1,
    name:"Login test",
    status:"Pass"
 }
 console.log("TC-"+test1.id+" "+test1.name+" "+test1.status)

let afterEachHook: TestHook= function(testName:string):void{
    console.log("After tearing down ",testName)
}

beforeEachHook("Login Test")
afterEachHook("Login Test")