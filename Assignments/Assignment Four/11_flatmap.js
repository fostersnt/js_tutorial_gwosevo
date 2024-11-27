/*
The .flatMap() method in JavaScript is an array method that first maps each element
 using a mapping function, and then flattens the result into a new array. It is a 
 combination of the .map() method followed by the .flat() method
*/

const users = [
    { name: 'Alice', hobbies: ['reading', 'hiking'] },
    { name: 'Bob', hobbies: ['cooking', 'gaming'] }
];

const hobbies = users.flatMap(user => user.hobbies);
console.log(hobbies); 