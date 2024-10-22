import { onNavigationPage } from "../support/behavior/Pages/navigationView"
describe('Layout Page', function() {

    beforeEach('open app', () => {
        cy.visit('/')
    })

    it('Dialog tab is opened', () => {
        onNavigationPage.dialogTabClick()
    })

    it('Window tab is opened', () => {
        onNavigationPage.windowTabClick()
    })

    it('Popover tab is opened', () => {
        onNavigationPage.popoverTabClick()
    })

    it('Toastr tab is opened', () => {
        onNavigationPage.toastrTabClick()
    })

    it('Tooltip tab is opened', () => {
        onNavigationPage.tooltipTabClick()
    })
})