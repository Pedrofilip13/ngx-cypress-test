import { onNavigationPage } from "../support/pageObjects/navigationView"
describe('Test with Page Objects', function() {

    beforeEach('open app', () => {
        cy.visit('https://example.cypress.io/commands/page-objects')
    })

    it('it verify form layout page', () => {
        onNavigationPage.formLayoutPage()
    })
})