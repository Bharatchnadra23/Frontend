// Define variables
var age = 30;
var isActive = true;
// Function to return user info
function getUserInfo(age, isActive) {
    return "User is ".concat(age, " years old and is ").concat(isActive ? "active" : "inactive", ".");
}
// Print the result
console.log(getUserInfo(age, isActive));
