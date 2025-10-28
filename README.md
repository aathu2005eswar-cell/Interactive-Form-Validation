Project Title

Interactive Form Validation

Objective

The objective of this project is to validate user inputs in a web form to ensure that all required fields are correctly filled before submission. The system provides real-time feedback to users, improving the usability and preventing incorrect data entry.

Description

This project includes a form where users enter details such as Name, Email, Password, Phone Number, and more. The form uses client-side validation to check the inputs. If the user enters invalid data, an error message is displayed instantly. When all inputs are correct, the form allows successful submission.

Features

Real-time input validation

Error messages displayed for invalid input

Ensures mandatory fields are filled

Email and phone format validation

Password strength checking

Clean and user-friendly interface


Technologies Used

Technology	Purpose

HTML	Structure of the form
CSS	Styling and layout
JavaScript	Input validation and interactivity


How It Works

1. User enters details into the form fields.


2. JavaScript checks each field:

If input is valid → field border turns green or success message shows.

If input is invalid → field border turns red, and an error message appears.



3. Form can only be submitted when all fields are valid.



Validation Checks Example

Field	Validation Rule

Name	Must not be empty and only contain letters
Email	Must follow standard email format (abc@example.com)
Phone Number	Must contain only digits and be of correct length
Password	Must be minimum 6 characters


Advantages

Reduces incorrect data submission

Improves user experience

Quick error identification

No extra server load (validation happens on browser)


Conclusion

The Interactive Form Validation project helps ensure that only correct and complete information is submitted. It enhances usability by providing instant feedback and improves data accuracy.
