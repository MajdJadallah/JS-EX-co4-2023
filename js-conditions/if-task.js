// Example 1
const age = 27;
if (age > 18) {
  console.log("You are an adult");
}

// Example 2
const score = 45;
if (score <= 50) {
  console.log("You failed the test");
}

// Example 3
const name = "John";
if (name === "John") {
  console.log(`Hello, ${name}`);
}

// Example 4
const day = "Monday";
if (day !== "Saturday" && day !== "Sunday") {
  console.log("It's a weekday");
}

// Example 5
const num = 4;
if (num % 2 === 0) {
  console.log("The number is even");
}

// Example 6
const char = 'a';
if (/[a-zA-Z]/.test(char)) {
  console.log("It's a letter");
}
// Example 7
const list = [1, 2, 3];
if (Array.isArray(list)) {
  console.log("It's an array");
}

// Example 8
const x = 5;
if (x > 0) {
  console.log("x is a positive number");
}

// Example 9
const y = -5;
if (y < 0) {
  console.log("y is a negative number");
}

// Example 10
const z = 9;
if (z % 3 === 0) {
  console.log("z is a multiple of 3");
}

// Example 11
const gpa = 3.5;
if (gpa >= 3.0) {
  console.log("Congratulations, you have a good GPA!");
}

// Example 12
const password = "mypassword123";
if (password.length >= 8) {
  console.log("Your password is strong");
}

// Example 13
const age2 = 30;
if (age2 >= 18 && age2 <= 65) {
  console.log("You are of working age");
}

// Example 14
const color = "red";
if (color === "red" || color === "green" || color === "blue") {
  console.log("color is a primary color");
}

// Example 15
function isNumber(input) {
  return !isNaN(input);
}

console.log(isNumber(5)); // true
console.log(isNumber("hello")); // false

