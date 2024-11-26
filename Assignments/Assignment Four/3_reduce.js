/*
the .reduce() fuction is normally used to summrize or sum up 
*/
const sales = [
    { product: 'Laptop', amount: 1200 },
    { product: 'Phone', amount: 800 },
    { product: 'Tablet', amount: 600 },
    { product: 'Monitor', amount: 300 }
];

// Using .reduce() to calculate total sales amount
const totalSales = sales.reduce((accumulator, currentSale) => {
    return accumulator + currentSale.amount;
}, 0);

console.log(`Total Sales Amount: $${totalSales}`); // Output: Total Sales Amount: $2900