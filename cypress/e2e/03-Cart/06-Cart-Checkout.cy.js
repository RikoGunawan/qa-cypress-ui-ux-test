describe("Checkout barang", () => {
  beforeEach(() => {
    cy.login();
    cy.visit(Cypress.env("dashboardUrl"));
  });

  it("Berhasil checkout barang", () => {
    cy.get(".btn_primary.btn_inventory").first().click();
    cy.get(".shopping_cart_badge").should("contain", "1");

    cy.get(".shopping_cart_link").click();

    cy.get(".checkout_button").click();

    cy.get("#first-name").type(Cypress.env("firstName"));
    cy.get("#last-name").type(Cypress.env("lastName"));
    cy.get("#postal-code").type(Cypress.env("zipCode"));

    cy.get('[type="submit"]').click();

    cy.get(".btn_action.cart_button").click();
  });
});
