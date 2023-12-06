

    // cy.get('#searchDropdownBox').select('Books', { force: true });
    // cy.get('#twotabsearchtextbox').type('Automation{Enter}');
    // cy.get('.a-list-item > .a-link-normal > section').eq(0).click();
    // cy.get('li[aria-label="English"] span  a div + span').click();
    // cy.get("div[data-index='3'] h2 a > span")
    //   .invoke('text')

Cypress.Commands.add('selectSearchCategory', (category) => {
    cy.get('#searchDropdownBox')
        .select(category, { force: true });
})

Cypress.Commands.add('searchProduct', (productText) => {
    cy.get('#twotabsearchtextbox')
        .type(productText + '{Enter}');
})


Cypress.Commands.add('selectProductRating', (rating) => {
    cy.get('.a-list-item > .a-link-normal > section')
        .eq(rating)
        .click();
})

Cypress.Commands.add('selectProductLanguage', (language) => {
    cy.get("li[aria-label='" + language + "'] span  a div + span").click();
})

Cypress.Commands.add('selectAproductAndVerifyProductName', (language) => {
    cy.get("li[aria-label='" + language + "'] span  a div + span").click();
})

Cypress.Commands.add('selectAproductAndGetProductName', (productIndex) => {
    return cy.get("div[data-index='" + (productIndex + 1) + "'] h2 a > span")
        .invoke('text');
})

Cypress.Commands.add('navigateToAProductDetailsPage', (productIndex) => {
    return cy.get("div[data-index='" + (productIndex + 1) + "'] h2 a ").click();
})

Cypress.Commands.add('getProductTitleinProductDetailsPage', () => {
    return cy.get("#productTitle");
})