// Define the Person interface
interface Person {
    name: string;
    age: number;
}

// Create Employee class implementing Person
class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    // Method to get employee details
    getEmployeeDetails(): string {
        return `Employee Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    }
}

// Create an Employee object
const emp = new Employee("John Doe", 30, 101);

// Print the employee details
console.log(emp.getEmployeeDetails());
