describe("Berhasil menambahkan 1 barang lagi ke keranjang", () => {
    it("passess", () => {
        cy.visit(Cypress.env('baseUrl')).wait(2000);
        cy.get('#user-name').type(Cypress.env('username'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#login-button').contains("LOGIN").click();
        cy.wait(3000);

        cy.get('button').contains("Open Menu").click();
        cy.get('#inventory_sidebar_link').contains("All Items").click();
        cy.get('body').contains("ADD TO CART").click(); //menambahkan 1 barang ke keranjang
        cy.wait(2000);

        cy.get('path').click();
        cy.wait(2000);

        cy.get('a').contains("Continue Shopping").click();
        cy.wait(2000);

        cy.get('body').contains("ADD TO CART").click(); //menambahkan 1 barang ke keranjang
        cy.wait(2000);

        cy.get('path').click();
        cy.wait(2000);
        
    })
})
