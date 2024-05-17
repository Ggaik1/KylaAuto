describe('Find Carrot and add to card', () => {
    it('Add Cart function', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').click().type('cArRoT');
        cy.wait(2000);
        cy.get('.product-action:visible').click();
        cy.get('.cart-icon').click();
        cy.get('.cart-preview.active').find('.cart-item').should('have.length', 1);
        cy.get('.product-info').find('.product-name').should('contain', 'Carrot'); // ('contain', /carrot/i); - "i" is for case insensitivity 
    });
});