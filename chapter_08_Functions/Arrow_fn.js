function student(name, age)
{
    return `Student name is ${name} and age is ${age}`;
}
console.log(student("Alice", 26));

const student1 = (name) => `Student name is ${name}`;
console.log(student1("Alice"));


const double = n => n * 2;
console.log(double(10));


const printIt = n => console.log(n);
printIt("ALice");
