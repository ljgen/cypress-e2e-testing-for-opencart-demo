export class LoginPage {
    constructor() {
        this.emailInput = '#input-email';
        this.passwordInput = '#input-password';
        this.loginButton = 'button[type="submit"]';
        this.dropdownToggle = '.dropdown-toggle';
        this.dropdownItem = 'a.dropdown-item';
        this.notificationMessage = '#alert';
        this.loginPageUrl = '/en-gb?route=account/login';
    }

    visitLoginPage() {
        cy.visit('/');
        cy.wait(5000);
        cy.get(this.dropdownToggle).should('contain', 'My Account').click({ multiple: true }); // Open the dropdown
        cy.get(this.dropdownItem).contains('Login').click({ force: true });
    }

    login(email, password) {
        this.visitLoginPage();
        cy.get(this.emailInput).type(email);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }

    verifyEmailLoginFailure() {
        cy.url().should('include', this.loginPageUrl);
        cy.get(this.notificationMessage).should('contain.text', 'Warning: No match for E-Mail Address and/or Password.');
    }

    verifyPasswordLoginFailure() {
        cy.url().should('include', this.loginPageUrl);
        cy.get(this.notificationMessage).should('contain.text', 'Warning: No match for E-Mail Address and/or Password.');
    }

    confirmLoginSuccess() {
        cy.url().should('include', 'account');
    }
}
