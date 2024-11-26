/*
this function is similar to the .ruduce() but it reduces from right to left. 
And if any calculations will be done it will be from the right to left
*/
const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduceRight((accumulator, currentValue) => {
    return accumulator + currentValue; 
}, '');

console.log(result); 