// Function that accepts a union type (string | number)
function printDetails(value) {
    console.log("Type: ".concat(typeof value, ", Value: ").concat(value));
}
// Calling the function with different types
printDetails("Hello, TypeScript!"); // String
printDetails(42); // Number
