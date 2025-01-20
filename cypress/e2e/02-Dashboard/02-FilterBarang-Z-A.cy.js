describe("Filter barang berdasarkan abjad dari Z ke A", () => {
  beforeEach(() => {
    cy.login();
    cy.visit(Cypress.env("dashboardUrl"));
  });

  it("Berhasil menampilkan urutan barang dari abjad Z ke A", () => {
    cy.get(".product_sort_container").select("za").should("have.value", "za");
    cy.get(".inventory_item_name").then((elements) => {
      const itemNames = [...elements].map((el) => el.textContent.trim());
      const sortedNames = [...itemNames].sort().reverse();
      expect(itemNames).to.deep.equal(sortedNames);
    });
  });
});
