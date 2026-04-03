describe('Seção: Nossas Iniciativas', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');

    // Força o scroll até a seção para acionar o lazy loading e renderizar os cards no DOM
    cy.get('#nossas-iniciativas').scrollIntoView().should('be.visible');
  });

  it('Deve validar a integridade do card SouJunior Labs e o redirecionamento', () => {
    // Sobe 2 níveis na árvore do DOM a partir do título para isolar o escopo do Cypress apenas neste card
    cy.contains('h2', 'SouJunior Labs').parent().parent().within(() => {

      cy.get('img[alt="SouJunior Labs"]')
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0); // Garante que a imagem carregou e não está quebrada
        });

      cy.get('h2').should('be.visible');
      cy.get('p').should('contain', 'Coloque em prática suas expertises em projetos reais');

      // Intercepta a abertura de nova aba (window.open) gerada pelo clique do botão
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpenLabs');
      });

      cy.get('button').contains('Acesse').click();

      const targetUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd1IspO3Hwylce2kHtIsmyBAkH7p3VFmdYUmdL75YXZ-DSNBA/viewform';
      cy.get('@windowOpenLabs').should('be.calledWith', targetUrl);
    });
  });

  it('Deve validar a integridade do card SouJunior Talk e o redirecionamento', () => {
    // Isola o escopo apenas para o card do Talk
    cy.contains('h2', 'SouJunior Talk').parent().parent().within(() => {

      cy.get('img[alt="SouJunior Talk"]')
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });

      cy.get('h2').should('be.visible');

      const textDescricao = 'Se você está procurando uma maneira de aprimorar seu inglês com pessoas reais, temos uma excelente notícia para você!';
      cy.get('p').should('have.text', textDescricao);

      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpenTalk');
      });

      cy.get('button').contains('Acesse').click();

      const linkDiscord = 'https://discord.com/invite/564CDre9F3';
      cy.get('@windowOpenTalk').should('be.calledWith', linkDiscord);
    });
  });
});
