const data = require("../../fixtures/usersData.json");

export class CheckoutPage {
  webLocators = {
    firstName: () => cy.get("input[name='firstname']"),
    lastName: () => cy.get("input[name='lastname']"),
    address: () => cy.get("input#input-payment-address-1"),
    city: () => cy.get("input#input-payment-city"),
    country: () => cy.get("select#input-payment-country").select(data.country),
    region: () => cy.get("select#input-payment-zone").select(data.region),
    continue: () => cy.get("input[type='button']"),
    loggedIn: () => cy.get("input[value='existing']"),
    alertMessage: () =>
      cy.get(
        "#accordion > div:nth-child(3) .alert.alert-danger.alert-dismissible"
      ),
    agreePolicy: () => cy.get("input[name='agree']"),
    paymentMethodContinue: () => cy.get("input#button-payment-method"),
  };

  enterBillingAddress() {
    this.webLocators.continue().click();
  }

  selectPaymentMethods() {
    this.webLocators.agreePolicy().check();
    this.webLocators.paymentMethodContinue().click();
  }
}

export const checkoutPage = new CheckoutPage();
