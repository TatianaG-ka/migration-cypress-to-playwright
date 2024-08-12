export class RegisterPage {
  webLocators = {
    myAccount: () => cy.get("a[title='My Account']"),
    register: () => cy.get("a:contains('Register')"),
    firstName: () => cy.get("input[name='firstname']"),
    lastName: () => cy.get("input[name='lastname']"),
    email: () => cy.get("input#input-email"),
    telephone: () => cy.get("input#input-telephone"),
    password: () => cy.get("input#input-password"),
    confirmPassword: () => cy.get("input#input-confirm"),
    agreePolicy: () => cy.get("input[name='agree']"),
    continueButton: () => cy.get("input.btn.btn-primary"),
  };

  clickOnRegisterButton() {
    this.webLocators.myAccount().click();
    this.webLocators.register().click();
  }

  fillRegisterFields(userData) {
    this.webLocators.firstName().type(userData.firstName);
    this.webLocators.lastName().type(userData.lastName);
    this.webLocators.email().type(userData.email);
    this.webLocators.telephone().type(userData.telephone);
    this.webLocators.password().type(userData.password);
    this.webLocators.confirmPassword().type(userData.password);
    this.webLocators.agreePolicy().check();
  }

  clickContinueButton() {
    this.webLocators.continueButton().click();
  }
}

export const registerPage = new RegisterPage();
