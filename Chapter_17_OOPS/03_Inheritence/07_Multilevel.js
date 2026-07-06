class BasePage{
    open() {
        console.log("Open browser");
    }
}

class AUthPage extends BasePage{
    login(user) {
        console.log("Login" + user);
    }
}

class AdminPage extends AuthPage{
    constructor() {
        super("Admin Panel");
    }

    manageUsers() {
        console.log("Admin managing users");
    }
}