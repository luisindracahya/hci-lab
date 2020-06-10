let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let gender = document.getElementsByName("gender");
let dob = document.getElementById("DOB");
let ddl_nationality = document.getElementById("nationality");
let checkbox = document.getElementById("checkbox");
let submitBtn = document.getElementById("btn_submit");
let checkbox_label = document.getElementById("checkbox_label");


checkbox_label.addEventListener('click', function (e) {
    checkbox.click();
})

submitBtn.addEventListener('click', function (e) {
    
    let validationFlag = 0;

    if (!validateEmail(email.value)) {
        document.getElementById("email_validation").classList.remove('hide');
        document.getElementById("email_validation").innerHTML = 'Please type in your email correctly';
        validationFlag = 1;
    }
    else {
        document.getElementById("email_validation").classList.add('hide');
    }

    if (username.value.length < 3 || username.value.length > 20) {
        document.getElementById("username_validation").classList.remove('hide');
        document.getElementById("username_validation").innerHTML = 'username must be between 3 - 20 characters long';
        validationFlag = 1;
    }
    else {
        document.getElementById("username_validation").classList.add('hide');
    }

    const passwordValidation = validatePassword(password.value);
    document.getElementById("password_validation").classList.remove('hide');
    document.getElementById("password_validation").innerHTML = passwordValidation == null ? "" : passwordValidation;

    let selectedRadio = document.querySelector('input[name="gender"]:checked');
    if (selectedRadio == null || selectedRadio.length == 0){
        document.getElementById("gender_validation").classList.remove('hide');
        document.getElementById("gender_validation").innerHTML = 'Please choose one of the gender above';
        validationFlag = 1;
    }
    else {
        document.getElementById("gender_validation").classList.add('hide');
    }

    const dobValidation = validateDOB(dob.value);

    if (dobValidation === false) {
        document.getElementById("dob_validation").classList.remove('hide');
        document.getElementById("dob_validation").innerHTML = 'Please insert the correct date format (dd-mm-yyyy)';
        validationFlag = 1;
    }
    else if( dobValidation === true) {
        document.getElementById("dob_validation").classList.add('hide');
    }
    else {
        document.getElementById("dob_validation").classList.remove('hide');
        document.getElementById("dob_validation").innerHTML = dobValidation;
        validationFlag = 1;
    }


    const strUser = ddl_nationality.options[ddl_nationality.selectedIndex].value;

    if (strUser == null || strUser == ""){
        document.getElementById("nationality_validation").classList.remove('hide');
        document.getElementById("nationality_validation").innerHTML = 'Please select a nationality';
        validationFlag = 1;
    }
    else {
        document.getElementById("nationality_validation").classList.add('hide');
    }
    

    if (!checkbox.checked) {
        document.getElementById("checkbox_validation").classList.remove('hide');
        document.getElementById("checkbox_validation").innerHTML = 'Please check the box above';
        validationFlag = 1;
    }
    else {
        document.getElementById("checkbox_validation").classList.add('hide');
    }


    if (validationFlag == 0) {
        alert("You have successfully pre-registered");
        document.getElementById('redirect_div').click();
    }

})


function validateEmail(email) {
    const atChar = email.indexOf('@');

    if(atChar == null || atChar < 1 || atChar >= email.length - 1) {
        return false;
    }

    const dot = email.indexOf(".");

    let dotLocationOkay = false;
    for (let i = 0; i < email.length; i++ ){
        if(email.charAt(i) == '.' && i > atChar + 2){
            dotLocationOkay = true;
            break;
        }
    }

    if ((dot <= atChar + 2 && !dotLocationOkay) || dot == email.length - 1) return false;


    return true;

}

function validatePassword(password) {

    if (password == null || password.length <= 7) {
        return "password must be at least 8 characters long";
    }


    let hasNumber = false;
    let hasSmallCharacter = false;
    let hasBigCharacter = false;

    for (let i = 0 ; i < password.length; i++){
        var charCode = password.charCodeAt(i);
        if(charCode > 47 && charCode < 58)
            hasNumber = true;
        if(charCode > 96 && charCode < 123)
            hasSmallCharacter = true;
        if(charCode > 64 && charCode < 91)
            hasBigCharacter = true;
    }

    if (hasNumber == false)
        return "password must have number";
    if (hasSmallCharacter == false || hasBigCharacter == false)
        return "password must consists of small and big letter"

    if (hasNumber == true && hasSmallCharacter == true && hasBigCharacter == true ) {
        return "";
    }

}

function validateDOB(dob) {
    if (dob == null || dob == "") return "please fill in the date";

    if (dob.length != 10) return false;
    if (dob.charAt(2) != '-' || dob.charAt(5) != '-') return false;

    const date = parseInt(dob.charAt(0) + dob.charAt(1));
    if (date < 1 || date > 31) return false;


    const month = parseInt(dob.charAt(3) + dob.charAt(4));
    if (month < 1 || month > 12) return false;
    if (!(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 9 || month == 10 || month == 12  ) && date > 30 ) return false;

    const year = dob.charAt(6) + dob.charAt(7) + dob.charAt(8) + dob.charAt(9) 
    const currentDate = new Date();

    if (year > currentDate.getFullYear()) {
        return "year cannot be in the future"
    }

    if (year == currentDate.getFullYear() && month > currentDate.getMonth()) return "month cannot be in the future"

    if (year == currentDate.getFullYear() && month == currentDate.getMonth() && date > currentDate.getDate()) return "date cannot be in the future"

    
    if (year % 4 == 0 && month == 2 && date > 29) return false;


    if (year % 4 != 0 && month == 2 && date > 28) return false;

    if (currentDate.getFullYear() - year <= 3) return "you must be older than 3 years to register";

    return true;

}