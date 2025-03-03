// Function that accepts a union type (string | number)
function printDetails(value: string | number): void {
    console.log(`Type: ${typeof value}, Value: ${value}`);
}

// Calling the function with different types
printDetails("Hello, TypeScript!"); // String
printDetails(42);                   // Number
