class Car{
    #engine;
    constructor(name, engineName) {
        this.name = name;
        this.#engine= engineName;
    }
    getEngine() {
        return this.#engine;
    }
    setEngine(nameEngine) {
        this.#engine=nameEngine;
    }
}

const car = new Car("Tesla", "v8");
console.log(car.getEngine());  

car.setEngine("v9");
console.log(car.getEngine());
