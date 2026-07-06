class Counter {
    constructor() {
        this.count = 0;
    }


    increment() {
        this.count++;
        return this;
    }

    display() {
        console.log("Count:", this.count);
    }
}

new Counter().increment().increment().increment().display(); //Count: 3
