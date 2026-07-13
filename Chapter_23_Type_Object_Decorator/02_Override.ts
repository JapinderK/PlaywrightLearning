class BaseTest{
    setup():void{
        console.log("[BASE] Opening browser");
    }
    tearDown():void{
        console.log("[BASE] Closing browser");
    }
}

class LoginTest extends BaseTest{

    override setup():string{
        return "[LOGIN] Opening browser and navigating to login page";
    }
}

class APITest extends BaseTest{
    override setup():void{
        console.log("[API] Setting up API test environment");
    }
}
let obj1= new LoginTest();
console.log(obj1.setup());
obj1.tearDown();

let obj2= new APITest();
obj2.setup();
obj2.tearDown();