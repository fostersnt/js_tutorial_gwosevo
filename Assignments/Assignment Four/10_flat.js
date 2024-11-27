/*
The .flat() method in JavaScript is an array method that creates a new array
 with all sub-array elements concatenated into it recursively up to the specified depth.
*/

const nestedArray = [1, 2, [3, 4], 5];

const flattened = nestedArray.flat();
console.log(flattened); 