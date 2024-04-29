let validation = false;
function verifyNameInput(inputBox)
{
    let input = document.getElementById(inputBox);
    let inputValue = input.value;
    console.log(inputValue);
    if ((typeof (inputValue) != undefined) && (typeof (inputValue) != null) && (isEmptyString(inputValue) == false)) {
        changeValidationPass(inputBox);
    }
    else changeValidationFail(inputBox);
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
        changeValidationPass(inputBox);
    else    changeValidationFail(inputBox);

}
function isEmptyString(str){
    return str.length === 0;
}
function changeValidationPass(inputElementID)
{
    let inputbox =   document.getElementById(inputElementID);
            inputbox.style.borderColor = "green";
            inputbox.style.borderRadius = ".5rem";
            inputbox.style.backgroundColor = "white";
}
function changeValidationFail(inputElementID)
{
    let inputbox =   document.getElementById(inputElementID);
            inputbox.style.borderColor = "red";
            inputbox.style.borderRadius = ".5rem";
            inputbox.style.backgroundColor = "white";
}
function confirmPasswordMatch()
{
    let passwordInput = document.getElementById("createPasswordInput");
    let confirmPasswordInput = document.getElementById("confirmPasswordInput");
    let password = passwordInput.value;
    let passwordConfirm = confirmPasswordInput.value;
    if(password === passwordConfirm)
        changeValidationPass("createPasswordInput");
    else    changeValidationPass("confirmPasswordInput");
}
function aLittleMeme()
{
    alert('you weren\' supposed to do that!');
    let thisNote =document.getElementById("checkout-sub-notice");
    thisNote.value = 'YOU WEREN"T SUPPOSED TO DO THAT';
}
