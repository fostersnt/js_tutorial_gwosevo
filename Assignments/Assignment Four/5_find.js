/*
The .find() method in JavaScript is an array method that returns the first element 
in an array that satisfies a provided testing function. Simply put you can use it to find elements in an array
*/

const products = [
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Phone', price: 800 },
    { id: 103, name: 'Tablet', price: 600 }
];

const product = products.find(product => product.id === 102);
console.log(product); 