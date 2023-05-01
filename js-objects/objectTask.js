const person = { name: "Adam", age: 25, gender: "male" };
console.log(`${person.name} ${person.age} ${person.gender}`);


const myObj = { name: "Adam", age: 25 };
myObj.gender = "male";
console.log(myObj);



const myObject1 = { name: "Adam", age: 25 };
myObject1["gender"] = "male";
console.log(myObject1);



const myObject2 = { name: "Adam", age: 25 };
const nameValue = myObj.name;
console.log(nameValue);

console.log("five");
let person1 = { name: "Adam", age: 25 };
console.log(person1["name"]); // Output: "Adam"


console.log("six");
let person2 = { name: "Adam", age: 25, gender: "male" };
for (let property in person2) {
  console.log(`${property}: ${person2[property]}`);
}


const person3 = { name: "Adam", age: 25, gender: "male" };
const keys = Object.keys(person3);
console.log(keys); 

const person4 = { name: "Adam", age: 25, gender: "male" };
const values = Object.values(person4);
console.log(values);


const pers = { name: "Adam", age: 25, gender: "male" };
const entries = Object.entries(pers);
console.log(entries); 

const obj1 = { name: "Adam", age: 25 };
const obj2 = { gender: "male" };

const mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj); 


const person7 = { name: "Adam", age: 25 };
Object.freeze(person7);

// Attempting to modify the object or its properties will not work
person.age = 30;
person.city = "New York";

console.log(person7); // Output: { name: "Adam", age: 25 }


const person8 = { name: "Adam", age: 25 };
Object.seal(person8);

person8.name = "John"; // Allowed
person8.age = 30; // Allowed
person8.gender = "male"; // Not allowed

console.log(person8); // Output: { name: "John", age: 30 }
