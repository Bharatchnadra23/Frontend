// Create Car class implementing Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement startEngine method
    Car.prototype.startEngine = function () {
        return "The engine of the ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is now running.");
    };
    return Car;
}());
// Create a Car object
var myCar = new Car("Honda", "Civic", 2023);
// Print the engine start message
console.log(myCar.startEngine());
