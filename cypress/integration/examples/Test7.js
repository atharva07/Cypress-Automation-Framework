// cypress - spec file

/// <reference types="Cypress" />
describe('Mouse hover concept', function() 
{
    it('Mouse hover concept', function() 
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
    })
})