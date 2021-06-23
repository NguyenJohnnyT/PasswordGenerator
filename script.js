// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//object that stores user preferences
var passwordOptions = {
  passwordLength = 0,
  isLower = false,
  isUpper = false,
  isNumeric = false,
  isSpecial = false,
}

function setPasswordOptions () {
  //prompts for password criteria include:
  //length (8-128 characters), lowercase, uppercase, numeric, and/or special chars
  //each input will be flagged as a boolean (or number for password length) to be included in the final password, store in an object

  //for length: prompt asking for number 8 to 128, alerts if <8 or >128 and ends program
  passwordOptions.passwordLength = prompt('Enter a password length between 8 to 128');
  if (passwordOptions.passwordLength < 8 || passwordOptions.passwordLength > 128) {
    alert('Password must be between 8 to 128 characters')
    passwordOptions.passwordLength = 0
    break
  }
  //for lowercase: confirm prompt
  passwordOptions.isLower = confirm('Do you want lowercase characters in your password?');
  //for uppercase: confirm prompt
  passwordOptions.isUpper = confirm('Do you want uppercase characters in your password?');
  //for numeric: confirm prompt
  passwordOptions.isNumeric = confirm('Do you want numeric characters in your password?');
  //for special chars: confirm prompt
  passwordOptions.isSpecial = confirm('Do you want special characters in your password?');
}

//generatePassword will generate a password based off user's criteria
function generatePassword () {

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
