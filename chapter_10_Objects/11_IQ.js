const obj = { a: 1, b: 2, c: 3 };

console.log((Object.keys(obj)));
console.log(Object.values(obj)); //[ 1, 2, 3 ]
console.log((Object.entries(obj))); //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const user={name:"John", age:20}

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
} //name: John, age:20

Object.keys(user).forEach(key => {
    console.log(key);
})