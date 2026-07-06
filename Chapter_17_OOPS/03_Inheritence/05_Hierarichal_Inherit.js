class TestCase{
    execute() {
        console.log("Parent test case");
    }
}

class UnitTest extends TestCase{
    execute() {
        console.log("Child 1 Test case");
    }
}

class APITest extends TestCase{
    execute() {
        console.log("Child 2 Test case");
    }
}
let tests = [new UnitTest, new APITest]; // we can create objects using arrays

tests.forEach(function (test) {
    test.execute();
})

// Child 1 Test case
// Child 2 Test case