import { test, expect } from "@playwright/test";

import { LoginPage } from "../../src/pages/login.pw.page.js";
import { HomePage } from "../../src/pages/home.pw.page.js";
import { CheckoutPage } from "../../src/pages/checkout.pw.page.js";
import { productData } from "../../src/test-data/product.data.js";

test.describe("Verify buying processes - products from home page", () => {
  test("Add a product and confirm a failed payment process", async ({
    page,
  }) => {
    // Arrange
    const warningMessage = "Warning: Payment method required!×";
    const successMessageAddedToCartExpected = `Success: You have added ${productData.product} to your shopping cart! ×`;

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto("");
    await loginPage.loginUser();
    await homePage.clearCart(); 

    // Act
    await homePage.addProductToCart();

    //Assert
    await expect(homePage.successMessageAddedToCartActual).toHaveText(
      successMessageAddedToCartExpected
    );

    //Act
    homePage.clickOnCartAndPopupDisplays();
    await expect(homePage.cartWithProduct).toContainText(productData.product);
    await homePage.checkout.first().click();

    await checkoutPage.enterBillingAddress();
    await checkoutPage.selectPaymentMethods();

    // Assert 
    await expect(checkoutPage.alertMessage).toContainText(warningMessage);
  });
});
