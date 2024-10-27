const errorElement = document.querySelector('.error')
const form = document.querySelector('.form')
const password = document.getElementById('password')

form.addEventListener('submit', (e) =>{
    let messages = []
    if(password.value.length <= 6){
        messages.push('Password must be more than 6 characters')
    }

    if(password.value.length > 20){
        messages.push('Password must be under 20 character')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})