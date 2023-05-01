/*1. Write the code to get this array outputted in the following forms:
[“Coding”, “Academy”, “By”, “Orange”]
● Output: [“Coding”, “Academy”, “By”, “Orange”, “Jordan”]
● Output: [“Coding”, “Academy”]
● Output: [“Welcome”, “To”, “Coding”, “Academy”, “By”, “Orange”]
● Output: [“Academy”, “By”, “Orange”]
● Output: “Coding Academy By Orange”
● Output: [“Coding”, “Academy”, “By”, “Orange”]
● Output: [“Coding”, “Orange”]
*/
//[“Coding”, “Academy”, “By”, “Orange”]
let orangeAcademy = ["Coding", "Academy", "By", "Orange"]
console.log(orangeAcademy);
//● Output: [“Coding”, “Academy”, “By”, “Orange”, “Jordan”]
let addJordan = [...orangeAcademy,"Jordan"]
console.log(addJordan);
//● Output: [“Coding”, “Academy”]
console.log(orangeAcademy.slice(0,2));
//● Output: [“Welcome”, “To”, “Coding”, “Academy”, “By”, “Orange”]
let newOrangeAcademey = ["Welcome","To",...orangeAcademy]
console.log(newOrangeAcademey);
//● Output: [“Academy”, “By”, “Orange”]
console.log(orangeAcademy.slice(1,4));
//● Output: “Coding Academy By Orange”
console.log(orangeAcademy.join(""));
//● Output: [“Coding”, “Academy”, “By”, “Orange”]
console.log(orangeAcademy);
//● Output: [“Coding”, “Orange”]
let lastArray =[orangeAcademy[0],orangeAcademy[3]]
console.log(lastArray);

//q2
let fruit = [" banana ", " apple ", " orange ", " watermelon "];
let vegetables = [" carrot ", " tomato ", " pepper ", " lettuce "];
vegetables.pop();
console.log(vegetables);
vegetables.push("lettuce");
vegetables.shift()
console.log(vegetables);
vegetables.unshift("carrot");
let indexOrange = fruit.indexOf("orange");
console.log(indexOrange);
fruit.push(indexOrange)
console.log(fruit);
fruit.pop();
//e. Find the length of the vegetable array.
console.log(vegetables.length);
//f. Add that number to the end of the vegetable array.
let vegetableLength = [...vegetables,vegetables.length]
console.log(vegetableLength);

//g. Put the two arrays together into one array. Fruit first. Call the new Array "food".
let food = [...fruit,...vegetables]
let food2 = [...fruit,...vegetables]
console.log(food);
//Remove 2 elements from your new array starting at index 4.
 food2.splice(4,2);
console.log(food2);
// Reverse your array.
console.log(food.reverse());
//j. Turn the array into a string.
console.log(food.join(""));

//Functions:
function getArrayFromString(WORD){
    return WORD.split(" ");
}
console.log(getArrayFromString("Orange Coding Academy"));
//2. Write a function that converts the first seven digits of a mobile phone number to a hidden form.
function hideMobileNumber(number) {
    if (typeof number !== 'string') {
      return 'Invalid input: input must be a string';
    }
    if (number.length < 7) {
      return 'Invalid input: input must be at least 7 digits';
    }
    const prefix = '*******';
    const suffix = number.slice(-3);
    return prefix + suffix;
  }
  console.log(hideMobileNumber('0776807777')); // "*******777"







  function hideEmailAddress(email) {
    if (typeof email !== 'string') {
      return 'Invalid input: input must be a string';
    }
    const atIndex = email.indexOf('@');
    if (atIndex < 1) {
      return 'Invalid input: input must contain at least one character before @';
    }
    const domainIndex = email.lastIndexOf('.');
    const domain = domainIndex > atIndex ? email.slice(domainIndex) : '.com';
    const prefix = email.slice(0, 3) + '...';
    return prefix + domain;
  }
  console.log(hideEmailAddress('orange_academy@orange.jo')); // "ora...@orange.jo"


  



  function capitalizeWords(str) {
    if (typeof str !== 'string') {
      return 'Invalid input: input must be a string';
    }
    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
  }
  console.log(capitalizeWords('coding academy by orange')); // "Coding Academy By Orange"

  




  function capitalizeFirstLetter(str) {
    if (typeof str !== 'string') {
      return 'Invalid input: input must be a string';
    }
    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
  }
  console.log(capitalizeFirstLetter('coding academy by orange')); // "Coding Academy By Orange"
  




  function flipNumber(num) {
    return Number(num.toString().split('').reverse().join(''));
  }
  console.log(flipNumber(92485));





  // Example 1: Using a temporary variable
function swap1(a, b) {
    var temp = a;
    a = b;
    b = temp;
    return [a, b];
  }
  console.log(swap1(3,4));
  // Example 2: Using addition and subtraction
  function swap2(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
  }
  console.log(swap2(3,4));

  // Example 3: Using the XOR operator
  function swap3(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
  }
  console.log(swap3(3,4));




  function removeChar(str, index) {
    return str.substring(0, index) + str.substring(index + 1);
  }
 console.log(removeChar("Orange", 3));  






 function mergeStrings(str1, str2) {
    return str1.slice(1) + str2.slice(1);
  }
console.log(mergeStrings("lora","inge"));  






function checkChar(char, str) {
    return str.charAt(0) === char || str.charAt(str.length-1) === char;
  }
console.log(checkChar("o","orange"));  




function stringToArray(str) {
    return str.split(" ");
  }
console.log(stringToArray("Coding Academy by Orange"));  





function sortAlphabetically(str) {
    return str.split("").sort().join("");
  }
console.log(sortAlphabetically("Orange"));















//Object
console.log("Objects");
function getProperties(obj) {
    return Object.keys(obj);
  }
  
  const myObj = {
    name: "John",
    age: 30,
    city: "New York"
  };
  const properties = getProperties(myObj);
  console.log(properties);
  






  function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
  // Example usage:
  const myObj2 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  const numProperties = countProperties(myObj2);
  console.log(numProperties); // Output: 3
  






  function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  
  // Example usage:
  const obj1 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  const obj2 = {
    occupation: "Developer",
    salary: 50000
  };
  const mergedObj = mergeObjects(obj1, obj2);
  console.log(mergedObj); // Output: { name: "John", age: 30, city: "New York", occupation: "Developer", salary: 50000 }
  







  function convertObjectToUpperCase(obj) {
    let newObj = {};
    for (let prop in obj) {
      newObj[prop.toUpperCase()] = obj[prop].toUpperCase();
    }
    return newObj;
  }
  const count = { name: "John", age: 30, city: "New York" };
const newObj = convertObjectToUpperCase(count);
console.log(newObj); // { NAME: "JOHN", AGE: "30", CITY: "NEW YORK" }








  function filterNonNullValues(obj) {
    let newObj = {};
    for (let prop in obj) {
      if (obj[prop] !== null) {
        newObj[prop] = obj[prop];
      }
    }
    return newObj;
  }
  const test = { name: "John", age: null, city: "New York" };
  const newObj = filterNonNullValues(test);
  console.log(newObj); // { name: "John", city: "New York" }
  






  function sortObjectPropertiesAlphabetically(obj) {
    return Object.keys(obj).sort();
  }

  const mytest = { name: "John", age: 30, city: "New York" };
const sortedProps = sortObjectPropertiesAlphabetically(mytest);
console.log(sortedProps); // [ "age", "city", "name" ]

  



  

  