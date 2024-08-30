# Cypress e2e Testing for OpenCart Demo

This project showcases end-to-end testing using Cypress for an e-commerce platform (OpenCart). It demonstrates how to automate tests for user registration, login, and product selection functionalities.

## Features Tested

The project focuses on testing critical functionalities related to user experience and product interaction:

- **User Registration**: Comprehensive tests for different registration scenarios, including missing fields and duplicate emails.
- **User Login**: Tests for login functionality with valid and invalid credentials.
- **Product Selection**: Tests for selecting products from the homepage and verifying their details on the product page.

## Highlights

- **Reusable Page Object Model**: Organized code structure using the Page Object Model pattern to maintain clean and reusable test code.
- **Environment Configuration**: Environment-specific configurations using Cypress environment files to manage different setups.
- **Error Handling**: Comprehensive error handling to capture unexpected behavior during testing.

## Challenges Faced

While setting up the tests, several challenges were encountered that impacted the ability to complete full end-to-end testing:

1. **Cart Management Issues**: Unable to update cart quantities due to server-side restrictions or CAPTCHA mechanisms that block automated requests.
2. **Payment Processing Limitations**: The site's security settings prevented automated tests from processing payments, resulting in blocked requests.
3. **Order Confirmation Blockages**: Due to server-side protections, order confirmation steps could not be tested.

## What Could Be Improved

Despite these challenges, this project lays the groundwork for more comprehensive e-commerce testing:

- **Integration with Mock APIs**: To bypass server-side restrictions and simulate successful responses.
- **Advanced Error Handling**: To manage more complex cases where network or server-side issues occur.
- **Potential Use of Test Doubles**: Explore the use of stubbing and mocking to simulate server responses more effectively.

## Setup
To run the tests:
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npx cypress open` to start Cypress Test Runner.

## Contact
If you have any questions, feel free to contact me through [https://www.linkedin.com/in/tipakorn-lj/].