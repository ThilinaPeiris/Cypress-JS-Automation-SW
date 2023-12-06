/// <reference types="Cypress" />

describe('Amazon Shopping Cart Test', () => {

  beforeEach(() => {
    cy.visit('https://www.amazon.com/');
  })

  it('Verify Product List Name And Product Details Name Is Equal.', () => {

    cy.selectSearchCategory('Books');
    cy.searchProduct("Automation");
    cy.selectProductRating(0);
    cy.selectProductLanguage('English');
    cy.selectAproductAndGetProductName(2)
      .then((text1) => {
        cy.navigateToAProductDetailsPage(2);
        cy.getProductTitleinProductDetailsPage()
          .invoke('text')
          .should((text2) => {
            expect(text1.toLowerCase().trim()).to.be.eq(text2.toLowerCase().trim())
          }
          );
      });
  })

  it.only('Verify that Cart Details are accurate.', () => {

    cy.selectSearchCategory('Books');
    cy.searchProduct("Automation");
    cy.selectProductRating(0);
    cy.selectProductLanguage('English');
    cy.navigateToAProductDetailsPage(2);
    cy.getProductTitleinProductDetailsPage()
      .invoke('text')

  })

})