class Animal{
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    } 
    
    eat() {
        console.log(this.name + " is eating");
    }
    sleep()
    {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal{
    constructor(name, breed) {
        super(name); //it is used to refer to the parent constructor
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " is barking");
    }
}

let dog = new Dog("Rox", "Labra");
dog.sleep();
dog.eat();
dog.bark();

console.log(dog.breed);
console.log(dog.name);