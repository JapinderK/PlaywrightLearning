interface BasePage{
    url: string;
    title:string;
    openVWO(url:string):void;
}

interface LoginPage extends BasePage{
    usernameSelector:string;
    passwordSelector:string;
    loginButtonSelector:string;
}

let loginPage:LoginPage={
    url:"/login",
    title:"Login page",
    openVWO:(url:string)=>{
        console.log(`Opening ${url}`);
    },
    usernameSelector:"#username",
    passwordSelector:"password",
    loginButtonSelector:"#login-btn"
}

console.log("URL:",loginPage.url);
console.log("Title ",loginPage.title)
console.log("username field: ",loginPage.usernameSelector)
console.log(loginPage.openVWO("/login"))