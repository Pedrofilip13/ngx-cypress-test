/// <references types="cypress" />

describe('My First Test', () => {
  it('Visits the app homepage', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    
    cy.get('[id="inputPassword2"]')
    cy.get('#inputPassword2')
    cy.get('.input-full-width')
    
  });
});