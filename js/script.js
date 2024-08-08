const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const birthday = document.getElementById("birthday");
const gender = document.getElementById("gender");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("confirm-password");
const resetButton = document.querySelector(".btn-reset");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const birthdayValue = birthday.value;
    const genderValue = gender.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (firstnameValue === "") {
        setErrorFor(firstname, "Please enter your first name");
    } else {
        setSuccessFor(firstname, "Successful");
    }

    if (lastnameValue === "") {
        setErrorFor(lastname, "Please enter your last name");
    } else {
        setSuccessFor(lastname, "Successful");
    }

    if (emailValue === "") {
        setErrorFor(email, "Please enter your email");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Please enter a valid email");
    } else {
        setSuccessFor(email, "Successful");
    }

    if (phoneValue === "") {
        setErrorFor(phone, "Please enter your phone number");
    } else if (!checkPhoneNumber(phoneValue)) {
        setErrorFor(phone, "Enter a valid phone number ex: (12) 12345-1234");
    } else {
        setSuccessFor(phone, "Successful");
    }

    if (birthdayValue === "") {
        setErrorFor(birthday, "Please enter your date of birth");
    } else {
        setSuccessFor(birthday, "Successful");
    }

    if (genderValue === "select") {
        setErrorFor(gender, "Please select your gender");
    } else {
        setSuccessFor(gender, "Successful");
    }

    if (passwordValue === "") {
        setErrorFor(password, "Please enter your password");
    } else if (passwordValue.length < 10) {
        setErrorFor(password, "The password must be at least 10 characters long");
    } else {
        setSuccessFor(password, "Successful");
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "Password confirmation is mandatory.");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "Passwords don't match");
    } else {
        setSuccessFor(passwordConfirmation, "Successful");
    }

    const formInputs = form.querySelectorAll(".input-container");
    const formIsValid = [...formInputs].every((inputcontainer) => {
        return inputcontainer.className === "input-container success";
    });

    if (formIsValid) {
        alert("Registration Successful");
    }
}

function setErrorFor(input, messageError) {
    const inputContainer = input.parentElement;
    const span = inputContainer.querySelector("span");
    span.innerText = messageError;
    inputContainer.className = "input-container error";
}

function setSuccessFor(input, messageSuccess) {
    const inputContainer = input.parentElement;
    const span = inputContainer.querySelector("span");
    span.innerText = messageSuccess;
    inputContainer.className = "input-container success";
}

function checkPhoneNumber(phoneNumberValidator) {
    const regexPhone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return regexPhone.test(phoneNumberValidator);
}

function checkEmail(emailValidator) {
    const regexEmail = /^[a-z0-9._-]+@[a-z]+\.[a-z]{2,3}(?:\.br)?$/;
    return regexEmail.test(emailValidator);
}


resetButton.addEventListener("click", () => {
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    phone.value = "";
    birthday.value = "";
    gender.value = "select";
    password.value = "";
    passwordConfirmation.value = "";

    const inputContainers = document.querySelectorAll(".input-container");
    inputContainers.forEach(container => {
        container.classList.remove("success", "error");
        container.querySelector("span").innerText = "input status message";
    });
});
