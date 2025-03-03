// Define the Color enum
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
// Function to get color name
function getColorName(color) {
    return "The selected color is ".concat(color, ".");
}
// Calling the function with different enum values
console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));
