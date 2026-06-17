let student1 = { name: "Anil", age: 65 };
let student2 = { name: "Japinder" };
let student3 = { name:"Japinder", age: 20, phone: 7814325092 };

let JSON_student = { "name": "Japinder", "age": 37, phone: 7814325092 };

let a = { status: "pass" };
console.log(a.status);

let b = a;
b.status = "Fail";
console.log(a.status);
console.log(b.status);
