import { loginData } from "../test-data/login.data";

export class LoginPage {
  constructor(page) {
    this.page = page;

    this.myAccount = this.page.getByRole("link", { name: "My Account" });
    this.login = this.page.getByRole("link", { name: "Login" });
    this.emailField = this.page.getByPlaceholder("E-Mail Address");
    this.passwordField = this.page.getByPlaceholder("Password");
    this.loginSubmit = this.page.getByRole("button", { name: "Login" });
  }

  async loginUser() {
    await this.myAccount.first().click();
    await this.login.click();
    await this.emailField.fill(loginData.email);
    await this.passwordField.fill(loginData.password);
    await this.loginSubmit.click();
  }
}
