// The .some() function checks if at least one element in the array satisfies a specified condition.
// It returns true if any element satisfies the condition, otherwise false.

// Example:
const numbers = [3, 5, 8, 10];
const hasEven = numbers.some((num) => num % 2 === 0);

console.log(hasEven); // Output: true