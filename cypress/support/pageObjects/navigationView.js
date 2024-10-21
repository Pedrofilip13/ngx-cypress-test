export class navigationPage{
    
    formLayoutPage(){
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    }
}

export const onNavigationPage = new navigationPage();