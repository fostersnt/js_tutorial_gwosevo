/*The .copyWithin() method in JavaScript is an array method that 
shallow copies part of an array to another location in the same array, without modifying its length.
*/
const array = [10, 20, 30, 40, 50];

array.copyWithin(0, 1, 3);
console.log(array); 