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
    getCombinedArray() //2. update combinedArray based off user pw criteria
    someFunction2() //3. randomly select characters in combinedArray to push into newPassword
  },

  /*setPasswordOptions prompts for password criteria include:length (8-128 characters), lowercase, uppercase, numeric, and/or special chars each input will be flagged as a boolean (or number for password length) to be included in the final password, store in an object */
  setPasswordOptions: function () {
  //Prompt asking for number 8 to 128, alerts if <8 or >128 and has user try again
    while (passwordGenerator.passwordLength < 8 || passwordGenerator.passwordLength > 128) {
      passwordGenerator.passwordLength = prompt('Enter a password length between 8 to 128');
      if (passwordGenerator.passwordLength < 8 || passwordGenerator.passwordLength > 128) {
        alert('Password must be between 8 to 128 characters, try again')
      }
    }
    //confirm prompts for lower, upper, numeric, and special
    passwordGenerator.isLower = confirm('Do you want lowercase characters in your password?');
    passwordGenerator.isUpper = confirm('Do you want uppercase characters in your password?');
    passwordGenerator.isNumeric = confirm('Do you want numeric characters in your password?');
    passwordGenerator.isSpecial = confirm('Do you want special characters in your password?');
  },

  //evaluate criteria booleans and concatenate into combined array
  genCombinedArray: function () {
    if (passwordGenerator.isLower) {
      passwordGenerator.combinedArray = passwordGenerator.combinedArray.concat(passwordGenerator.lowerArray)
    };
    if (passwordGenerator.isUpper) {
      passwordGenerator.combinedArray = passwordGenerator.combinedArray.concat(passwordGenerator.upperArray)
    };
    if (passwordGenerator.isNumeric) {
      passwordGenerator.combinedArray = passwordGenerator.combinedArray.concat(passwordGenerator.numericArray)
    };
    if (passwordGenerator.isSpecial) {
      passwordGenerator.combinedArray = passwordGenerator.combinedArray.concat(passwordGenerator.specialArray)
    };
    console.log(passwordgenerator.combinedArray);
  },

  /*Generate a new password using a random selection of characters from combinedArray and concatenate  to newPassword property.
  The length of the password will be determined by passwordLength (a number), and the length of combinedArray will
  help determine the index of combinedArray and be concatenated to the current string inside newPassword*/
  newPasswordGen: function () {
    for (i = 0; i < passwordgenerator.passwordLength; i++) {
      var newCharIndex = Math.floor(Math.random() * passwordgenerator.combinedArray.length);
      passwordGenerator.newPassword = passwordgenerator.newPassword.concat(passwordGenerator.combinedArray[newCharIndex]);
      return passwordGenerator.newPassword
    }
  }
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
