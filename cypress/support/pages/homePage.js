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
    removeButton: () => cy.get("button[title='Remove']"),
    successMessageAddedToCartActual: () =>
      cy.get("div.alert.alert-success.alert-dismissible"),
    cartWithProduct: () => cy.get("#cart").contains(data.product),
  };

  clearCart() {
    this.webLocators.cart().click();
    if (this.webLocators.removeButton().should("be.visible")) {
      this.webLocators.removeButton().click();
    } else {
      console.log("Cart is already empty.");
    }
  }

  addProductToCart() {
    this.webLocators.search().clear();
    this.webLocators.search().type(data.product);
    this.webLocators.searchProduct().click();
    this.webLocators.addToCartButton().click();
  }

  clickOnCartAndPopupDisplays() {
    this.webLocators.cart().click();
  }
}

export const homePage = new HomePage();
