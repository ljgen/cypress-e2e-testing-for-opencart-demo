export class RegisterPage {
    constructor() {
        this.firstnameInput = '#input-firstname';
        this.lastnameInput = '#input-lastname';
        this.emailInput = '#input-email';
        this.passwordInput = '#input-password';
        this.registerButton = 'button[type="submit"]';
        this.dropdownToggle = '.dropdown-toggle';
        this.dropdownItem = 'a.dropdown-item';
        this.privacyPolicyButton = 'input[name="agree"]';
        this.errorFirstname = '#error-firstname';
        this.errorLastname = '#error-lastname';
        this.erroremail = '#error-email';
        this.errorPassword = '#error-password';
        this.notificationMessage = '#alert';
        this.successMessage = 'h1';
        this.registerPageUrl = '/en-gb?route=account/register';
    }

    visitRegisterPage() {
        cy.visit('/');
        cy.wait(5000);
        cy.get(this.dropdownToggle).should('contain', 'My Account').click({ multiple: true }); // Open the dropdown
        cy.get(this.dropdownItem).contains('Register').click({ force: true });
    }

    inputRegistrationDetails(firstname, lastname, email, password) {
        this.visitRegisterPage();

        // Clear existing values ​​if first name is blank.
        if (firstname) {
            cy.get(this.firstnameInput).type(firstname);
        } else {
            cy.get(this.firstnameInput).clear();
        }

        // Clear existing values ​​if last name is blank.
        if (lastname) {
            cy.get(this.lastnameInput).type(lastname);
        } else {
            cy.get(this.lastnameInput).clear();
        }

        // Clear existing values ​​if email is blank.
        if (email) {
            cy.get(this.emailInput).type(email);
        } else {
            cy.get(this.emailInput).clear();
        }

        // Clear existing values ​​if password is blank.
        if (password) {
            cy.get(this.passwordInput).type(password);
        } else {
            cy.get(this.passwordInput).clear();
        }
    }

    acceptPrivacyPolicy() {
        cy.get(this.privacyPolicyButton).click();
    }

    submit() {
        cy.get(this.registerButton).click();
    }

    verifyFirstnameRegisterFailure() {
        cy.url().should('include', this.registerPageUrl);
        cy.get(this.errorFirstname).should('contain.text', 'First Name must be between 1 and 32 characters!');
    }

    verifyLastnameRegisterFailure() {
        cy.url().should('include', this.registerPageUrl);
        cy.get(this.errorLastname).should('contain.text', 'Last Name must be between 1 and 32 characters!');
    }

    verifyEmailRegisterFailure() {
        cy.url().should('include', this.registerPageUrl);
        cy.get(this.erroremail).should('contain.text', 'E-Mail Address does not appear to be valid!');
    }

    verifyPasswordRegisterFailure() {
        cy.url().should('include', this.registerPageUrl);
        cy.get(this.errorPassword).should('contain.text', 'Password must be between 4 and 20 characters!');
    }

    verifyPrivacyPolicyRejectionFailure() {
        cy.url().should('include', this.registerPageUrl);
        cy.get(this.notificationMessage).should('contain.text', 'Warning: You must agree to the Privacy Policy!');
    }

    verifyDuplicateEmailRegistration() {
        cy.url().should('include', this.registerPageUrl);
        cy.get(this.notificationMessage).should('contain.text', 'Warning: E-Mail Address is already registered!');
    }

    confirmRegistrationSuccess() {
        cy.get(this.successMessage).should('contain.text', 'Your Account Has Been Created!');
    }
}
