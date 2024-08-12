const data = require("../../fixtures/loginData.json");

export class LoginPage {
  webLocators = {
    myAccount: () => cy.get("a[title='My Account']"),
    login: () => cy.get("a:contains('Login')"),
    email: () => cy.get("input#input-email"),
    password: () => cy.get("input#input-password"),
    loginSubmit: () => cy.get("input[value='Login']"),
  };

  loginUser() {
    this.webLocators.myAccount().click();
    this.webLocators.login().click();
    this.webLocators.email().type(data.email);
    this.webLocators.password().type(data.password);
    this.webLocators.loginSubmit().click();
  }
}

export const loginPage = new LoginPage();
