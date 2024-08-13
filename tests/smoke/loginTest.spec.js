import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/login.pw.page.js";

test.describe("Login test", () => {
  test("Successfully logs in", async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const userAccount = "My Account";
    await page.goto("");

    // Act
    await loginPage.loginUser();

    // Assert
    await expect(page.getByText(userAccount).first()).toBeVisible();
    await expect(page.locator("#account-account")).toContainText("Account");
  });
});
