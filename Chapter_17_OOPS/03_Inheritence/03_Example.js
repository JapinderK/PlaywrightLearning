class BaseTest{
    setup() {
        console.log("Base:Open Browser");
    }
}

class APITest extends BaseTest{
    setup() {
        console.log("API Test : Open browser");
    }
} 

let test = new APITest(); //

test.setup(); //API Test setup will be called as APITest object is created. So whoever object is created, methods will be called of that class.
//O/p - API Test : Open browser
