/*this is a simple example of how the .map() function works
this function creates a new array by adding a specified fuction to each element of the previous array
*/
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); 