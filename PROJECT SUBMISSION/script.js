const form = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileUpload');
const errorMessage = document.getElementById('error-message');
const maxFileSize = 1000000; // 1 MB in bytes
const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
const errorBox = document.querySelector('.errorBox')



form.addEventListener('submit', (e) => {
    errorBox.innerText = "";
    let allChecked = true;

    checkBoxes.forEach((checkbox) =>{
        if(!checkbox.checked){
            allChecked = false;
        }
    })

    if(!allChecked){
        e.preventDefault();
        errorBox.innerText = "Please check all boxes to proceed.";
    }


    errorMessage.innerText = "";

    if (fileInput.files.length === 0) {
    e.preventDefault();
    errorMessage.innerText = "Please select a file to upload.";
    return;
    }


    const file = fileInput.files[0];
    if (file.type !== 'application/pdf') {
    e.preventDefault();
    errorMessage.innerText = "Only PDF files are allowed!";
    return;
    }

    if (file.size > maxFileSize) {
    e.preventDefault();
    errorMessage.innerText = "File size must be under 1 MB!";
    }


});