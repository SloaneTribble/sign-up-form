let password = document.getElementById("password");

let confirmPassword = document.getElementById("confirm-password");

function validatePassword(){
    if(password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("Passwords Don't Match");
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    } else {
        confirmPassword.setCustomValidity('');
        password.style.borderColor = "white";
        confirmPassword.style.borderColor = "white";
    }
}

password.onchange = validatePassword;
confirmPassword.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;