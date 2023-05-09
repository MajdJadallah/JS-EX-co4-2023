/*1.Define a function called clean Names that accepts an array of strings containing additional
space characters at the beginning and end. The clean Names() function should use the array
map method to return a new array full of trimmed names.*/
let names=[" injustice", " SuperMan", "Batman ", " flash "]
function cleanNames(arrayName){
    const trimmedNames = arrayName.map((name)=>{
        return name.trim()
    })
    return trimmedNames;
}
console.log(cleanNames(names));

/*2. Write a function that converts an array of values from miles to km using the map method. In
the end, add the km up in a new variable called "totalDistanceInKilometers" and return this
variable*/
function milesToKm(distanceArray){
const distanceResult = distanceArray.map((distance)=>{
    return distance*1.60934;
});
return distanceResult;
}
function TotalDistabceKm (distanceArrayInKm){
    const total =distanceArrayInKm.reduce((accumlator,value)=>accumlator+value);
    return total
}
let converArray =[10, 20, 30, 40];
console.log(milesToKm(converArray));
console.log(`The total distance is  ${TotalDistabceKm(milesToKm(converArray))}  km`);



//3. Square and sum the array elements using the arrow function and then find the average of the array
// let squarArray =sumArray.map((num)=>num*num);
// let sumSquare =squarArray.reduce((acc,item)=>acc+item);
// let averageSquare =sumSquare/squarArray.length
let sumArray = [1, 2, 3, 4, 5];
console.log((sumArray.map((num)=>num*num).reduce((acc,item)=>acc+item))/sumArray.length);




//4. Create a new array using the map function whose each element is equal to the original element plus 4.
let originalArray = [1, 2, 3, 4, 5];
let plusArray = originalArray.map((element)=>element+4);
console.log(plusArray);


//5. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.filter((element)=>element%2==0).map((element)=>element*2).reduce((accu,value)=>accu+value));


//6. Create a new array whose elements is in uppercase of words present in the original array
let words = ['apple', 'banana', 'cherry', 'date'];
console.log( words.map((word)=> word.toUpperCase()));




/*7. Use the .map() method on the heros array to return a new array.
● The new array should rename the 'name' key to 'hero'.
● The 'name' key should not appear in the new array.
● The new array should have a new key added called (id).
● The key 'id' should be based on the index.
*/
const heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
    ]
console.log(heros.map((hero,index)=>{return {hero:hero.name,power:hero.power,id:index};}));

/*//8. Write a JavaScript function that takes in the array "input Words" as an argument, and using
the filter method, it returns a new array containing only the elements that have more than 7
characters and return the new Array*/
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(inputWords.filter((word)=>word.length >= 7));

/*9. Starting with an array containing the numbers 1 through 10, use filter, map, and reduce to
produce the following. Use console.log to display the results.
● An array of odd numbers.
● An array of numbers divisible by 2 or 5.
● An array of numbers divisible by 3 and then squared those numbers.
● The sum of the following: square the numbers divisible by 5.
*/
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbersArray.filter((num)=>num%2!=0));
console.log(numbersArray.filter((num)=>num%2===0 || num%5===0));
console.log(numbersArray.filter((num)=>num%3===0).map((num)=>num**2));
console.log(numbersArray.filter((num)=>num%5===0).map((num)=>num**2).reduce((acc,value)=>acc+value));



/*10. Use filter then map functions to filter even numbers from the array "nums" then square
them. Assign the result to a variable named "squaredEvenNums" and display it. Then use the
reduce function to calculate the sum of elements in the array "nums". Display the output for
both results :*/
let nums = [11, 22, 33, 46, 75, 86, 97, 98];
let squaredEvenNums = nums.filter((num)=>num%2===0).map((num)=>num**2);
console.log(squaredEvenNums);
console.log(nums.reduce((acc,value)=> acc+value));

/*11. Use filter, map and reduce methods on the countries array to:
● Filter out the countries whose name starts with 'U' or 'R'
● Create a new array where each country name is in uppercase
● Find the total number of characters in the new array
Assign the result to a variable named "totalCharacters" and display it using console.log*/
let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];
console.log(countries.filter((country)=>!country.startsWith('U')&&!country.startsWith('R')));
console.log(countries.filter((country)=>!country.startsWith('U')&&!country.startsWith('R')).map((country)=>country.toUpperCase()));
let newArray = countries.filter((country)=>!country.startsWith('U')&&!country.startsWith('R')).map((country)=>country.toUpperCase());
console.log(newArray);
console.log(newArray.reduce((acc,country)=>acc+country.length,0));


//12. Use filter() to create a new array of only the numbers greater than 50 in the following array:
const origArray = [12, 45, 67, 89, 23, 56, 73, 99, 100];
console.log(origArray.filter((num)=>num>=50));
