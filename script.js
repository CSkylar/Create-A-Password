var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!@#$%^&*()-_"
function generatePassword() {
    var password = "";
    var passwordChar = "";
    var passwordLengthUser = prompt ("How many characters would you like your password to be? Must be between 8-128 characters.");
    passwordLengthUser = parseInt(passwordLengthUser);
    if (passwordLengthUser < 8) {
        alert("Password must have more than 7 characters!");
        return "";
    }
    if (passwordLengthUser > 128) {
        alert("Password must not have more than 128 characters!");
        return "";
    }
    var lowercaseCharacterChoice = confirm("Needs a lowercase character");
    if (lowercaseCharacterChoice) {
        passwordChar += lowercaseChar;
    }
    var uppercaseCharactersChoice = confirm("Needs a uppercase character");
    if (uppercaseCharactersChoice) {
        passwordChar += uppercaseChar;
    }
    var numericalCharactersChoice = confirm ("Needs a numerical character");
    if (numericalCharactersChoice) {
        passwordChar += numericalChar
    }
    var specialCharacterChoice = confirm ("Needs a special character");
    if (specialCharacterChoice) {
        passwordChar += specialChar
    }
    for (var i = 0; i < passwordLengthUser; i++) {
        password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
    }
    var password = "#password"
    function writePassword(password) {
        var password = generatePassword();
        var passwordText = document.getElementById("#password");
        passwordText.value = password;
        return ("")
    }
    console.log(writePassword)
    generateBtn.addEventListener("click" , generatePassword)
  }