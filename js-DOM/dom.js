// Exercise 01: Add label to each input field
//  let formRegister =document.createElement('form');
//  formRegister.innerHTML=`<div>
//  <label for="username">Username: </label>
//  <input type="text" id="username" name="username" required>
// </div>
// <br>
// <div>
//  <label for="password">Password:</label>
//  <input type="password" id="password" name="password" required>
// </div><br>
// <div>
//  <label for="confirmPassword">Confirm Password:</label>
//  <input type="password" id="confirmPassword" name="confirmPassword" required>
// </div><br>
// <div id="confirmPasswordError" class="error-message"></div>
// <button id="registerBtn" >Register</button>`
// document.body.appendChild(formRegister);
// // Exercise 03: Add validation to check if password and confirm password match:
// const passward=document.getElementById("password");
// const confirmPassword=document.getElementById("confirmPassword");
// const confirmPasswordError=document.getElementById("confirmPasswordError");
// const registerBtn=document.getElementById("registerBtn");
// function checkPasswordMatch(){
//   if(confirmPassword!==passward){
//     confirmPasswordError.innerText='* passwords does not matches';
//   }
//   else{
// confirmPasswordError.innerText=" ";
//   }
// }
// confirmPassword.addEventListener("input", checkPasswordMatch);
// function validData(){
//   if(){

//   }
//   else{
//   }
// }
// Exercise 01: Add label to each input field
const form= document.getElementById('form');
const userName= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const confirmPassword= document.getElementById('confirmPassword');

// console.log(form);
// console.log(userName);
// console.log(email);
// console.log(password);
// console.log(confirmPassword);
// let userInput=document.querySelector("[name='userName']");// access to the user name input by name attribute.
// let passwordInput=document.querySelector("[name='password']");// access to the user name input by name attribute.
// let password2Input=document.querySelector("[name='password2']");// access to the user name input by name attribute.
// let emailInput=document.querySelector("[name='email']");// access to the user name input by name attribute.

// form.addEventListener('submit',event=>{
//   let userValid=false;
//   let passwordValid=false;
//   let emailValid=false;
//   let password2Valid=false;
// ;
// //condition for userName
//   if(userName.value!=="" &&userName.value.length<=10){
//   userValid=true;
//   }
// //condition for password
//   if(password.value!=="" &&password.value.length<=8){
//     passwordValid=true;
//     }
//     //condition for email
//   if(email.value!=="" &&email.value.length<=8){
//     emailValid=true;
//     }
// //condition for passwordConfirm
//   if(confirmPassword.value!=="" &&confirmPassword.value.length<=8&&confirmPassword.value===password.value){
//     password2Valid=true;
//     }
//     if(password.value!==confirmPassword.value){

//     }
//   if(userValid===false ||passwordValid===false||emailValid===false||password2Valid===false){
//   event.preventDefault();
//   }
//   else{
//   }

// })

form.addEventListener('submit', event => {
  event.preventDefault();
  
  // Validate username input
  if (userName.value.trim() === '') {
    alert('Username is required');
  }
  
  // Validate password input
  if (password.value.trim() === '') {
    alert('Password is required');
  }
  
  // Validate email input
  if (email.value.trim() === '') {
    alert('Email is required');
  }
  
  // Validate confirm password input
  if (confirmPassword.value.trim() === '') {
    alert('Confirm Password is required');
  } else if (confirmPassword.value !== password.value) {
    alert('Passwords do not match');
  }
  
  // Enable/disable submit button based on input validity
  const inputs = [userName, password, email, confirmPassword];
  const isValid = inputs.every(input => input.value.trim() !== '');
  submitButton.disabled = !isValid;
  
  // Display success message if all inputs are valid
  if (isValid) {
    successMessage.textContent = 'Registration successful!';
  }
});
