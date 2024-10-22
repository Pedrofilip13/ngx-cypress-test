import { onNavigationPage } from "../support/behavior/Pages/navigationView"
describe('Layout Page', function() {

    beforeEach('open app', () => {
        cy.visit('/')
    })

    it('Forms Layout tab is opened', () => {
        onNavigationPage.formLayoutClick()
    })

    it('Datepicker tab is opened', () => {
        onNavigationPage.datePickerClick()
    })
})