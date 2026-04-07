describe('Navegação do Menu Principal', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Deve rolar a página até a seção "Nossas iniciativas" ao clicar no link do menu', () => {
        cy.get('a[aria-label="Navegar para a página Nossas Iniciativas"]')
            .should('be.visible')
            .click();


        cy.get('#nossas-iniciativas')
            .should('be.visible')
            .and('contain.text', 'Nossas iniciativas');

        cy.window().its('scrollY').should('be.greaterThan', 0);
    });
});
