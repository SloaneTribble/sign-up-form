let password = document.getElementById("password");

let confirmPassword = document.getElementById("confirm-password");

function validate(){
    if(password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("Passwords Don't Match")
    } else {
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = validate;
confirmPassword.onkeyup = validate;