/*
the .filter() is a function that creates an array from a previous array but with all elements
 that meet a certain criterea. Below is an example
*/
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 20 }
];

const olderUsers = users.filter(user => user.age > 25);
console.log(olderUsers); 
