
export class RegisterPage {
    constructor(page) {
      this.page = page;
  
      this.myAccount = this.page.getByRole("link", { name: "My Account" });
      this.register = this.page.getByRole("link", { name: "Register" });
      this.firstName = this.page.getByPlaceholder("First Name");
      this.lastName = this.page.getByPlaceholder("Last Name");
      this.email = this.page.getByPlaceholder("E-Mail");
      this.telephone = this.page.getByPlaceholder("Telephone");
      this.password = this.page.getByPlaceholder("Password", { exact: true });
      this.confirmPassword = this.page.getByPlaceholder("Password Confirm");
      this.agreePolicy = this.page.getByRole("checkbox");
      this.continueButton = this.page.getByRole("button", { name: "Continue" });
    }
  
    async clickOnRegisterButton() {
      await this.myAccount.first().click();
      await this.register.click();
    }
  
    async fillRegisterFields(userData) {
      await this.firstName.waitFor({ state: 'visible', timeout: 10000 });
  
      await this.firstName.fill(userData.firstName);
      await this.lastName.fill(userData.lastName);
      await this.email.fill(userData.email);
      await this.telephone.fill(userData.telephone);
      await this.password.fill(userData.password);
      await this.confirmPassword.fill(userData.password);
      await this.agreePolicy.check();
    }
  
    async clickContinueButton() {
      await this.continueButton.click();
    }
  }
  
