

// 1. Write a loop to print numbers from 1 to 10
console.log("1️⃣ Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("\n");



// 2. Function that takes an array of numbers and returns the sum
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("2️⃣ Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));

console.log("\n");



// 3. Function to find the largest number in an array
function findLargest(arr) {
  return Math.max(...arr);
}
console.log("3️⃣ Largest number in [10, 20, 5, 40]:", findLargest([10, 20, 5, 40]));

console.log("\n");



// 4. Function that checks if a number is even or odd
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log("4️⃣ 7 is:", checkEvenOdd(7));
console.log("   12 is:", checkEvenOdd(12));

console.log("\n");



// 5. Function that reverses a given string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("5️⃣ Reversed of 'Hello' is:", reverseString("Hello"));

console.log("\n");



// 6. Merge two arrays using the spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log("6️⃣ Merged array:", merged);

console.log("\n");



// 7. Use ES6 filter to return even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("7️⃣ Even numbers:", evenNumbers);

console.log("\n");



// 8. Rewrite using template literals
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log("8️⃣ Template Literal:", msg);

console.log("\n");



// 9. Rewrite this function using an arrow function
const greet = (name) => `Hello, ${name}`;
console.log("9️⃣ Arrow Function:", greet("Bob"));

