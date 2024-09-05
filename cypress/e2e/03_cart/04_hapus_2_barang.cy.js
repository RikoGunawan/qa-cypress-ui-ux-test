describe("user melakukan hapus 2 barang dari keranjang", () => {
    it("passess", () => {
        cy.visit(Cypress.env('baseUrl')).wait(2000);
        cy.get('#user-name').type(Cypress.env('username'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#login-button').contains("LOGIN").click();
        cy.wait(2000);

        cy.get('button').contains("Open Menu").click();
        cy.get('#inventory_sidebar_link').contains("All Items").click();//pergi ke halaman all item
        cy.wait(2000);
        cy.get('body').contains("ADD TO CART").click(); //menambahkan 1 barang ke keranjang
        cy.wait(1000);
        cy.get('body').contains("ADD TO CART").click();//menambahkan 2 barang ke keranjang
        cy.wait(1000);

        cy.get('body').contains("REMOVE").click();//menghapus 1 barang dari keranjang
        cy.wait(1000);
        cy.get('body').contains("REMOVE").click();//menghapus 2 barang dari keranjang
        cy.wait(1000);
    })
})
