export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstName = this.page.locator("input[name='firstname']");
    this.lastName = this.page.locator("input[name='lastname']");
    this.address = this.page.locator("input#input-payment-address-1");
    this.city = page.locator("input#input-payment-city");
    this.continue = this.page.getByRole("button", { name: "Continue" });
    this.loggedIn = this.page.locator("input[value='existing']");
    this.alertMessage = this.page.locator("#collapse-payment-method");
    this.agreePolicy = this.page.getByRole("checkbox");
    this.paymentMethodContinue = this.page.getByRole("button", {
      name: "Continue",
    });
  }

  async enterBillingAddress() {
    await this.continue.click();
  }

  async selectPaymentMethods() {
    await this.agreePolicy.check();
    await this.paymentMethodContinue.click();
  }
}
