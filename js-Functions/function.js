//1.Create a function that will display the smallest value in the array.
//[30, 45, 60, 7]
function smallestNumber(smallestArray){
    let smallNo=smallestArray[0];
    for (let i=0 ; i<smallestArray.length ; i++ ){
        if(smallestArray[i]<smallNo){
        smallNo=smallestArray[i]
}
    }
    console.log(smallNo);
}
let smallNumberArr=[30, 45, 60, 27]
let smallNumberArr2=[15, 40, 36, 17]
let smallNumberArr3=[23, 15, 16, 3]
smallestNumber(smallNumberArr)
smallestNumber(smallNumberArr2)
smallestNumber(smallNumberArr3)



//2. Function that will return your string in Alphabetical order 
function alphabeticalOrder(str){
    return str.split("").sort().join("");
}
let word = "majd";
sortResult = alphabeticalOrder(word)
console.log(sortResult);


/*3. In mathematics, the factorial of a non-negative integer n, denoted by n! is the product of all
positive integers less than or equal to n. In simple terms, the Factorial of 8 is solved like this:*/

  function factorial(n) {
   let factNo=1
    for (let i=1;i<=n;i++){
        factNo*=i
    }
    return factNo;
    }
  console.log(factorial(8));

//4. A Write a function that lets you know if a number is Even or Odd .
function numberType(num){
    if(num%2===0){
        return 0
    }
    else{
        return 1
    }
}
console.log(numberType(5));
console.log(numberType(16));
console.log(numberType(4));
//5. Remove all Odd number(s) in an array and return a new array that contains Even numbers only.
function evenArray(mix){
    even=[];
for(i=0;i<=mix.length;i++){
if(mix[i]%2===0){
even.push(mix[i])
}
}
return even;
}
myArray=[4,5,8,6,9,10,15,19,35,64]
console.log(evenArray(myArray));
myArray2=[1, 2, 3, 4, 5, 6,7,8,9]
console.log(evenArray(myArray2));

function tryArray(anArray){
    const evenArray = anArray.filter(num => num%2===0);
    return evenArray;
}
Array1=[4,5,8,6,9,10,15,19,35,64]
console.log(tryArray(Array1));
Array21=[1, 2, 3, 4, 5, 6,7,8,9]
console.log(tryArray(Array21));


/*//6. Create a function that takes in an array as an argument, checks the data type of each
element, and removes any elements that are strings. The function should return the modified
array.*/
function numOnly(mix){
    numbers=[];
for(i=0;i<=mix.length;i++){
if(typeof mix[i]==="number"){
numbers.push(mix[i])
}
}
return numbers;
}
myArray=['Ayham', 3, 7, 'Alaa', 13, 'coding']
console.log(numOnly(myArray));
//7. Return the sum of a number going back to it's root. In other words:
function sumRoot(num){
if(num==0){
    return 0;
}
else{
    return num+sumRoot(num-1)
}
}
console.log(sumRoot(8));


/*8. Create a function that will accept an array and do the following:
● Get the lowest element
● Get the highest element
● Get the length of array
● Get the Average of all element;
● Store these criteria in a new array*/
function criteria(arrayCriteria){
    const min =Math.min(...arrayCriteria);
    const max =Math.max(...arrayCriteria);
    const length = arrayCriteria.length;
    const sum = arrayCriteria.reduce((acc,current) => acc+current,0);
    const average = sum/length;
    let criteriasArray =[min ,max, length ,average];
    console.log(criteriasArray);
}
let test =[7, 13, 3, 77, 100]
criteria(test);
//9. Convert the given number to a Roman Numeral
function toRomanNumeral(num) {
    const romanNumeralValues = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"]
    ];
  
    let result = "";
    
    romanNumeralValues.forEach(([value, symbol]) => {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    });
    
    return result;
  }
  console.log(toRomanNumeral(1994)); // Output: "MCMXCIV"

//10. Return how many words was given
function wordsCounter(anyArray){
newArray = anyArray.split(" ");
console.log(newArray.length);
}
wordsCounter('hello from CodingAcademy!')
//11.Create function to Multiply all elements in an array by it's length
function multiplyByLength(array) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      array[i] *= len;
    }
    return array;
  }
  const arr = [4, 3, 5, 6];
console.log(multiplyByLength(arr));
/*12. Create a function that will check if str1 ends with the characters in str2
Rules:
● Take two strings as argument
● Determine if second string matches ending of the first string
● Return Boolean value*/

function checkEnd(str1, str2) {
    return str1.endsWith(str2);
  }
  console.log(checkEnd("CodingSchool", "Ac"));

//13. Create a function that will repeat each string character two times
function repeatChars(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += str[i] + str[i];
    }
    return result;
  }
console.log(repeatChars("coding"));

/*//14. Return the index location of an element from a given array. First argument is the array
you'd like to search and the second one is the element (either string/number) to look for.*/
function findIndex(arr, element) {
    return arr.indexOf(element);
  }
const teest= ["Ali", "Mazen", "Ayham", "Murad"]
console.log(findIndex (teest, "Ali"));


//15.Create function to Return the absolute sum of all the array elements
function absoluteSum(anArray){
    let sum =0;
    for(let i=0;i< anArray.length;i++){
sum += Math.abs(anArray[i]);
}
return sum;
}
let two = [-1, -3, -5, -4, -10, 0]
console.log(absoluteSum(two));
