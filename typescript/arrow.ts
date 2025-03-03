// Arrow function to calculate sum of an array
const sum = (numbers: number[]): number => numbers.reduce((acc, num) => acc + num, 0);

// Calling the function with an example array
console.log(sum([1, 2, 3, 4, 5])); // Output: 15
console.log(sum([10, 20, 30]));    // Output: 60
