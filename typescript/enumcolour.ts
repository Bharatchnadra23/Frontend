// Define the Color enum
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

// Function to get color name
function getColorName(color: Color): string {
    return `The selected color is ${color}.`;
}

// Calling the function with different enum values
console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));
