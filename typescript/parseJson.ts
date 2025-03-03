function parseJson(jsonString: string): any | null {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error.message);
        return null;
    }
}

// Example usage:
const validJson = `{"name": "Alice", "age": 25}`;
const invalidJson = `{"name": "Bob", "age": 30,}`; // Invalid due to extra comma

console.log(parseJson(validJson));   // Output: { name: 'Alice', age: 25 }
console.log(parseJson(invalidJson)); // Output: Error message + null
