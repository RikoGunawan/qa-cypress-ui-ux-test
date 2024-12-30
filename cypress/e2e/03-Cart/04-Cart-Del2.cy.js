describe("Del 2 Item Success", () => {
  it("passes", () => {
    cy.login();
    // yang di click adalah elemen pertama yang cocok sama containsnya
    cy.contains(/add to cart/i).click();
    cy.contains(/add to cart/i).click();
    //   keliatan jadi ada 2 di keranjang
    cy.get(".fa-layers-counter").should("contain", 2);
    cy.contains(/remove/i).click();
    //   klik yang remove el kedua
    cy.contains(/remove/i).click();
    cy.get(".fa-layers-counter").should("not.exist");
  });
});
