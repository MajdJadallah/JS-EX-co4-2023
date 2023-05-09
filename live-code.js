function myFunction() {
var myName = document.querySelector('h1')
myName.style.color ="#FBC425";
};
let myDiv =document.createElement('div');
myDiv.innerHTML=`<h1>This is My Introduction About My Self </h1>
<h3> My Name is: Majd Jadallha </h3>
<h3> My Education is: Civil Enginner</h3>
<button class ="btn" onclick="myFunction()">change color</button>`;
document.body.appendChild(myDiv)
/************************************************************************************************************************* */
//This is the next task of javascript which this task is register form.

// let loginButton =document.getElementById('login');
// function loginFunction(){
//     if(){

//     }
//     else{
//     alert('Invalid userName or passward');
//     }
// }
let myFormDiv =document.createElement('div');
myFormDiv.innerHTML=`
<p>*************************************************************************</p>
<br>
<h2>Login Form</h2>
<form>
    <label for="userName">userName</label>
    <input id ="userName" type="text" name="userName" required>
    <br><br>
    <label for="passward">passward</label>
    <input type="password" id="password" name="password" required>
    <br><br>
    <button id ="login" onclick="loginFunction()">Login</button>
</form>`
document.body.appendChild(myFormDiv)
/********************************************************************************************** */
// css style by js which this css style inline style
let myWork = document.createElement('h1');
myWork.innerHTML=`Elzero`;
myWork.style.cssText="color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial";
// myWork.style.setProperty("color: blue,font-size: 80px,font-weight: bold,text-align: center,font-family: Arial")
document.body.appendChild(myWork);
/************************************************************************/
let one = document.createElement('p');
one.innerHTML = `Elzero`;
one.style.cssText="font-size: 40px; color: red";
let oneStyle = window.getComputedStyle(one);
let two = document.createElement('p');
two.innerHTML = `web`;
two.style.cssText="font-size: 40px; color: green";
let twoStyle = window.getComputedStyle(two);
let three = document.createElement('p');
three.innerHTML = `school`;
two.style.cssText="font-size: 40px; color: white;ba";
let threeStyle = window.getComputedStyle(three);
console.log(oneStyle);

let a=10;
let b="20";
let c=80;
// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a);//13
// console.log(+b++ );//21
// console.log(+c++);//81
// console.log( +a++);//13


// console.log(++a);
// console.log(-b );
// console.log(+c++);
// console.log(-a++);
// console.log(+a);
console.log(++a + -b + +c++ - -a++ + +a);

console.log("********");
console.log(++a);
console.log(-b );
console.log(+c++);
console.log(-a++);
console.log(+a);