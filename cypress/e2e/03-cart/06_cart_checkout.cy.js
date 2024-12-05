describe("Cart Checkout, User melakukan checkout barang", () => {
  it("passess", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(Cypress.env("usernameTrue"));
    cy.get("#password").type(Cypress.env("passwordTrue"));
    cy.get("#login-button").contains("LOGIN").click();
    cy.wait(5000);
    cy.get(
      "body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)",
    ).click();
    cy.get("#shopping_cart_container").click();
    cy.wait(1000);
    cy.get(".btn_action.checkout_button").click();
    cy.get("#first-name").type(Cypress.env("firstName"));
    cy.get("#last-name").type(Cypress.env("lastName"));
    cy.get("#postal-code").type(Cypress.env("kodePos"));
    cy.get("input[value='CONTINUE']").click();
    cy.get(".btn_action.cart_button").click();
  });
});
