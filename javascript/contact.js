const form = document.getElementById('form');
const username = document.getElementById('username');
const email  = document.getElementById('email');
const text = document.getElementById('text');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const textValue = text.value.trim();

    if (usernameValue === '') {
        // show error 
        // show error class 
        setErrorFor(username, 'Username cannot be blank');
    }
    else {
        // adding success class 
        setSuccessFor(username);
    }
}

function setErrorFor(input, message) {
    const inputContainer = input.parentElement; // input-container 

    const small = inputContainer.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class 
    inputContainer.className = 'input-container error';


}
