// Importing the functions
import { createForm, addFormField, createTextInput, createPasswordInput, createTextarea, createDropdown, createCheckboxInput, createRadioInput, createDateInput, createFileInput, addSubmitEventListener, setRequiredTrue } from './JSLibrary.js'; // Adjust the path as needed

// Create the form
const form = createForm('Form', '/submit', 'POST');

// Add Bootstrap classes to the form
form.classList.add('container', 'mt-5');

// Create and add form fields
const nameField = createTextInput('name', 'Name:', 'Enter your name', '');
setRequiredTrue(nameField);
const passwordField = createPasswordInput('password', 'Password:', 'Enter your password');
const bioField = createTextarea('bio', 'Biography:', 'Tell us about yourself', '');
const countryField = createDropdown('country', [{ value: 'us', text: 'United States' }, { value: 'ca', text: 'Canada' }], 'Country:');
const termsField = createCheckboxInput('terms', 'I agree to the terms and conditions', false);
const genderField = createRadioInput('gender', 'male', 'Male', true);
const genderField2 = createRadioInput('gender', 'female', 'Female', false);
const dobField = createDateInput('dob', 'Date of Birth:', '');
const fileField = createFileInput('resume', 'Upload your resume:', 'application/pdf');

// Append fields to the form
addFormField(form, nameField);
addFormField(form, passwordField);
addFormField(form, bioField);
addFormField(form, countryField);
addFormField(form, termsField);
addFormField(form, genderField);
addFormField(form, genderField2);
addFormField(form, dobField);
addFormField(form, fileField);

// Create and add a submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
submitButton.classList.add('btn', 'btn-primary');
form.appendChild(submitButton);

// Add form to the document body
document.body.appendChild(form);




// Add submit event listener
addSubmitEventListener(form, async (event) => {
    // Handle form submission here
    console.log('Form submitted!');
});

