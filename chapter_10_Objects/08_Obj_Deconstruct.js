const user = { name1: "John", age: 10, city: "NYC" }

//Basic Destructuring

// Destructuring is a JavaScript/TypeScript feature that lets you extract values from arrays or properties from objects and assign them to variables in a concise way.

// Instead of writing multiple assignments, you can "unpack" the values in a single statement.



//Rename variables
const { name1: username, age: userAge } = user;
console.log(username);
console.log(userAge);

//we can use just one value
const { age } = user;

//Default values
//add value in object if not exist
const { country = "USA" } = user;
console.log(country);

const data = {
    user: {
        name: "John", address: {
            city:"NYC"
        }
    }
};

//Object within object
    const{ user: { address: { city } } } = data;
console.log(data.user.address.city); 

// John
// 10
// USA
// NYC