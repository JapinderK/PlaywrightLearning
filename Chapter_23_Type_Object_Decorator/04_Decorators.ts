function Log(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey}...`);

        const result = originalMethod.apply(this, args);

        console.log(`${propertyKey} finished.`);

        return result;
    };
}

class Calculator {
    @Log
    add(a: number, b: number) {
        return a + b;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3));