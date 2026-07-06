class person{
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    display() {
        console.log("My name is", this.name,"and age is", this.age," and city is",this.city);
    }
}

const obj1 = new person("Japinder", 20, "Jalandhar");
obj1.display();

//constructor is automatically created when an object is created
//js can only have one constructor per class
//const obj1 = new person("Japinder", 20, "Jalandhar");  -> In this obj1 is a reference and new person is an object