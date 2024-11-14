describe("User melakukan Checkout", () => {
  it("Berhasil", () => {
    cy.visit(Cypress.env("baseUrl")).wait(2000);
    cy.get("#user-name").type(Cypress.env("usernameTrue"));
    cy.get("#password").type(Cypress.env("passwordTrue"));
    cy.get("#login-button").contains("LOGIN").click();
    cy.wait(2000);

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").eq(0).find("button").click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.wait(2000);

    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get("a").contains("CHECKOUT").click();
    cy.wait(2000);

    cy.url().should("include", "/checkout-step-one.html");
    cy.get("#first-name").type(Cypress.env("usernameayu"));
    cy.get("#last-name").type(Cypress.env("usernamedian"));
    cy.get("#postal-code").type(Cypress.env("kode_pos"));
    cy.get("input").contains("CONTINUE").click();
    cy.wait(2000);

    cy.url().should("include", "/checkout-step-two.html");
    cy.get("a").contains("FINISH").click();
  });
});
