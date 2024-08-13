import { productData } from "../test-data/product.data";

export class HomePage {
  constructor(page) {
    this.page = page;

    this.search = this.page.getByPlaceholder("Search");
    this.addToCartButton = this.page.getByRole("button", {
      name: " Add to Cart",
    });
    this.searchProduct = this.page.getByRole("button", { name: "" });
    this.successMessageAddedToCartActual = this.page.locator(
      "div.alert.alert-success.alert-dismissible"
    );
    this.cart = this.page.locator("#cart-total");
    this.cartWithProduct = this.page
      .locator("#cart")
      .getByText(productData.product);
    this.emptyCartMessage = this.page.getByText("Your shopping cart is empty!");
    this.removeButton = this.page.locator("button[title='Remove']");
    this.viewCart = this.page.locator("#cart button");
    this.checkout = this.page
      .locator("#cart")
      .getByRole("link", { name: " Checkout" });
    this.cartButton = this.page.locator("#cart");
  }

  async clearCart() {
    await this.cart.click();
    if (await this.removeButton.isVisible()) {
      await this.removeButton.click(); // Click to remove an item if the cart is not empty
    } else {
      console.log("Cart is already empty.");
    }
  }

  async addProductToCart() {
    await this.search.clear();
    await this.search.fill(productData.product);
    await this.searchProduct.click();
    await this.addToCartButton.first().click();
  }

  async clickOnCartAndPopupDisplays() {
    await this.cart.click();
  }
}
