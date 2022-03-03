// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = [
  "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ",", ".", "/", "\\", ":", ";", "=", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

var passwordLength;
var confirmUpper;
var confirmLower;
var confirmNumeric;
var confirmSpecial;
var password = "";
var userChoices = [];
var passwordString = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts the question on password length. User must input number between 8 and 128
function generatePassword() {
  passwordLength = validatePasswordLength(prompt(
    "How many characters would you like your password to be? Choose between 8 and 128 characters."));
  
  // Ask if user wants upper case letters
  confirmUpper = confirm("Will this contain any upper case letters?");
  if (confirmUpper) {
    userChoices.push(upperCase)
  }
  // Ask if user wants lower case letters
  confirmLower = confirm("Will this contain any lower case letters?");
  if (confirmLower) {
    userChoices.push(lowerCase)
  }

  // Ask if user wants numbers
  confirmNumeric = confirm("Will this contain any numbers?");
  if (confirmNumeric) {
    userChoices.push(numeric)
  }

  // Ask if user wants special characters
  confirmSpecial = confirm("Will this contain any special characters?");
  if (confirmSpecial) {
    userChoices.push(specialCharacter)
  }

// Check if user selected at least one criteria for password
if (!confirmUpper && !confirmLower && !confirmNumeric && !confirmSpecial) {
  alert("Please select at least one type of character.");
  return generatePassword();
}

// Randomize password based on user choices
console.log(passwordLength)
for (let i = 0; i < parseInt(passwordLength); i++) {
  var randomChars = Math.floor(Math.random()*userChoices.length);
  password += userChoices[randomChars]
  return password;
}

// Check if user selected number between 8 and 128 characters
function validatePasswordLength(passwordLength) {
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128 characters.");
    return generatePassword();
    
  } else {
     return passwordLength;
  }
}
console.log(userChoices)

console.log(passwordString);
}

