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
var userChoices;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = prompt(
    "How many characters would you like your password to be? Choose between 8 and 128 characters.");
  console.log("Password Length" + passwordLength);

  confirmUpper = confirm("Will this contain any upper case letters?");
  console.log("Upper case" + confirmUpper);

  confirmLower = confirm("Will this contain any lower case letters?");
  console.log("Lower case" + confirmLower);

  confirmNumeric = confirm("Will this contain any numbers?");
  console.log("Number" + confirmNumeric);

  confirmSpecial = confirm("Will this contain any special characters?");
  console.log("Special characters" + confirmSpecial);
}

function validatePasswordLength(passwordLength) {
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = alert("Please enter a number between 8 and 128 characters.");
    console.log("Password length" + passwordLength);

  } else {
    (passwordLength === NaN); {
      passwordLength = alert("Please enter a number between 8 and 128 characters.");
     return generatePassword();
  }
}
}

function validatePassword(userChoices) {
  if (confirmUpper === true || confirmLower === true || confirmNumeric === true || confirmSpecial === true) {
    console.log(userChoices);
  
  } else (confirmUpper === false && confirmLower === false && confirmNumeric === false && confirmSpecial === false); {
    userChoices = alert("Please select at least one type of character.");
    return generatePassword();
  }
}

var passwordCreate = "";

for (var i= 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordCreate.push(allChoices);
  console.log(allChoices);

}

var password = passwordCreate.join("");
console.log("Password: " + password);

