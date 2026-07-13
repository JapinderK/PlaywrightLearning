abstract class BaseTest{
    protected testName:string;
    constructor(name:string){
        this.testName = name;
    }
    abstract setup():void;
    abstract execute():void;
}

class UITest extends BaseTest{
    setup():void{
        console.log("Setting up UI Test: "+this.testName);
    }
    execute():void{
        console.log("Executing UI Test: "+this.testName);
    }
}


//abstract classs is a class that cannot be instantiated directly. It is meant to be extended by other classes. 
// In this example, BaseTest is an abstract class that defines the structure for test classes. 
// The UITest class extends BaseTest and provides concrete implementations for the abstract methods setup() and execute().

//abstract can be used for classes
//in