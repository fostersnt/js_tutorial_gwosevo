/*
The .splice() method in JavaScript is a powerful array method that can be used 
to add, remove, or replace elements in an array
*/
const fruits = ['apple', 'banana', 'cherry', 'date'];

const removed = fruits.splice(1, 2);
console.log(fruits); // Output: ['apple', 'date']
console.log(removed); // Output: ['banana', 'cherry']
//the above removes the send and third fruits in an array.


const numbers = [1, 2, 3];
numbers.splice(1, 0, 4, 5);
console.log(numbers); 
//this also adds the value 0 to the array

const colors = ['red', 'green', 'blue'];
const replaced = colors.splice(1, 1, 'yellow');
console.log(colors); 
// this also replaces replaces the second item which is green to yellow
