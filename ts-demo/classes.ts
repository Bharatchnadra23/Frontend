class Car {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving!`);
    }
}

let myCar = new Car("Tesla", "Model S");
myCar.drive(); 
