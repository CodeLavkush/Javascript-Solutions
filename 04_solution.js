function checkPassword(password){
    hasUpperCase = /[A-Z]/.test(password);
    hasLowerCase = /[a-z]/.test(password);
    hasDigit = /[0-9]/.test(password);
    hasSpeicalChar = /[!@#$%^&*()><?]/.test(password);

    for(let i = 0; i < password.length; i++){
        if(password.length >= 8 && hasUpperCase && hasLowerCase && hasDigit && hasSpeicalChar){
            return console.log("Password is valid")
        }
        else{
            return console.log("Password is Invalid")
        }
    }
}

let password = "User@123";
checkPassword(password);