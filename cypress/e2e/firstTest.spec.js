/// <references types="cypress" />

describe('My First Test', () => {
  it('Visits the app homepage', () => {
    cy.visit('/');
    cy.contains('Welcome to my Angular app!');
  });
});