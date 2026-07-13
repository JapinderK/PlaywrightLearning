function Logger(constructor: Function) {
    console.log(`${constructor.name} class has been created.`);
}

@Logger
class Person {
    constructor(public name: string) {}
}

const person = new Person("Alice");