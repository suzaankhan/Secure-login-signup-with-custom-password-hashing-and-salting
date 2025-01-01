# Secure-login-signup-with-custom-password-hashing-and-salting
The system is built using React for the frontend, Express.js for the backend, and utilizes XAMPP for hosting the SQL database through phpMyAdmin. It incorporates robust security measures with a custom double-hashing algorithm to secure passwords.

![Image](./assets/main.jpg)
![Image](./assets/login.jpg)
![Image](./assets/register.jpg)
![Image](./assets/hashed.jpg)

## Frontend (React):
- Users can register and log in through interactive forms.
- Inputs are validated client-side to prevent invalid data submission.
- 
## Backend (Express.js):
- Handles API requests for user registration and authentication.
- Implements the custom double-hashing logic for password processing.

## Password Hashing:
Step 1: Each character in the password is replaced with a 3-character alphanumeric code based on a predefined key-value map.
Step 2: The resulting alphanumeric hash is transformed into a numeric hash.
Step 3: A random salt is appended to the numeric hash.
Step 4: The salted hash is stored securely in the SQL database.
