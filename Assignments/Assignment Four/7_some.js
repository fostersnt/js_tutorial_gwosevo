/*
The .some() method in JavaScript is an array method that tests whether at least one element 
in the array passes the test implemented by a provided function.
*/

const fruits = ['apple', 'banana', 'cherry', 'date'];

const hasFruitStartingWithB = fruits.some(fruit => fruit.startsWith('b'));
console.log(hasFruitStartingWithB); 