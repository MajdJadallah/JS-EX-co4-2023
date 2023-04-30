let cash = 1000;
let currentLiabilities = 500;
let cashFlowRatio = cash / currentLiabilities;

console.log(cashFlowRatio);

let revenues =1000;
let expenses =500;
let netincome = revenues - expenses;
console.log(netincome);

// Total Assets = Liabilities + Equity
let Liabilities =1000 ;
let Equity = 500 ;
let TotalAssets = Liabilities +Equity;
console.log(TotalAssets);
// Net income (using profit margin and sales)

// Formula: Net Income = Profit Margin x Sales
let profitMargin = 1000;
let sales = 500;
let netincome2 = profitMargin * sales ;
console.log(netincome2);
// Average

// Formula: Average = (Number1 + Number2 + ... + NumberN) / N
let numbers = [7 , 9 , 2];
let sum = 7 + 9 + 2 ;
let average = sum /3 ;
console.log(average);

let price = 150;
let discount = 30;
let discountedPrice = price - (discount / 100) * price;

console.log(discountedPrice);

let age = 20;
let isAgeWithinLimit = age > 18 && age < 30;
console.log(isAgeWithinLimit);

// Exponential

// Formula: Exponential = Number1 ^ Number2
let number1 = 2;
let number2 = 3;
let exponential = Math.pow(number1, number2);

console.log(exponential);

// Remainder

// Formula: Remainder = Number1 % Number2
let no1 = 10;
let no2 = 4;
let remainder = no1 % no2;
console.log(remainder);










let num = 100;
console.log(typeof(num));

let floatNum = 73.9;

console.log(typeof(floatNum));

let notANumber = NaN;
console.log(typeof(notANumber));

let str = "Water";
console.log(typeof(str));

let bool = false;
console.log(typeof(bool));

console.log(typeof(9 != 11));

let fruit = "Orang" + "e";
console.log(fruit);

let result = "Orange" - "s";
console.log(result);

let numStr = "4" + "8";
console.log(numStr);

let resultNum = "4" - "8";
console.log(resultNum);

let strNum = "name" + 3;
console.log(strNum);

let strMinusNum = "name" - 3;
console.log(strMinusNum);

let multResult = 82 * "word";
console.log(multResult);

let strAddNum = 1 + "hello";
console.log(strAddNum);

let strNumAdd = "hello" + 1;
console.log(strNumAdd);

let numBool = 1 + true;
console.log(numBool);

let strBool = "hello" + true;
console.log(strBool);

console.log(typeof(Infinity));

console.log(1 == '1');

console.log(1 === '1');






let majd = "Welcome to Orange";

// Output: WELCOME TO ORANGE
console.log(majd.toUpperCase());

// Output: TO
console.log(majd.substring(8, 10));

// Output: Hello from Orange
console.log("Hello from " + majd.slice(11));

// Output: welcome to orange
console.log(majd.toLowerCase());

// Output: 17
console.log(majd.length);

// Output: Welcome to "Orange"
console.log('Welcome to "' + majd.slice(11) + '"');

// Output: Welcome to Orange Jordan
console.log(majd + " Jordan");



let input = "cactus";
let firstLetter = input[0];
let regex = new RegExp(firstLetter, "g");
let output = input.replace(regex, "*");
console.log(output);
