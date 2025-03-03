// Generic function identity<T>
function identity<T>(value: T): T {
    return value;
}

// Calling the function with different types
console.log(identity<string>("Hello, TypeScript!")); // String
console.log(identity<number>(42));                   // Number
console.log(identity<boolean>(true));                // Boolean
