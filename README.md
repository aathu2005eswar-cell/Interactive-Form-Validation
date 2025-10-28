# Interactive Form Validation

## Overview
Interactive Form Validation is a web-based project designed to validate user input directly within a form. The validation is performed in real-time, ensuring that the user provides correct and complete information before submitting the form.

## Objective
The primary objective is to:
- Prevent incorrect or incomplete data submission.
- Provide instant feedback to the user.
- Improve overall usability and user experience.

## Features
- Real-time validation feedback.
- Error messages displayed for invalid inputs.
- Highlights input fields based on validation status.
- Ensures required fields are filled before submission.
- Validates formats like email, phone number, and password strength.

## Technologies Used
| Technology | Description |
|-----------|-------------|
| **HTML** | Used to structure the form layout. |
| **CSS** | Used to style the form and validation messages. |
| **JavaScript** | Used to perform real-time input validation. |

## How It Works
1. The user enters data into the form fields.
2. JavaScript checks the input instantly.
3. If invalid data is detected:
   - The field is highlighted in **red**.
   - An **error message** is displayed.
4. When the input becomes valid:
   - The error message disappears.
   - The field gets highlighted in **green**.

## Example Validation Rules
| Input Field | Validation Rule |
|------------|----------------|
| **Name** | Must contain only alphabetic characters. |
| **Email** | Must follow a valid email format (example: `name@example.com`). |
| **Phone Number** | Must contain only digits (length may be enforced). |
| **Password** | Must be at least 6 characters long. |

## Benefits
- Enhances user experience.
- Reduces server-side validation load.
- Ensures accurate and clean data input.
- Prevents form submission errors.

## Conclusion
This project demonstrates the importance of validating user input on the client-side. It ensures that users provide valid and complete data, improving the reliability and usability of web forms.
