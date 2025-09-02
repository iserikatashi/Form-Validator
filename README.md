## Registration Form Validation (JavaScript)

This is a simple client-side form validation script built with vanilla JavaScript. It ensures user inputs are correct before submitting the form.

Features

Required Fields Check: Ensures that all fields are filled.

Username Length Validation: Must be between 3 and 15 characters.

Email Validation: Checks for a proper email format.

Password Length Validation: Must be between 6 and 25 characters.

Confirm Password Match: Ensures the confirmation password matches the original.

Visual Feedback: Shows success or error messages under each input.


How It Works

On form submission, the script prevents the default action (e.preventDefault()).

checkRequired validates that no field is empty.

checkLength, checkEmail, and checkPasswordMatch validate specific rules for each input.

showError and showSuccess update the UI with messages and colors.


Usage

1. Include this script in your HTML file.


2. Make sure each input has a corresponding <small> element for error messages.


3. Customize validation rules or messages as needed.
