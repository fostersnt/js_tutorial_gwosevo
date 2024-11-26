/*
The .findIndex() method in JavaScript is an array method that returns 
the index of the first element in an array that satisfies a provided testing function
*/
const products = [
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Phone', price: 800 },
    { id: 103, name: 'Tablet', price: 600 }
];

const productIndex = products.findIndex(product => product.id === 102);
console.log(productIndex); 
