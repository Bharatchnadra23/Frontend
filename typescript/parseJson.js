function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (error) {
        console.error("Error parsing JSON:", error.message);
        return null;
    }
}
// Example usage:
var validJson = "{\"name\": \"Alice\", \"age\": 25}";
var invalidJson = "{\"name\": \"Bob\", \"age\": 30,}"; // Invalid due to extra comma
console.log(parseJson(validJson)); // Output: { name: 'Alice', age: 25 }
console.log(parseJson(invalidJson)); // Output: Error message + null
