import { registerPage } from "../../../../support/pages/registerPage.js";
import { faker } from "@faker-js/faker";

describe("User registration with dynamic data", () => {
  let userData;

  beforeEach("", () => {
    cy.openHomePage();

    userData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      telephone: faker.phone.number(),
      password: faker.internet.password(),
    };
  });

  it("successfully registers with a dynamically generated user", () => {
    //Array
    const successMessage = "Your Account Has Been Created!";
    registerPage.clickOnRegisterButton();

    //Act
    registerPage.fillRegisterFields(userData);
    registerPage.clickContinueButton();

    //Assert
    cy.contains(successMessage).should("be.visible");
  });
});
