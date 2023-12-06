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

    let productTitleInDetailsPage, ProductPriceInDetailsPage, subTotalInDetailsPage;

    cy.get("#productTitle")
      .invoke('text')
      .then((productTitle)=>{
        productTitleInDetailsPage = productTitle; 
      });

      cy.get('li span a.a-button-text > span ').contains('Paperback').click();
      
      cy.get("li span a.a-button-text > span span.a-color-price")
      .invoke('text')
      .then((productPrice)=>{
        ProductPriceInDetailsPage = productPrice; 
      });

      cy.get('select[name="quantity"] + span span.a-dropdown-prompt').click();
      cy.get('li[aria-labelledby="quantity_2"]').click();
      cy.get('#add-to-cart-button').click();

      //goToCartBtn
      cy.get('form + span  a.a-button-text').click();
      
      //deleteItemFromCart
      cy.get("input[value='Delete']").click();


  })

})