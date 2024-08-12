const data = require("../../fixtures/productData.json");

export class HomePage {
  webLocators = {
    search: () => cy.get("input[name='search']"),
    addToCartButton: () => cy.get("div.button-group>button").first(),
    searchProduct: () => cy.get("button.btn.btn-default.btn-lg"),
    cart: () => cy.get("span#cart-total"),
    viewCart: () => cy.get("#cart button"),
    clearCart: () => cy.get("button[title='Remove']"),
    checkout: () => cy.contains("Checkout"),
  };

  clearCart() {
    this.webLocators.cart().then((value) => {
      const cartValue = value.text();
      if (cartValue !== "0 item(s) - $0.00") {
        this.webLocators.cart().click();
        this.webLocators.clearCart().first().click({ force: true });
      }
    });
  }

  addProductToCart() {
    this.webLocators.search().clear();
    this.webLocators.search().type(data.product);
    this.webLocators.searchProduct().click();
    this.webLocators.addToCartButton().click();
  }

  verifyCartPopup() {
    // Ensure the dropdown is visible
    this.webLocators.viewCart().trigger("mouseover").click();
    cy.contains(data.product, { timeout: 10000 }).should("be.visible");
  }

  clickOnCheckout() {
    this.webLocators.checkout().click();
  }
}

export const homePage = new HomePage();
