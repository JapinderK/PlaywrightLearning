function makeCounter(start = 0) {
    let count = start;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() { return count; }
    }
}

let counter = makeCounter(1);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
counter.decrement();
console.log(counter.get());
