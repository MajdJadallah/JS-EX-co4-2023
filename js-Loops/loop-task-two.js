//1. Write a script to print out all even numbers between 1 and 50.
//Use 1 for loop.{
console.log("1. Write a script to print out all even numbers between 1 and 50.for loop");
for (let i=0;i<=50;i++){
if(i%2==0){
console.log(i);
}
}
//use 2 while loop
console.log("1. Write a script to print out all even numbers between 1 and 50.while loop");
let i=0
while(i<=50){
    if(i%2===0){
    console.log(i);
    }
    i++;
}
//2. Try solving the previous exercise using a single for loop.
console.log("2.Try solving the previous exercise using a single for loop.")
for(let i=0;i<=50;i+=2){
console.log(i);
}
//3. Resolve Exercise 1 so that one loop prints out even numbers and the second prints out the odd
console.log("3. Resolve Exercise 1 so that one loop prints out even numbers and the second prints out the odd");
for (let i=0;i<=50;i++){
    if(i%2==0){
    console.log(`This number is even:  ${i}`);
    }
    else{
        console.log(`This number is odd:  ${i}`);  
    }
    }
//4. Fizz-Buzz! Write a script that does the following
/*● Counts from 1 to 100 and prints out something for each number:
○ If the number is divisible by 3, print "Fizz"
○ If the number is divisible by 5, print "Buzz"
○ If the number is divisible by both 3 and 5, print "FizzBuzz"
○ If the number does not meet any of the above conditions, just print the number*/
console.log("4. Fizz-Buzz! Write a script that does the following");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  

  //5. Rewrite the script with a function so that each iteration will trigger a function call.
  console.log("5. Rewrite the script with a function so that each iteration will trigger a function call.");
  console.log("Rewrite the script with a function so that each iteration will trigger a function call.");
  function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
for (let i = 1; i <= 100; i++){
    fizzBuzz(i);
}
//6. Create a recursive solution. A FizzBuzz function calls itself to continue the series.
console.log("6. Create a recursive solution. A FizzBuzz function calls itself to continue the series");
function fizzBuzzRecursive(num) {
    if (num <= 0) {
      return;
    }
    
    fizzBuzzRecursive(num - 1);
    
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
    fizzBuzzRecursive(100);
  
//7. Write a function that takes a number and converts it to certain banknotes.
console.log("7.Write a function that takes a number and converts it to certain banknotes.");
function convertToBanknotes(num, denominations) {
    let result = [];
    for (let i = 0; i < denominations.length; i++) {
      let note = denominations[i];
      while (num >= note) {
        result.push(note);
        num -= note;
      }
    }
    return result.join(', ');
  }
  console.log(convertToBanknotes(57, [25, 10, 5, 1]));
console.log(convertToBanknotes(123, [100, 50, 20, 10, 5, 1]));

  
  //8. Write a function that counts the existence of a specific character within a string, despite the case.
  console.log("8. Write a function that counts the existence of a specific character within a string, despite the case.");
  function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i).toLowerCase() === char.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
  console.log(countChar("Coding Academy by Orange", "o"));
  
//Write for loops that accomplish the following tasks:
/*
Orange
Restricte
d
a. Print the numbers 0 - 20, one number per line.
b. Print only the ODD values from 3 - 29, one number per line.
c. Print the EVEN numbers 12 down to -14 in descending order, one number per line.
d. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of
3.*/
console.log("9.Write for loops that accomplish the following tasks:");
console.log("a. Print the numbers 0 - 20, one number per line.");
for (let i = 0; i <= 20; i++) {
    console.log(i);
  }

  console.log("b. Print only the ODD values from 3 - 29, one number per line.");
  for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
console.log("c. Print the EVEN numbers 12 down to -14 in descending order, one number per line.");  
for (let i = 12; i >= -14; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  console.log("d. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.");
  for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
/*10. Initialize two variables to hold the string 'CodingAcademy' and the
array [7, 500, 'KH404', 'black', 36], then construct for loops to accomplish the following tasks:
e. Print each element of the array to a new line.
f. Print each string character in reverse order to a new line.*/
console.log(`10. Initialize two variables to hold the string 'CodingAcademy' and the
array [7, 500, 'KH404', 'black', 36], then construct for loops to accomplish the following tasks:`);  
console.log("e. Print each element of the array to a new line.");
const str = 'CodingAcademy';
const arr = [7, 500, 'KH404', 'black', 36];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("Task f: Print each string character in reverse order to a new line");
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
/*11. Construct a for loop that sorts the array [7, 23, 18, 9, -13, 38, -10, 12, 0, 124] into two new arrays:
Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
In the loop, determine if each number is even or odd, then put that number into evens or odds, as
appropriate.}*/
console.log("11. Construct a for loop that sorts the array [7, 23, 18, 9, -13, 38, -10, 12, 0, 124] into two new arrays:");
const numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  } else {
    odds.push(numbers[i]);
  }
}

console.log("Original Array: ", numbers);
console.log("Even Numbers: ", evens);
console.log("Odd Numbers: ", odds);
/*12. Write the code to create meals using elements from these arrays, ensuring the rules below.
Protein options:
['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']
Grain options:
['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
Vegetable options:
['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']
Beverage options:
['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']
Dessert options
['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']
• The number of meals is determined as an input.
• The meals must include one item from each category.
• No two meals should be identical.
*/


const proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
const grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
const vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
const beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
const desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

function generateMeal(numMeals) {
  const meals = [];
  
  for (let i = 0; i < numMeals; i++) {
    let meal = [];
    let protein = proteins[Math.floor(Math.random() * proteins.length)];
    let grain = grains[Math.floor(Math.random() * grains.length)];
    let vegetable = vegetables[Math.floor(Math.random() * vegetables.length)];
    let beverage = beverages[Math.floor(Math.random() * beverages.length)];
    let dessert = desserts[Math.floor(Math.random() * desserts.length)];
    
    meal.push(protein, grain, vegetable, beverage, dessert);
    meals.push(meal);
  }
  
  // remove duplicate meals
  const uniqueMeals = [];
  meals.forEach(meal => {
    if (!uniqueMeals.some(m => m.join() === meal.join())) {
      uniqueMeals.push(meal);
    }
  });
  
  return uniqueMeals;
}

// example usage
const myMeals = generateMeal(5);
console.log(myMeals);
