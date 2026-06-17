const user = {
    name: "John",
    age: 30,
    email: "abc@gmail.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

//Dynamic property access
const key = "age";
console.log(user[key]);

// { name: 'John', age: 30, email: 'abc@gmail.com' }
// John
// 30
// 30