describe("Add 1 Item Success", () => {
  it("passes", () => {
    cy.login();
    // yang di click adalah elemen pertama yang cocok sama containsnya
    cy.contains(/add to cart/i).click();
    cy.get(".fa-layers-counter").should("contain", 1);
    cy.contains(/remove/i).click();
    // yang counter nya harusnya jadi gada
    cy.get(".fa-layers-counter").should("not.exist");
  });
});
