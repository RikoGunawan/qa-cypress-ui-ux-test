describe("User checkout Success", () => {
  it("passes", () => {
    cy.login();
    // yang di click adalah elemen pertama yang cocok sama containsnya
    cy.contains(/add to cart/i).click();
    // masuk ke menu cart
    cy.get(".shopping_cart_link").click();

    //   add cart item lagi
    cy.contains(/checkout/i).click();
    cy.get("#first-name").type(Cypress.env("checkout").firstName);
    cy.get("#last-name").type(Cypress.env("checkout").lastName);
    cy.get("#postal-code").type(Cypress.env("checkout").postalCode);
    cy.contains(/continue/i).click();
    cy.contains(/finish/i).click();
    cy.contains(/thank you for your order/i);
  });
});
