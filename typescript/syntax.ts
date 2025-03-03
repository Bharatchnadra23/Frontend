// Define variables
let age: number = 30;
let isActive: boolean = true;

// Function to return user info
function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is ${isActive ? "active" : "inactive"}.`;
}

// Print the result
console.log(getUserInfo(age, isActive));
