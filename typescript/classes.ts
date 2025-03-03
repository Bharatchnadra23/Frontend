// Define the Vehicle interface
interface Vehicle {
    startEngine(): string;
}

// Create Car class implementing Vehicle interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Implement startEngine method
    startEngine(): string {
        return `The engine of the ${this.year} ${this.make} ${this.model} is now running.`;
    }
}

// Create a Car object
const myCar = new Car("Honda", "Civic", 2023);

// Print the engine start message
console.log(myCar.startEngine());
