describe("Berhasil checkout barang", () => {
    it("passess", () => {
        cy.visit(Cypress.env('baseUrl')).wait(2000);
        cy.get('#user-name').type(Cypress.env('username'));//memasukan username
        cy.get('#password').type(Cypress.env('password'));//memasukan password
        cy.get('#login-button').contains("LOGIN").click();//menekan tombol login
        cy.wait(3000);

        cy.get('body').contains("ADD TO CART").click(); //menambahkan 1 barang ke keranjang
        cy.wait(2000);

        cy.get('path').click();//menekan keranjang
        cy.wait(2000);

        cy.get('body').contains("CHECKOUT").click();//melakukan checkout
        cy.wait(2000);

        cy.get('#first-name').type(Cypress.env('firstName'));//memasukan nama depan
        cy.wait(1000);
        cy.get('#last-name').type(Cypress.env('lastName'));//memasukan nama belakang
        cy.wait(1000);
        cy.get('#postal-code').type(Cypress.env('code'));//memasukan code
        cy.wait(2000);
        cy.get('body').contains("CONTINUE").click();//lanjut
        cy.wait(2000);
        cy.get('body').contains("FINISH").click();//akhir
        cy.wait(2000);

        
    })
})
