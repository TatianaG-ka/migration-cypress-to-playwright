import { checkoutPage } from "../../../../support/pages/checkoutPage.js";
import { homePage } from "../../../../support/pages/homePage.js";
import { loginPage } from "../../../../support/pages/loginPage.js";
const data = require("../../../../fixtures/productData.json");

describe("Verify buying processes - products from home page", () => {
  it("Add a product and confirm a failed payment process", () => {
    // Arrange
    const warningMessage = "Warning: Payment method required!×";
    const successMessageAddedToCartExpected = `Success: You have added ${data.product} to your shopping cart! ×`;

    cy.openHomePage();
    loginPage.loginUser();
    homePage.clearCart();

    // Act
    homePage.addProductToCart();

    // Assert
    cy.get(homePage.webLocators.successMessageAddedToCartActual)
      .should("contain", successMessageAddedToCartExpected)
      .and("contain", data.product);

    //Act
    homePage.clickOnCartAndPopupDisplays();
    cy.get(homePage.webLocators.cartWithProduct).should("contain.text", data.product);

    homePage.webLocators.checkout().first().click();
    checkoutPage.enterBillingAddress();
    checkoutPage.selectPaymentMethods();

    // Assert
    checkoutPage.webLocators
      .alertMessage({ timeout: 10000 })
      .should("have.text", warningMessage);
  });
});
