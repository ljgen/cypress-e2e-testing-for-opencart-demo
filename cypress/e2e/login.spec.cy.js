import { LoginPage } from '../support/pages/LoginPage';
import { RegisterPage } from '../support/pages/RegisterPage';

describe('Registration and Login Tests', () => {
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();

  before(() => {
    cy.visit('/');
    // Avoid the bootstrap is not defined error
    cy.reload();
    cy.wait(500);
  });

  it('Visit the registration page', () => {
    registerPage.visitRegisterPage();
    cy.url().should('include', '/en-gb?route=account/register');
  });

  it('Visit the login page', () => {
    loginPage.visitLoginPage();
    cy.url().should('include', '/en-gb?route=account/login');
  });

  it('Register with missing first name', () => {
    registerPage.inputRegistrationDetails('', 'Dadadad123', 'john.Dadadad123@example.com', 'SecurePass12345q!');
    registerPage.acceptPrivacyPolicy();
    registerPage.submit();
    registerPage.verifyFirstnameRegisterFailure();
  });

  it('Register with missing last name', () => {
    registerPage.inputRegistrationDetails('John', '', 'john.Dadadad123@example.com', 'SecurePass12345q!');
    registerPage.acceptPrivacyPolicy();
    registerPage.submit();
    registerPage.verifyLastnameRegisterFailure();
  });

  it('Register with missing email', () => {
    registerPage.inputRegistrationDetails('John', 'Dadadad123', '', 'SecurePass12345q!');
    registerPage.acceptPrivacyPolicy();
    registerPage.submit();
    registerPage.verifyEmailRegisterFailure();
  });

  it('Register with missing password', () => {
    registerPage.inputRegistrationDetails('John', 'Dadadad123', 'john.Dadadad123@example.com', '');
    registerPage.acceptPrivacyPolicy();
    registerPage.submit();
    registerPage.verifyPasswordRegisterFailure();
  });

  // In case of registration and not accepting the privacy policy
  it('Register with reject privacy policy', () => {
    registerPage.inputRegistrationDetails('John', 'Dadadad123', 'john.Dadadad123@example.com', 'SecurePass12345q!');
    registerPage.submit();
    registerPage.verifyPrivacyPolicyRejectionFailure();
  });

  it('Registration successful', () => {
    registerPage.inputRegistrationDetails('John', 'Dadadad123', 'john.Dadadad123@example.com', 'SecurePass12345q!');
    registerPage.acceptPrivacyPolicy();
    registerPage.submit();
    registerPage.confirmRegistrationSuccess();
  });

  // In case of duplicate email registration
  it('Duplicate email registration', () => {
    registerPage.inputRegistrationDetails('John', 'Dadadad123', 'john.Dadadad123@example.com', 'SecurePass12345q!');
    registerPage.acceptPrivacyPolicy();
    registerPage.submit();
    registerPage.verifyDuplicateEmailRegistration();
  });

  it('Login with invalid email', () => {
    loginPage.login('john.Dadadad123wrong@example.com', 'SecurePass12345q!');
    loginPage.verifyEmailLoginFailure();
  });

  it('Login with invalid password', () => {
    loginPage.login('john.Dadadad123@example.com', 'wrongpassword12345q!');
    loginPage.verifyPasswordLoginFailure();
  });

  it('Login successful', () => {
    loginPage.login('john.Dadadad123@example.com', 'SecurePass12345q!');
    loginPage.confirmLoginSuccess();
  });
});
