class BaseTest{
    setup() {
        console.log("Base Test")
    }
    tearDown() {
        console.log("Base : Tear down");
    }
}
class UITest extends BaseTest{
    setup() {
        super.setup();
        console.log("UI Test ");
    }
    tearDowsn() {
        console.log("UI: Tear down");
        super.tearDown();
    }
}
let test = new UITest();
test.setup();