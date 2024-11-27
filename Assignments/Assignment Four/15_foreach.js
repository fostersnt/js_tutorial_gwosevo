/*
The .forEach() method in JavaScript is an array method that executes 
a provided function once for each array element. 
*/

const numbers = [10, 20, 30];

numbers.forEach((number, index) => {
    console.log(`Index ${index}: ${number}`);
});
