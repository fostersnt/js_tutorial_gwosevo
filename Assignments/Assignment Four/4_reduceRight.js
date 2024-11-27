// The .reduceRight() function works like .reduce(), but it processes the array from right to left.

// Example:
const words = ["world", " ", "hello"];
const sentence = words.reduceRight((acc, word) => acc + word, "");

console.log(sentence); // Output: "hello world"