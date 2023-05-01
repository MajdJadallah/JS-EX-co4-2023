const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number));



const number = [1, 2, 3, 4, 5];
const squaredNumbers = number.map(number => number ** 2);
console.log(squaredNumbers);


const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter(number => number % 2 === 0);
console.log(evenNumbers);


const numbers4 = [1, 2, 3, 4, 5];
const sum = numbers4.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);


const fruits = ["apple", "banana", "cherry"];
fruits.sort();
console.log(fruits);


const fruits2 = ["apple", "banana", "cherry"];
fruits2.reverse();
console.log(fruits2);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]




const arr = [1, 2, 3, 4, 5, 6];
const extractedArr = arr.slice(2, 4);
console.log(extractedArr); // Output: [3, 4]



const arrs = [1, 2, 3, 4, 5];
const removedElement = arrs.splice(3, 1);
console.log(arrs);
console.log(removedElement);
arrs.splice(2, 0, 6, 7);
console.log(arrs);



const arry = [1, 2, 3, 4, 5];
const index = arry.indexOf(3);
console.log(index);




const arrz = [1, 2, 3, 4, 5];
const string = arrz.join(',');
console.log(string);




const string2 = "1,2,3,4,5";
const arrss = string2.split(',');
console.log(arrss);




const arrrr = [1, 2, 3, 4, 5];
const length = arrrr.length;
console.log(length); 



const two= [1, 2, 3, 4, 5];
for (const element of two) {
  console.log(element);
}


const three = [1, 2, 3, 4, 5];
for (const index in three) {
  console.log(index); 
  console.log(three[index]);
}



const arr16 = [1, 2, 3, 4, 5];
const notArr = {0: "a", 1: "b", 2: "c", length: 3};

console.log(Array.isArray(arr16)); // Output: true
console.log(Array.isArray(notArr)); // Output: false



const obj = {0: "a", 1: "b", 2: "c", length: 3};
const arr17 = Array.from(obj);
console.log(arr17);

const newArray = Array.of(1, 2, 3);
console.log(newArray); // Output: [1, 2, 3]


const arr19 = [1, 2, 3, 4, 5];
arr19.fill(0, 0, 3);
console.log(arr19); // Output: [0, 0, 0, 4, 5]



const arr20 = [1, 2, 3, 4, 5];
arr20.copyWithin(1, 3);
console.log(arr20); // Output: [1, 4, 5, 4, 5]


