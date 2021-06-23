// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//object that stores user preferences
var passwordGenerator = {
  //password options; declared and initialized as base
  passwordLength: 0,
  isLower: false,
  isUpper: false,
  isNumeric: false,
  isSpecial: false,
  
  //character arrays for functions to refer to
  lowerArray: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numericArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialArray: [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '&', '_', '`', '{', '|', '}', '~'],

  //Array that concatenates previous arrays to be used for password generation
  combinedArray: [],

  //declare variable newPassword to display generated password to the user 
  newPassword: '',

  //generateMyPassword calls on all the functions in the passwordGenerator object to give the user their password
  generateMyPassword: function () {
    setPasswordOptions() //1. ask the user their password criteria
    someFunction() //2. update combinedArray based off user pw criteria
    someFunction2() //3. randomly select characters in combinedArray to push into newPassword
  },

  /*setPasswordOptions prompts for password criteria include:length (8-128 characters), lowercase, uppercase, numeric, and/or special chars each input will be flagged as a boolean (or number for password length) to be included in the final password, store in an object */
  setPasswordOptions: function () {
  //for length: prompt asking for number 8 to 128, alerts if <8 or >128 and ends program
    passwordGenerator.passwordLength = prompt('Enter a password length between 8 to 128');
      if (passwordGenerator.passwordLength < 8 || passwordGenerator.passwordLength > 128) {
        alert('Password must be between 8 to 128 characters, try again')
        passwordGenerator.passwordLength = 0
        
    }
    //for lowercase: confirm prompt
    passwordGenerator.isLower = confirm('Do you want lowercase characters in your password?');
    //for uppercase: confirm prompt
    passwordGenerator.isUpper = confirm('Do you want uppercase characters in your password?');
    //for numeric: confirm prompt
    passwordGenerator.isNumeric = confirm('Do you want numeric characters in your password?');
    //for special chars: confirm prompt
    passwordGenerator.isSpecial = confirm('Do you want special characters in your password?');
  }
}

function setPasswordOptions () {


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
