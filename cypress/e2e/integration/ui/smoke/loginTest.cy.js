import { loginPage } from "../../../../support/pages/loginPage";

describe("Login Test ", () => {
  it("Successfully logs in", () => {
    //Array
    const userAccount = "My Account";
    cy.openHomePage();

    //Act
    loginPage.loginUser();

    //Assert
    cy.contains(userAccount).should("be.visible");
  });
});
