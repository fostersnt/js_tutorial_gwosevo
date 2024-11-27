// The .copyWithin() function copies part of an array to another location in the same array.
// It modifies the original array.

// Example:
const numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3);

console.log(numbers); // Output: [4, 5, 3, 4, 5]