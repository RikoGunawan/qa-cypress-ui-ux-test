describe("Add 1 Item Success", () => {
  it("passes", () => {
    cy.login();
    // yang di click adalah elemen pertama yang cocok sama containsnya
    cy.contains(/add to cart/i).click();
    //   jadi muncul counter sebanyak 1
    cy.get(".fa-layers-counter").should("contain", 1);
  });
});
