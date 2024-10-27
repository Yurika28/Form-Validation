const form = document.querySelector("form")
const password = document.querySelector(".password")
const confirmPassword = document.querySelector(".confirm-password")
const errorMessage = document.querySelector(".error")
const errorHead = document.querySelector(".error-head")

form.addEventListener("submit", (e) =>{
    errorHead.innerText = "";
   

    if(password.value === confirmPassword.value){
        errorHead.innerText = "Thank you, account created!";
    } else{
        e.preventDefault();
        errorHead.innerText = "Password doesn't match!";
    }
})

password.addEventListener("input", (e) =>{
    errorMessage.innerText = "";

    if(password.value.length < 8){
        errorMessage.innerText = "password at least 8 characters";
    } else if(password.value.length > 20){
        errorMessage.innerText = "password must be under 20 character";
    }
}) 