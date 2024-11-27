// Description:
// The .reduce() function applies a function to an accumulator and each array element to reduce the array to a single value.
// Example use case: Summing up numbers.

// Example:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15