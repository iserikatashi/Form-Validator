# Redmi – JavaScript Registration Form Validation

**Redmi** is a simple and user-friendly form validation script built with vanilla JavaScript. It ensures users enter valid data before submitting a registration form, with real-time feedback for each input field.

## Features

- **Required Fields Check:** Ensures all fields are filled.  
- **Username Validation:** Must be between 3 and 15 characters.  
- **Email Validation:** Checks for a proper email format.  
- **Password Validation:** Must be between 6 and 25 characters.  
- **Confirm Password Match:** Ensures the confirmation password matches the original.  
- **Live Feedback:** Shows success or error messages directly under each input field.  

## How It Works

- Prevents default form submission using `e.preventDefault()`.  
- `checkRequired` validates that no input is left empty.  
- `checkLength`, `checkEmail`, and `checkPasswordMatch` validate specific rules for each input.  
- `showError` and `showSuccess` update the UI to indicate errors or success.

## Usage

1. Include this JavaScript file in your HTML project.  
2. Ensure each input has a corresponding `<small>` element for messages.  
3. Customize validation rules or messages as needed.
