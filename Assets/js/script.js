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

function generatePassword() {
  passwordLength = validatePasswordLength(prompt(
    "How many characters would you like your password to be? Choose between 8 and 128 characters."));
  
  confirmUpper = confirm("Will this contain any upper case letters?");
  if (confirmUpper) {
    userChoices.push(upperCase)
  }

  confirmLower = confirm("Will this contain any lower case letters?");
  if (confirmLower) {
    userChoices.push(lowerCase)
  }

  confirmNumeric = confirm("Will this contain any numbers?");
  if (confirmNumeric) {
    userChoices.push(numeric)
  }

  confirmSpecial = confirm("Will this contain any special characters?");
  if (confirmSpecial) {
    userChoices.push(specialCharacter)
  }


if (!confirmUpper && !confirmLower && !confirmNumeric && !confirmSpecial) {
  alert("Please select at least one type of character.");
  return generatePassword();
}

console.log(passwordLength)
for (let i = 0; i < parseInt(passwordLength); i++) {
  var randomChars = Math.floor(Math.random()*userChoices.length);
  password += userChoices[randomChars]
  return password;
}
function validatePasswordLength(passwordLength) {
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128 characters.");
    return generatePassword();
    
  } else {
     return passwordLength;
  }
}
// function pushChoices(charArray){
//   for (var i = 0; i < charArray.length; i++) {
//     var character = charArray[i];
//     pushChoices(character);
//   }
// }

  for (var i = 0; i < numberOfChars; i++) {
    var randomIndex = Math.floor(Math.random() *numberOfChars);
    passwordString.push(userChoices[randomIndex]);
    generateRandomString(passwordLength);
}

console.log(userChoices)

console.log(passwordString);
}




// password = passwordString.join("");
// console.log("Password: " + password);


