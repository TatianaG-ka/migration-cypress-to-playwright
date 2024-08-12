import { checkoutPage } from "../../../../support/pages/checkoutPage.js";
import { homePage } from "../../../../support/pages/homePage.js";
import { loginPage } from "../../../../support/pages/loginPage.js";
const data = require("../../../../fixtures/productData.json");

describe("Verify buying processes - products from home page", () => {
  it("Add a product and confirm a failed payment process", () => {
    // Arrange
    const warningMessage = "Warning: Payment method required!×";
    const successMessageAddedToCart = `Success: You have added ${data.product} to your shopping cart!`;
    cy.openHomePage();
    loginPage.loginUser();
    homePage.clearCart(); // Ensure cart is empty before starting the test

    // Act
    homePage.addProductToCart();

    // Assert
    cy.get("div.alert.alert-success.alert-dismissible")
      .should("contain", successMessageAddedToCart)
      .and("contain", data.product);

    homePage.verifyCartPopup();

    // Act
    homePage.clickOnCheckout();
    checkoutPage.enterBillingAddress();
    checkoutPage.selectPaymentMethods();

    // Assert for order completion
    checkoutPage.webLocators
      .alertMessage({ timeout: 10000 })
      .should("have.text", warningMessage);
  });
});
