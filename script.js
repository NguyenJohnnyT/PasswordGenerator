// Assignment Code
var generateBtn = document.querySelector("#generate");



//object stores user preferences
var passwordGenerator = {
  //password criteria
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

  // Write password to the #password input
  writePassword: function () {
    document.getElementById("password").innerHTML = this.generateAPassword();
  },

  //generateAPassword calls on all the functions in the passwordGenerator object to give the user their password
  generateAPassword: function () {
    this.setPasswordOptions(); //1. ask the user their password criteria
    this.genCombinedArray(); //2. update combinedArray based off user pw criteria
    var showNewPassword = this.newPasswordGen(); //3. randomly select characters in combinedArray to push into newPassword
    this.resetCriteria(); //4. resets criterias, combinedArray, and newPassword
    return showNewPassword //5. returns user's password as a variable containing a string
  },
  
  /* setPasswordOptions prompts for password criteria include:length (8-128 characters), lowercase, uppercase, numeric, and/or special chars each input will be flagged as a boolean (or number for password length) to be included in the final password, store in an object */
  setPasswordOptions: function () {
  //Prompt asking for number 8 to 128, alerts if <8 or >128 and has user try again
    while (this.passwordLength < 8 || this.passwordLength > 128) {
      this.passwordLength = prompt('Enter a password length between 8 to 128');
      if (this.passwordLength < 8 || this.passwordLength > 128) {
        alert('Password must be between 8 to 128 characters, try again')
      }
    }
    //confirm prompts for lower, upper, numeric, and special
    while (true) { 
      this.isLower = confirm('Do you want lowercase characters in your password?');
      this.isUpper = confirm('Do you want uppercase characters in your password?');
      this.isNumeric = confirm('Do you want numeric characters in your password?');
      this.isSpecial = confirm('Do you want special characters in your password?');
      if (this.isLower || this.isUpper || this.isNumeric || this.isSpecial) { //guarantees at least one criteria is chosen
        break
      }
      alert('You must pick at least one criteria, try again')
    }
  },

  //evaluate criteria booleans and concatenate into combined array
  genCombinedArray: function () {
    if (this.isLower) {
      this.combinedArray = this.combinedArray.concat(this.lowerArray)
    };
    if (this.isUpper) {
      this.combinedArray = this.combinedArray.concat(this.upperArray)
    };
    if (this.isNumeric) {
      this.combinedArray = this.combinedArray.concat(this.numericArray)
    };
    if (this.isSpecial) {
      this.combinedArray = this.combinedArray.concat(this.specialArray)
    };
    // console.log(this.combinedArray);
  },

  /*Generate a new password using a random selection of characters from combinedArray and concatenate  to newPassword property.
  The length of the password will be determined by passwordLength (a number), and the length of combinedArray will
  help determine the index of combinedArray and be concatenated to the current string inside newPassword*/
  newPasswordGen: function () {
    for (i = 0; i < this.passwordLength; i++) {
      // console.log('password length: ' + this.passwordLength)
      var newCharIndex = Math.floor(Math.random() * this.combinedArray.length);
      this.newPassword = this.newPassword.concat(this.combinedArray[newCharIndex]);
      // console.log(this.newPassword)
    }
    return this.newPassword
  },

  //Resets the criteria so that the object.generatePassword can be called again
  resetCriteria: function () {
    this.passwordLength = 0;
    this.isLower = false;
    this.isUpper = false;
    this.isNumeric = false;
    this.isSpecial = false;
    this.combinedArray = [];
    this.newPassword = '';
  }
}

//generatePassword will generate a password based off user's criteria
// function generatePassword () {

// }

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");




//   passwordText.value = password;

// }

// // Add event listener to generate button
generateBtn.addEventListener("click", passwordGenerator.writePassword());
