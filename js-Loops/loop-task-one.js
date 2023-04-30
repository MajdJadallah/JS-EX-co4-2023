//1. Use a for loop to print numbers from 1 to 10 using for.
console.log(" 1. Use a for loop to print numbers from 1 to 10 using for.");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
  //2. Use a while loop to print numbers from 1 to 10 using while.
  console.log(" 2.  Use a while loop to print numbers from 1 to 10 using while.");
let n = 1 ;
while (n<=10){
    console.log(n);
    n++;
}
//3. Use a for loop to iterate through an array and print each element.
console.log(" 3. Use a for loop to iterate through an array and print each element.");
let arrayNumber=[8,6,3,7,5]
for (let i = 0; i<arrayNumber.length;i++){
    console.log(arrayNumber[i]);
}
//4. Use a for loop to print even numbers from 0 to 10.
console.log("4. Use a for loop to print even numbers from 0 to 10.");
for (let i = 1; i<=10;i++) {
    if ( i % 2 === 0 ) {
        console.log(i);
    }
}
//5. Use a for loop to print the sum of numbers from 1 to 10.
console.log("5. Use a for loop to print the sum of numbers from 1 to 10.");
let  sum =0 ;
for (let i=1;i<=10;i++){
    sum +=i
}
console.log(sum);

//6. Use a for loop to find the largest number in an array.
console.log("6. Use a for loop to find the largest number in an array.");
let arrayMax=[1,2,3,4,5,6,7,8,9]
let maxNumber=arrayMax[0]
for(i=0;i<arrayMax.length;i++){
if(arrayMax[i]>maxNumber){
    maxNumber=arrayMax[i]
}
}
console.log(`The largest number in a ${`[1,2,3,4,5,6,7,8,9]`} is ${maxNumber}`);

//7. Use a for loop to find the smallest number in an array
console.log("7. Use a for loop to find the smallest number in an array");
let arrayMin=[4,2 ,7,-5,6]
let minNumber=arrayMin[0]
for(i=0;i<arrayMin.length;i++){
if (minNumber>arrayMin[i]){
minNumber=arrayMin[i]
}
}
console.log(`The smallest number in a ${`[4,2,7,-5,6]`} is ${minNumber}`);



//11.Use a for loop to find the average of numbers in an array
console.log("11.Use a for loop to find the average of numbers in an array");
averageArray=[2,3,4,8,9]
let sumAverage=0
for(i=0;i<averageArray.length;i++){
sumAverage+=averageArray[i]
}
console.log(`The average of numbers ${`[2,3,4,8,9]`} is ${sumAverage/averageArray.length}`);



//12.Use a for loop to find the factorial of a number.
console.log("12.Use a for loop to find the factorial of a number.");
let num=8
let factorialNum=1
for(i=1;i<=num;i++){
factorialNum*=i
}
console.log(`The factorial of ${num} is ${factorialNum}`);


//13.Use a for loop to print the Fibonacci sequence up to a given number
console.log(" 13. The Fibonacci sequence up to a given number is ");
let fibonacciNum=10
let fibonaccArray=[0,1]
for(i=2;i<=fibonacciNum;i++){
    fibonaccArray[i]=fibonaccArray[i-1]+fibonaccArray[i-2]
    fibonaccArray.push(i)
}
console.log(fibonaccArray.slice(0,i));

//14.Use a for loop to print the prime numbers up to a given number.
console.log("14.Use a for loop to print the prime numbers up to a given number.");
let primeNumbers=[]
let rangeNumbers=20
for(i=0;i<rangeNumbers;i++){
    if(i%2!=0){
        primeNumbers.push(i);
    }
}
console.log(primeNumbers);

//15.Use a for loop to print a multiplication table for a given number .
console.log("15.Use a for loop to print a multiplication table for a given number.");
let numberTable=5
console.log(`The multiplication table for a ${numberTable} is`)

for(i=0;i<=10;i++){
console.log(`${numberTable} * ${i} = ${numberTable*i}`);
}
//16.Use a for loop to print the elements of a 2D array .
console.log("16.Use a for loop to print the elements of a 2D array .");

const arraylarge = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i=0; i < arraylarge.length;i++)
{
    for(let j=0;j < arraylarge [i].length ;j++){
        console.log( arraylarge [i][j] );
    }
}
//17.Use a for loop to print the elements of an array in reverse order. 
console.log("17.Use a for loop to print the elements of an array in reverse order.");

let arrayReverse=[1,2,3,4,5]
for(i = arrayReverse.length-1;i>=0;i--)
{
    console.log(arrayReverse[i]);
}

//18.Use a for loop to print the elements of an array in a specific range.
console.log("18.Use a for loop to print the elements of an array in a specific range.");
let specificRange=[1,2,3,4,5,6]
for(let i=2;i<=4;i++){
console.log(specificRange[i]);
}
//19.Use a for loop to print the elements of an array with a specific step.
console.log("19.Use a for loop to print the elements of an array with a specific step.");
let arraySteps=[1,2,3,4,5,6,7,8,9,10]
for(i=0;i<arraySteps.length;i+=2){
    console.log(arraySteps[i]);
}
//20.Use a for loop to check if a number is in an array.
console.log("20.Use a for loop to check if a number is in an array.");
let A=30;
let arrayCheck=[7,8,9,4,50,30]
for(let i=0;i<arrayCheck.length;i++){
    if(arrayCheck[i]===A){
        console.log("true");
        break;
    }
}
//21.Use a for loop to find the frequency of a number in an array.
console.log("21.Use a for loop to find the frequency of a number in an array.");
let counter=0
let number=1
let arrayFrequency=[1,1,3,8,6,6,8,,1,1,1,3]
for(i=0;i<arrayFrequency.length;i++){
    if(arrayFrequency[i]===number){
        counter++
    }
}
console.log(counter);