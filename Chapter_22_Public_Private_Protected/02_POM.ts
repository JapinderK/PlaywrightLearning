class BasePage{
    protected baseURL:string;
    constructor(url:string){
        this.baseURL = url;
    }

    protected navigateTo(endpoint:string):void{
        console.log("Navigating to: "+this.baseURL + endpoint);
    }
}

class LoginPage extends BasePage{
    constructor(url:string){
        super(url);
    }
    login(user:string):void{
        this.navigateTo("/login");
        console.log("Typing "+user+" into username field");
        console.log("Clicking login button");
    }
}

let page = new LoginPage("https://example.com");
page.login("admin");