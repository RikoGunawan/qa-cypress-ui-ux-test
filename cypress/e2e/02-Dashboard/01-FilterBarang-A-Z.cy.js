describe("Filter barang berdasarkan abjad dari A ke Z", () => {
  beforeEach(() => {
    cy.login(); // Panggil command custom untuk login
    cy.visit(Cypress.env("dashboardUrl"));
  });

  it("Berhasil menampilkan urutan barang dari abjad A ke Z", () => {
    cy.get(".product_sort_container").select("az").should("have.value", "az");
    cy.get(".inventory_item_name").then((elements) => {
      const itemNames = [...elements].map((el) => el.textContent.trim());
      const sortedNames = [...itemNames].sort();
      expect(itemNames).to.deep.equal(sortedNames);
    });
  });
});
