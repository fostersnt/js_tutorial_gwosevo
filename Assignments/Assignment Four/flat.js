// The .flat() function creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// Example:
const nestedArray = [1, [2, [3, 4]], 5];
const flattenedArray = nestedArray.flat(2);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]