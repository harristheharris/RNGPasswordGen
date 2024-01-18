// Assignment Code
var generateBtn = document.querySelector("#generate");
var trasher = document.querySelector(".trasher");
var passLen = document.querySelector("#length")
var caseUpper = document.querySelector("#upperCase");
var caseLower = document.querySelector("#lowerCase");
var caseNum = document.querySelector("#numCase");
var caseSpecial = document.querySelector("#specialCase")
var head1 = document.querySelector("#head1");

//A function that formats a set of text
function ohBoy() {
  head1.setAttribute("style", "font-size: 16px; text-align: center; color: hsl(360, 91%, 36%);");
  document.getElementById("head1").innerHTML = "Password needs to be at LEAST 8 and at MOST 128 charcters long!";
  }

//A function that formats a set of text
function ohJeez() {
    head1.setAttribute("style", "font-size: 16px; text-align: center; color: hsl(360, 91%, 36%);");
    document.getElementById("head1").innerHTML = "PLEASE select one of the CASE TYPES!";
  }

function getRandom (list1){
    var ranD = list1[Math.floor((Math.random()*list1.length))];
    return ranD; 

}

function conCat(){
  var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var nuMeric = '0123456789'.split('');
  var specialCase = '!@#$%^&*'.split('');
  var nul = [];

    function xCase(x){
    if (x == true){
      var upper = alphabetUpper;
      
    } else {
      var upper = nul;
    }
    return upper;
  }


    function yCase(y){
      if (y == true){
        var lower = alphabetLower;

      } else {
        var lower = nul;
      }
      return lower;
  }


    function zCase(z){
    if (z == true){
      var numm = nuMeric;

    } else {
      var numm = nul;
    }
      return numm;
  }


  function zxCase(zx){
    if (zx == true){
      var specCa = specialCase;

    } else {
      var specCa = nul;
    }
    return specCa;
  
}

var upper = xCase(caseUpper.checked);
var lower = yCase(caseLower.checked);
var num = zCase(caseNum.checked);
var specCa =zxCase(caseSpecial.checked);

var passArr = lower.concat(upper, num, specCa)

console.log(passArr);

  return passArr;
}

function getPass(x){

  var wordPass = "";

  for (i = 0; i <= passLen.value-1; i++ ){
  var coke = getRandom(x);
  wordPass = wordPass + coke; 
  console.log(coke);
  }
  
  console.log(wordPass);
  return wordPass;
}

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;

}

function generatePassword(){

//values inputted by the user that we will use genertator their taylored password


//A visual
  console.log(passLen.value);
  console.log(caseUpper.checked);
  console.log(caseLower.checked);
  console.log(caseNum.checked);
  console.log(caseSpecial.checked);

if (passLen.value < 8 || passLen.value > 128 ){

  ohBoy();
  return;

} else if (caseUpper.checked == false && caseLower.checked == false && caseNum.checked == false && caseSpecial.checked == false ) {

  console.log("poop");
  ohJeez();
  return;
}

var result = conCat();
console.log(result);
return getPass(result);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
