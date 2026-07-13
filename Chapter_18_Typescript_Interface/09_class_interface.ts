interface Executable{
    name:string;
    run():void;
    getstatus():string
}

class TestCase implements Executable{
    name:string
    constructor(name:string){
        this.name= name;
    }
    run():void{
        console.log("Run "+this.name);
    }
    getstatus(): string {
        return "Pass";
    }
}

let tc: Executable= new TestCase("Verify login redirect");
tc.run();
console.log(tc.getstatus());