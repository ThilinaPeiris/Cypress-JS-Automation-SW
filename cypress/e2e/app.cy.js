
describe('TodoMVC - React', function () {

    let TODO_ITEM_ONE = 'buy some cheese'
    let TODO_ITEM_TWO = 'feed the cat'
    let TODO_ITEM_THREE = 'book a doctors appointment'
  
    beforeEach(function () {
      cy.visit('/');
    })
  
    afterEach(() => {
      cy.window().then((win) => {
        // @ts-ignore
        win.document.activeElement.blur()
      })
    })
  
    // a very simple example helpful during presentations
    it('adds 2 todos', function () {
      cy.get('.new-todo')
      .type('learn testing{enter}')
      .type('be cool{enter}')
  
      cy.get('.todo-list li').should('have.length', 2)
    })
  
    context('When page is initially opened', function () {
      it('should focus on the todo input field', function () {
        // get the currently focused element and assert
        // that it has class='new-todo'
        //
        // http://on.cypress.io/focused
        cy.focused().should('have.class', 'new-todo')
      })
    })
});