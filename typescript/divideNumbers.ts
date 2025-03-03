function divideNumbers(numerator: number, denominator: number): number {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}

// Example usage with error handling
try {
    console.log(divideNumbers(10, 2)); // Output: 5
    console.log(divideNumbers(15, 0)); // This will throw an error
} catch (error) {
    console.error(error.message);
}
