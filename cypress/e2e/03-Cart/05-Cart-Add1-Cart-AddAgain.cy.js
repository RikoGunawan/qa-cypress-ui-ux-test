describe("Add 1 item form cart menu Success", () => {
  it("passes", () => {
    cy.login();
    // yang di click adalah elemen pertama yang cocok sama containsnya
    cy.contains(/add to cart/i).click();
    //   keliatan jadi ada 2 di keranjang
    cy.get(".fa-layers-counter").should("contain", 1);

    cy.get(".shopping_cart_link").click();

    // kembali ke all items
    cy.contains(/continue shopping/i).click();
    //   add cart item lagi
    cy.contains(/add to cart/i).click();
    //   harusnya jadi 2
    cy.get(".fa-layers-counter").should("contain", 2);
  });
});
