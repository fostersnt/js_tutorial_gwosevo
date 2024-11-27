// Description:
// The .flatMap() function first maps each array element using a provided function, then flattens the result by one level.

// Example:
const numbers = [1, 2, 3];
const result = numbers.flatMap((num) => [num, num * 2]);

console.log(result); // Output: [1, 2, 2, 4, 3, 6]