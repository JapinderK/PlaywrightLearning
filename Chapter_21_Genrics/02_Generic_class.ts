class TestDataStorage<T>{
    private items:T[]=[];

    add(item:T):void{
        this.items.push(item);
    }

    getFirst():T{
        return this.items[0]!;
    }
    count():number{
        return this.items.length;
    }

    getAll():T[]{
        return this.items;
    }
}

let statusCode= new TestDataStorage<number>
let testName = new TestDataStorage<string>;

testName.add("Login Test");
testName.add("API Test");


statusCode.add(200);
statusCode.add(400);

console.log("First Codes:", statusCode.getFirst());
console.log("Count codes:", statusCode.count());

console.log("Test Names:", testName.getAll());

