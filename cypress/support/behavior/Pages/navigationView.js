export class navigationPage{
    
    //FormsSection
    formSectionExpand(){
        cy.contains('Forms').click()
    }

    formLayoutClick(){
        this.formSectionExpand()
        cy.contains('Form Layouts').click()
    }

    datePickerClick(){
        this.formSectionExpand()
        cy.contains('Datepicker').click()
    }

    //LayoutSection
    layoutSectionClick(){
        cy.contains('Layout').click()
    }

    stepperTabClick(){
        this.layoutSectionClick()
        cy.contains('Stepper').click()
    }

    accordionTabClick(){
        cy.contains('Layout').click()
        cy.contains('Accordion').click()
    }

    //Modal&OverlaysSection
    modalAndOverlaysSectionExpand(){
        cy.contains('Modal & Overlays').click()
    }

    dialogTabClick(){
        this.modalAndOverlaysSectionExpand()
        cy.contains('Dialog').click()
    }

    windowTabClick(){
        this.modalAndOverlaysSectionExpand()
        cy.contains('Window').click()
    }

    popoverTabClick(){
        this.modalAndOverlaysSectionExpand()
        cy.contains('Popover').click()
    }

    toastrTabClick(){
        this.modalAndOverlaysSectionExpand()
        cy.contains('Toastr').click()
    }

    tooltipTabClick(){
        this.modalAndOverlaysSectionExpand()
        cy.contains('Tooltip').click()
    }
}

export const onNavigationPage = new navigationPage();