import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../src/pages/register.pw.page";
import { faker } from "@faker-js/faker";

test.describe("User registration with dynamic data", () => {
  let userData;

  test.beforeEach(async ({ page }) => {
    userData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      telephone: faker.phone.number(),
      password: faker.internet.password(),
    };
  });

  test("successfully registers with a dynamically generated user", async ({
    page,
  }) => {
    await page.goto(""); 
    const registerPage = new RegisterPage(page);
    const successMessage = "Your Account Has Been Created!";

    // Act
    await registerPage.clickOnRegisterButton();
    await registerPage.fillRegisterFields(userData);
    await registerPage.clickContinueButton();

    // Assert
    await expect(page.locator("h1")).toContainText(successMessage);
  });
});
