
// Exercise 01: Add label to each input field
const form= document.getElementById('form');
const userName= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const confirmPassword= document.getElementById('confirmPassword');
form.addEventListener('submit', event => {
  // Validate username input
  if (userName.value.trim() === ''||userName.value.length<10||userName.value.length>10) {
    alert('Username is required & should be less than 10characters');
  }
  // Validate password input
  if (password.value.trim() === ''||password.value.length>=10||confirmPassword.value.trim() === ''||confirmPassword.value !== password.value) {
    alert('Password is required & should be more than 10characters');
  }
  // Validate email input
  if (email.value.trim() === '') {
    alert('Email is required');
  }
  // Validate confirm password input
  
  if (confirmPassword.value !== password.value) {
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
