/*
The .slice() method in JavaScript is an array method that returns a shallow copy
 of a portion of an array into a new array object. It does not modify the original
  array and can be used to extract elements based on specified index values.
*/


const fruits = ['apple', 'banana', 'cherry', 'date'];

const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); 