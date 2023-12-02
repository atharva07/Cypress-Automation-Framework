// cypress - spec file

/// <reference types="Cypress" />
describe('My Third Test Suite', function() 
{
    it('My Third Test case', function() 
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        // Static Dropdowns
        cy.get('select').select('Option2').should('have.value','option2')

        // Dynamic Dropdowns
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if($e1.text() == 'India')
            {
                cy.wrap($e1).click()
            }
        }) 

        // autocomplete
        cy.get('#autocomplete').should('have.value','India')
        // visible and invisible 
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio button
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})