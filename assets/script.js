// Assignment Code
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;

}




function generatePassword(){


var alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var nuMeric = '0123456789'.split('');
var specialCase = '!@#$%^&*'.split('');

var trasher = document.querySelector(".trasher");

var passLen = document.querySelector("#length")
var caseUpper = document.querySelector("#upperCase");
var caseLower = document.querySelector("#lowerCase");
var caseNum = document.querySelector("#numCase");
var caseSpecial = document.querySelector("#specialCase")



  console.log(passLen.value);
  console.log(caseUpper.checked);
  console.log(caseLower.checked);
  console.log(caseNum.checked);
  console.log(caseSpecial.checked);




  for (i = 0; i <= passLen.value-1; i++ ){
    randP = getRandom(alphabetLower, alphabetUpper, nuMeric, specialCase);
    
  }
  


    
}

function getRandom (list1, list2, list3, list4){
    var ranD = list1[Math.floor((Math.random()*list1.length))];
    console.log(ranD)
    return 

}





//I need a big function this function is going to take smaller functions data and use accridingly to create a password
//Three smaller functions
//our first function needs to determine the desired length of the password (between 8 and 128) we get this information from the user inputs.
//The next function determines what type of cases to include
//a Function to validate that all information matches requirments





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
