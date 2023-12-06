/// <reference types="Cypress" />

describe('Amazon Shopping Cart Item Removal', () => {

  it.only('Shopping Cart Item Removal', () => {

    cy.visit('https://www.amazon.com/')

    cy.get('#searchDropdownBox').select('Books', { force: true });
    cy.get('#twotabsearchtextbox').type('Automation{Enter}');

    cy.get('.a-list-item > .a-link-normal > section').eq(0).click();
    cy.get('li[aria-label="English"] span  a div + span').click();

    cy.get("div[data-index='3'] h2 a > span")
      .invoke('text')
      .then((text1) => {
        cy.get("div[data-index='3'] h2 a").click();
        cy.get("#productTitle")
          .invoke('text')
          .should((text2) => {
            expect(text1.toLowerCase().trim()).to.be.eq(text2.toLowerCase().trim())
          }
          );
      });
  })
})