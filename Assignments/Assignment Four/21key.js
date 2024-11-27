/*
The .keys() method in JavaScript is used with arrays and returns
 a new Array Iterator object that contains the keys of each element in the original array. 
*/

const numbers = [10, 20, 30];

for (const key of numbers.keys()) {
    console.log(key); 
}