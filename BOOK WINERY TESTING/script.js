const form = document.querySelector('.form');
const errorElement = document.querySelector('.error');
const ageInput = document.querySelector('.check-age');
const password = document.querySelector('.password');
const peopleLimit = document.querySelector('.people-limit')
const infoIcon = document.querySelector('.bi.bi-exclamation-circle')
const addedInfo = document.querySelector('.add-info')

infoIcon.addEventListener('mouseover', () =>{
    addedInfo.style.display = 'block';
})

infoIcon.addEventListener('mouseout', () =>{
    addedInfo.style.display = 'none';
})

function calculateAge (birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())){
        age--;
    }

    return age;

}

form.addEventListener('submit', (e) =>{

    const birthDate = ageInput.value;
    const userAge = calculateAge(birthDate)

    let messages = []
    if(userAge < 18){
        messages.push('Your age bellow 18, Drinking is prohibited')
    }

    if(peopleLimit.value > 10){
        messages.push('Sorry we only have 10 seat at the time')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})