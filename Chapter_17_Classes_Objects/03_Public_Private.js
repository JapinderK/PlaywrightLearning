// There is no Protected in js
//Private variables are created using #
class Credentials{
    #apiKey;
    user;

    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;
    }

    authHeader() {
        return "Bearer " + this.#apiKey;
    }

}

var cred = new Credentials("Japinder", "Secret@123");

console.log(cred.user);
console.log(cred.apiKey);  //Undefined

console.log(cred.#apiKey); //Error
//SyntaxError: Private field '#apiKey' must be declared in an enclosing class

const token = cred.authHeader();
console.log(token); //This will print api key