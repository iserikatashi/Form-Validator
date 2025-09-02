const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const formNameItem = [
  { check: () => checkLength(username, 3, 15) },
  { check: () => checkEmail(email) },
  { check: () => checkLength(password, 6, 25) },
  { check: () => checkPasswordMatch(password, confirmPassword) },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, confirmPassword]).forEach(
    (valid, index) => {
      if (valid) {
        if (formNameItem[index].check() === false) {
          return false;
        }
      }
    }
  );
});

function checkLength(input, min, max) {
  if (input.value.length < min) {
    return showError(
      input,
      `${formatFieldName(input)} must be at least ${min} characters.`
    );
  } else if (input.value.length > max) {
    return showError(
      input,
      `${formatFieldName(input)} must be less than ${max} characters.`
    );
  } else {
    return showSuccess(input);
  }
}

function checkEmail(email) {
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegEx.test(email.value.trim())
    ? showSuccess(email)
    : showError(email, "Email is not valid");
}

function checkPasswordMatch(password, confirmPassword) {
  return password.value === confirmPassword.value
    ? showSuccess(confirmPassword)
    : showError(confirmPassword, `Password Dot'n Match`);
}

function checkRequired(inputArray) {
  const isValid = [];

  inputArray.forEach((input) => {
    // Password is required;
    if (input.value.trim() === "") {
      isValid.push(showError(input, `${formatFieldName(input)} is required`));
    } else {
      isValid.push(showSuccess(input));
    }
  });

  return isValid;
}

function formatFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("success");
  formGroup.classList.add("error");
  const small = formGroup.querySelector("small");
  small.innerText = message;
  return false;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("error");
  formGroup.classList.add("success");
  return true;
}
