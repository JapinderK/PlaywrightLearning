class BaseTest{
    setup() {
        console.log("Base Test");
    }
}

class APIPage extends BaseTest{
    setup() {    //overriding
        console.log("APITest: open Browser");
    }
}

let test = new APIPage();
test.setup();