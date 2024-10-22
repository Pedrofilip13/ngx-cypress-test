import { onNavigationPage } from "../support/behavior/Pages/navigationView"
describe('Layout Page', function() {

    beforeEach('open app', () => {
        cy.visit('/')
    })

    it('Stepper tab is opened', () => {
        onNavigationPage.stepperTabClick()
    })

    it('Accordion tab is opened', () => {
        onNavigationPage.accordionTabClick()
    })
})