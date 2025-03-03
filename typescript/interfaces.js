// Create Employee class implementing Person
var Employee = /** @class */ (function () {
    function Employee(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    // Method to get employee details
    Employee.prototype.getEmployeeDetails = function () {
        return "Employee Name: ".concat(this.name, ", Age: ").concat(this.age, ", Employee ID: ").concat(this.employeeId);
    };
    return Employee;
}());
// Create an Employee object
var emp = new Employee("John Doe", 30, 101);
// Print the employee details
console.log(emp.getEmployeeDetails());
