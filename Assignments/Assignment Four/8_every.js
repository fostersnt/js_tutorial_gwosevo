/*
The .every() method in JavaScript is an array method that tests whether all elements
 in an array pass the test implemented by a provided function. It returns a boolean value: true if all 
 elements pass the test, and false otherwise.
*/

const scores = [85, 90, 78, 92];


const allAbove75 = scores.every(score => score > 75);
console.log(allAbove75); 