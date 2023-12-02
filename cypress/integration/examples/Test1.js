// cypress - spec file

/// <reference types="Cypress" />
describe('My First Test Suite', function() 
{
    it('My first Test case', function() 
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[type='search']").type("ca")
        cy.wait(2000)
        // selenium 'get' hit url in browser, cypress 'get' acts like frindElement of Selenium
        cy.get('.product:visible').should('have.length', 4)
        // Parent Child. Accessing only one element from the all the elements.
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('sf')
        })

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            const vegText = $e1.find('h4.product-name').text()
            console.log(vegText)
            if (vegText.includes('Cashews'))
            {
                cy.wrap($e1).find('button').click()
            }
        })

        // assert the logo text is correctlt displayed or not
        cy.get('.brand').should('have.text', 'GREENKART')

        // this command is to print the logs
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })
        //cy.log(logo.text())
    })
})