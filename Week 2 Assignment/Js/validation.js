import {addInputValidationListener, validateDateFormat, validatePasswordStrength, validateWithRegex } from './JSLibrary.js'; 

const handleValidation = () => {
    const nameInput = document.querySelector('input[name="name"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const textInput = document.querySelector('input[name="bio"]');
    const countryInput = document.querySelector('input[name="country"]');
    const termsInput = document.querySelector('input[name="terms"]');
    const dateInput = document.querySelector('input[name="dob"]');

    passwordInput.addEventListener('input', (event) => {
        const isValid = validatePasswordStrength(event.target.value, 8);
        addInputValidationListener(event.target, isValid, 'Password needs a capital letter, special character and a number.');
    });
} 


document.addEventListener('DOMContentLoaded', handleValidation)