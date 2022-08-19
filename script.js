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
// Queries the id "generate" and assign it to generateBtn
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
  
//initialize
  var specCharacter;
  var num;
  var upper;
  var length = 0;
  var lower;

  var result = " ";
  pwdOptions.pwdLength = 0;
//While loop that rerceives input from user and designates a random password before rendering to user
  while(length < 8 || length > 128){
    length = prompt("The length of your password was not between 8 and 128 characters");

    if(length === 0){
      return
    } else if(!isFinite(length)){
      alert("Number not detected");
      return
    } else if(length <8 || length > 128){
      alert("Enter a password between 8 and 128 characters");
      return
    } else{
        promptRendered();

        while (pwdOptions.pwdLength < length) {
          //used make sure the user selects at least one of the criteria  
          if (lower === false && upper === false && num === false && specCharacter === false) {
            alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
            promptRendered();
          }
          else {
            
            if (lower === true && pwdOptions.pwdLength < length) {
              var lc = pwdOptions.lowerCaseLet[Math.floor(Math.random() * 26)]
              result = result + lc;
              pwdOptions.pwdLength++;
            }

                         
            if (specCharacter === true && pwdOptions.pwdLength < length) {
              var specChar = pwdOptions.spcCharacter[Math.floor(Math.random() * 32)]
              result = result + specChar;
              pwdOptions.pwdLength++;
            }

            if(upper == true && pwdOptions.pwdLength < length ){
              var upCase = pwdOptions.upperCaseLet[Math.floor(Math.random() * 26)]
              result = result + upCase;
              pwdOptions.pwdLength++;
            }
            if(num === true && pwdOptions.pwdLength < length){
              var myNum = pwdOptions.pwdNumbers[Math.floor(Math.random() * 10)]
              result = result + myNum;
              pwdOptions.pwdLength++;
            }

    }
  }
}
    return result;

    function promptRendered() {
      lower = confirm("Click ok to use lower case letters?");
      upper = confirm("Click ok to use upper case letters?");
      num = confirm("Click ok to use numbers?");
      specCharacter = confirm("Click ok to use any special characters?");
    }
  }
}