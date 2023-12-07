/// <reference types="Cypress" />

describe('Amazon Shopping Cart Test', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('Verify Product List Name And Product Details Name Is Equal', () => {

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

  it('Verify that Cart Details are accurate', () => {

    cy.selectSearchCategory('Books');
    cy.searchProduct("Automation");
    cy.selectProductRating(0);
    cy.selectProductLanguage('English');
    cy.navigateToAProductDetailsPage(2);

    cy.get("#productTitle")
      .invoke('text')
      .then((productTitleInDetailsPage) => {

        cy.get('li span a.a-button-text > span ').contains('Paperback').click();

        cy.get("li span a.a-button-text > span span.a-color-price")
          .invoke('text')
          .then((ProductPriceInDetailsPage) => {

            let subTotalInDetailsPage = (Number(ProductPriceInDetailsPage.trim().substring(1))) * 2

            cy.get('select[name="quantity"] + span span.a-dropdown-prompt').click();
            cy.get('li[aria-labelledby="quantity_1"]').click();
            cy.get('#add-to-cart-button').click();

            //goToCartBtn
            cy.get('form + span  a.a-button-text').click();

            cy.get('span.a-list-item span.a-truncate-cut')
              .invoke('text')
              .then((productName) => {
                productName = productName.trim().toLowerCase();
                productTitleInDetailsPage = productTitleInDetailsPage.trim().toLocaleLowerCase()
                expect(productName).equal(productTitleInDetailsPage);
              });
            cy.get('div.sc-badge-price-to-pay span')
              .invoke('text')
              .then((productPrice) => {
                productPrice = productPrice.trim().toLowerCase();
                ProductPriceInDetailsPage = ProductPriceInDetailsPage.trim().toLocaleLowerCase()
                expect(productPrice).equal(ProductPriceInDetailsPage);
              });

            cy.get("span[id='sc-subtotal-amount-buybox'] span").invoke('text').should('contain', subTotalInDetailsPage);
            cy.get("#sc-subtotal-label-buybox").invoke('text').should('contain', "2 item");

            //deleteItemFromCart
            cy.get("input[value='Delete']").click();

            cy.get("#sc-subtotal-label-activecart")
              .invoke('text')
              .should('contain', "0 items");

            cy.get("span[id='sc-subtotal-amount-activecart'] span")
              .invoke('text')
              .should('eq', "$0.00");

          });

      });

  })

})