// The .sort() function sorts the elements of an array in place.
// By default, it sorts elements as strings. A comparison function can be provided for numerical or custom sorting.

// Example:
const numbers = [5, 3, 8, 1];
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 3, 5, 8]