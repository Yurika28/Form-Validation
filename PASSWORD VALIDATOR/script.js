const passwordInput = document.querySelector(".password-box");
const passwordValidator = document.querySelectorAll(".password-content li");
const form = document.querySelector(".form");
const confirmPassword = document.querySelector(".confirm-password");
const passwordPrimer = document.querySelector(".password-primer");
const errorMessage = document.querySelector(".error");

const validator = [
    {RegExp: /.{8,}/, index: 0},
    {RegExp: /.[a-z]/, index: 1},
    {RegExp: /.[A-Z]/, index: 2},
    {RegExp: /.[0-9]/, index: 3},
    {RegExp: /.[!@#$%^&*(),.?":{}|<>]/, index: 4}
]

passwordInput.addEventListener("keyup", (e) =>{
    validator.forEach(item =>{
        const isValid = item.RegExp.test(e.target.value);
        const validatorItems = passwordValidator[item.index];
        
        if(isValid){
            validatorItems.firstElementChild.className ="bi bi-check2-square";
            validatorItems.classList.add("valid");
        } else{
            validatorItems.firstElementChild.className ="bi bi-app";
            validatorItems.classList.remove("valid");
        }
    })
})

form.addEventListener('submit', (e) =>{
    let messages = []

    if(passwordPrimer.value !== confirmPassword.value){
        messages.push('Passwords do not match!');
    } 

    if(messages.length > 0){
        e.preventDefault();
        errorMessage.innerText = messages.join(', ');
    }
})
