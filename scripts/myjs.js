let validation = [5];
// Verification Functiions
function verifyNameInput(inputBox)
{
    let input = document.getElementById(inputBox);
    let inputValue = input.value;
    console.log(inputValue);
    if ((typeof (inputValue) != undefined) && (typeof (inputValue) != null) && (isEmptyString(inputValue) == false)) {
        changeValidationPass(inputBox);
        if (inputBox == 'surnameInput') {
            validation[1] = true;
        }
        else {
            validation[0] = true;
        }
    }
    else {
        changeValidationFail(inputBox);
        if (inputBox == 'surnameInput') {
            validation[1] = false;
        }
        else {
            validation[0] = false;
        }
    }
}
function verifyEmailInput(inputBox)
{   
    let input = document.getElementById(inputBox);
    let inputValue = input.value;
    const emailRegex =
        new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    let isValidEmail = emailRegex.test(inputValue);
    console.log(isValidEmail)
    if(isValidEmail)
    {
        changeValidationPass(inputBox);
        validation[2] = true;
    }
    else
    { 
           changeValidationFail(inputBox);
           validation[2] = false;
    }


}
function confirmPasswordMatch()
{
    let passwordInput = document.getElementById("createPasswordInput");
    let confirmPasswordInput = document.getElementById("confirmPasswordInput");
    let password = passwordInput.value;
    let passwordConfirm = confirmPasswordInput.value;
    console.log(password);
    console.log(passwordConfirm);
    if (password === passwordConfirm) {
        changeValidationPass('confirmPasswordInput');
        validation[4] = true;
    }
    else {
        changeValidationFail("confirmPasswordInput");
        validation[4]= false;
    }
}
function validatePassword()
{
    let passwordInput = document.getElementById('createPasswordInput');
    let passwordvalue = passwordInput.value;
    if(isEmptyString(passwordvalue)==false)
        {
            changeValidationPass('createPasswordInput');
            validation[3] = true;
        }
        else
        {
            changeValidationFail('createPasswordInput');
            validation[3] = false;
        }
}
function checkAllFieldsValidationPass()
{
    let valid = true;
    for(let i =0; i<validation.length;i++)
    {
        valid = valid&&validation[i];
    }
    return valid;
    console.log(valid);
}

// Miscelleneous Functions
function aLittleMeme()
{
    alert('you weren\' supposed to do that!');
    let thisNote =document.getElementById("checkout-sub-notice");
    thisNote.innerText = 'YOU WEREN"T SUPPOSED TO DO THAT';
}
function changeValidationPass(inputElementID)
{
    let inputbox =   document.getElementById(inputElementID);
    inputbox.classList.remove('validationFail');
    inputbox.classList.add('validationPass');
}
function changeValidationFail(inputElementID)
{
    let inputbox =   document.getElementById(inputElementID);
    inputbox.classList.remove('validationPass');
    inputbox.classList.add('validationFail');
}

function isEmptyString(str){
    return str.length === 0;
}

// DOM eventlisteners

let hasBeenFocused = false;
let myInput = document.getElementById('nameInput');
myInput.addEventListener('focus', () => {
    hasBeenFocused = true;
});
myInput.addEventListener('blur', () => {
    if (hasBeenFocused)
        verifyNameInput('nameInput');
});
myInput = document.getElementById('surnameInput');
myInput.addEventListener('blur', () => {
    if (hasBeenFocused)
        verifyNameInput('surnameInput');
});
myInput.addEventListener('focus', () => {
    hasBeenFocused = true;
});
myInput = document.getElementById('confirmPasswordInput');
myInput.addEventListener('blur', () => {
    if (hasBeenFocused) {
        confirmPasswordMatch();
    }
});
myInput.addEventListener('focus', () => {
    hasBeenFocused = true;
});
myInput = document.getElementById('createPasswordInput');
myInput.addEventListener('blur',()=>{
    if(hasBeenFocused){
        validatePassword();
        confirmPasswordMatch();
    }
});
myInput.addEventListener('focus', () => {
    hasBeenFocused = true;
});


let submitform = document.getElementById('submitButton');
submitform.addEventListener('mouseover', () => {
    if(!checkAllFieldsValidationPass())
    {
         submitform.setAttribute('disabled','disabled');
    }
    else
    {
        submitform.removeAttribute('disabled','disabled');
    }
})
submitform.addEventListener('mouseout', () => {
   if(!checkAllFieldsValidationPass())
   {
        submitform.setAttribute('disabled','disabled');
   }
   else
   {
       submitform.removeAttribute('disabled','disabled');
   }
})
function doSomething()
{
    console.log('Something');
}