const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const form = document.querySelector("form");

function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === "") {
        setError(nameInput, "A neve szükséges!");
        return false;
    } else {
        setSuccess(nameInput);
        return true;
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
        setError(emailInput, "Az email címe szükséges!");
        return false;
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, "Kérem adjon meg működő email címet.");
        return false;
    } else {
        setSuccess(emailInput);
        return true;
    }
}

function setError(input, message) {
    const parent = input.parentElement;
    const error = parent.querySelector(".error");
    input.classList.add("error");
    error.innerText = message;
}

function setSuccess(input) {
    const parent = input.parentElement;
    const error = parent.querySelector(".error");
    input.classList.remove("error");
    error.innerText = "";
}

function isValidEmail(email) {
    const emailRegex = /^[\w-]+\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    if (isNameValid && isEmailValid) {
        form.submit();
    }
});