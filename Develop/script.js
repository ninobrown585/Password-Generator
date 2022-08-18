// Assignment code here
 var generatePassword = document.getElementById("generate");

 var pwdOptions = {

  // length of password
  pwdLength: 0,

  //lowercase letters
  lowerCaseLet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //Uppercase Letters
  upperCaseLet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //numbers
  pwdNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //special characters
  spcCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function (){
  

  var specCharacter;
  var num;
  var upper;
  var length = 0;
  var lower;

}